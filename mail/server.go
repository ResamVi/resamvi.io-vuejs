package main

import (
	"crypto/tls"
	"fmt"
	"log"
	"net/http"
	"net/smtp"

	cfg "./config"
)

type Mail struct {
	sender    string
	recipient string
	subject   string
	body      string
}

func main() {
	http.HandleFunc("/", handler)
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	if r.Method == "POST" {
		r.ParseForm()
		content := fmt.Sprintf("Name:\t\n%sTitel:\t%s\nInhalt:\n%s", r.Form["name"][0], r.Form["title"][0], r.Form["content"][0])
		sendMail(content)
	}
}

func sendMail(content string) {
	mail := Mail{}
	mail.sender = cfg.Sender
	mail.recipient = cfg.Recipient
	mail.subject = cfg.Subject
	mail.body = content

	messageBody := mail.BuildMessage()

	auth := smtp.PlainAuth("", mail.sender, cfg.Password, cfg.Host)

	// Gmail will reject connection if it's not secure
	tlsconfig := &tls.Config{
		InsecureSkipVerify: true,
		ServerName:         cfg.Host,
	}

	conn, err := tls.Dial("tcp", cfg.Host+":"+cfg.Port, tlsconfig)
	if err != nil {
		log.Panic(err)
	}

	client, err := smtp.NewClient(conn, cfg.Host)
	if err != nil {
		log.Panic(err)
	}

	// step 1: Use Auth
	if err = client.Auth(auth); err != nil {
		log.Panic(err)
	}

	// step 2: add to
	if err = client.Mail(mail.sender); err != nil {
		log.Panic(err)
	}
	if err = client.Rcpt(mail.recipient); err != nil {
		log.Panic(err)
	}

	// Data
	w, err := client.Data()
	if err != nil {
		log.Panic(err)
	}

	_, err = w.Write([]byte(messageBody))
	if err != nil {
		log.Panic(err)
	}

	err = w.Close()
	if err != nil {
		log.Panic(err)
	}

	client.Quit()

	log.Println("Mail sent successfully")
}

func (mail *Mail) BuildMessage() string {
	message := ""
	message += fmt.Sprintf("From: %s\r\n", mail.sender)
	message += fmt.Sprintf("To: %s\r\n", mail.recipient)
	message += fmt.Sprintf("Subject: %s\r\n", mail.subject)
	message += "\r\n" + mail.body
	return message
}
