<template>
  <article>
    <header>
      <h3 class="entry-date">
          <slot name="date"></slot>
      </h3>
      <h2 class="entry-title">
          <slot name="title"></slot>
      </h2>
    </header>
    <section class="entry-content">
        <slot name="content"></slot>
    </section>
    <footer>
      <h2 class="center">Schreib dem Autor 'ne Mail</h2>
      <form style="width:100%;">
        <div class="row">
          <h3 class="col-25"><label for="name">Name</label></h3>
          <h3 class="col-75"><input type="text" name="name" v-model="name"></h3>
        </div>
        <div class="row">
          <h3 class="col-25"><label for="lname">Titel</label></h3>
          <h3 class="col-75"><input type="text" name="title" v-model="title"></h3>
        </div>
        <div class="row">
          <h3 class="col-25"><label for="subject">Text</label></h3>
          <h3 class="col-75"><textarea id="subject" name="subject" v-model="content"></textarea></h3>
        </div>
      </form>
      <div class="center">
        <button @click="send">Senden</button>
      </div>
    </footer>        

  </article>
</template>

<script>

export default {

  data() {
    const entryTitle = this.$route.path.slice('/eintrag/'.length);
    
    return {
      name: 'Anonym',
      title: `Re: ${entryTitle}`,
      content: 'Hey, ',
    };
  },

  methods: {
    send() {
      const http = new XMLHttpRequest();
      http.open('POST', 'https://resamvi.de:9090', true);
      http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
          alert('Mail gesendet');
        }
      };

      http.send(`name=${this.name}&title=${this.title}&content=${this.content}`);
    },
  },
};

</script>

<style scoped>
.entry-date {
  color: #696969;
  margin: 0;
}

.entry-title {
  margin-top: 0px;
  border-bottom: 1px solid #333;
}

.entry-content {
  font-family: 'Open Sans';
  margin-bottom: 10%;
  font-size: 1.5em;
}

ul {
  list-style-type: none;
  background-color: #f5f2f0;
  border-radius: 10px;
  padding: 10px;
}

ol {
  list-style-position: inside;
  padding-left: 10px;
}

footer {
  border-radius: 5px;
  background-color: #fcfcfc;
  padding: 20px;
  width: 60%;
  margin-left: 20%;
}

input,
textarea {
  width: 60%;
  font-family: 'Arial', 'Helvetica', 'sans-serif';
}

#subject {
  height: 100px
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {

  .col-25,
  .col-75,
  button {
    width: 100%;
    margin-top: 0;
  }
}

</style>
