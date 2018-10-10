<template>
  <Entry>
    <template slot="date">13. Oktober 2017</template>
    <template slot="title">SPAYLE - Alpha Release</template>
    <template slot="content">
      <header class="center">
        <p>Der Alpha-Release von meinem Game:</p>
        <img src="https://user-images.githubusercontent.com/6261556/31128423-097c8264-a852-11e7-932a-8576599832d9.png">
        <p>Shoot 'em up game</p>
      </header>
        
      <section align="center" style="font-size:20px">
        Your mission is to explore hostile outer space. However the engineers of your rocket ship decided it<br />
        was best to stick all the defensive measures on the BACK of your rocket. <br />
        Soooo... you're the pilot, tasked to lead this mission: Navigate and align your rocket ship JUUUST right 
        and explode-fart their faces with all the means you got on board - <strong>sp</strong>ace flight with st<strong>yle</strong>!
      </section>

      <img src="https://user-images.githubusercontent.com/6261556/31543397-21020cf8-b016-11e7-8071-c3fb19c5d803.gif" class="img-responsive">
      <br />
      <img src="https://user-images.githubusercontent.com/6261556/31543338-e5aa1998-b015-11e7-99cf-2ae10088db15.gif" class="img-responsive">
      

      <h2>Play now</h2>

      The latest release is available <a href="game/spayle.html">here</a>

      <h2>Download</h2>

        <table>
          <tr>
            <th>Version 1.0.0-alpha</th>
            <th>Download link</th>
          </tr>
          <tr>
            <td>Windows (32-bit)</td>
            <td><a href="https://github.com/ResamVi/spayle/releases/download/1.0.0-alpha/windows-x32.zip">Download</a></td>
          </tr>
          <tr>
            <td>Mac (64-bit)</td>
            <td><a href="https://github.com/ResamVi/spayle/releases/download/1.0.0-alpha/mac-x64.zip">Download</a></td>
          </tr>
          <tr>
            <td>Linux (32-bit)</td>
            <td><a href="https://github.com/ResamVi/spayle/releases/download/1.0.0-alpha/linux-x32.tar">Download</a></td>
          </tr>
        </table>

      <div class="center">Written in</div>

      <div class="center"><img src="@/assets/spayle/phaser_logo.png" width="190" height="160"></div>

      <div class="center">Created by <a href="mailto:admin@resamvi.de">Julien</a>. Powered by pizza, pixels and love.</div>
      
      <h1>Developer notes</h1>
      Features:
      <ol>
        <li>Kontrollierbares Raumschiff</li>
        <li>Ansatz für erste Gegner</li>
        <li>Turbo Modus (mit hoher Schubfrequenz erhöht sich Beschleunigung exponentiell)</li>
        <li>Menu</li>
        <li>Splash</li>
      </ol>
      
      <p>5,5 Wochen Entwicklungszeit</p>
      <p>Angefangen mit 0 Ahnung von Phaser und 0,1 Ahnung von Javascript</p>
      
      <img src="@/assets/spayle/contribs.png" class="img-responsive">
      
      <div class="paragraph">
        <div><img src="@/assets/spayle/code.png"></div>
        <p>Hauptsächliche Schwierigkeit war das aufstellen der Entwicklungsumgebung. Ich habe mich für Visual Studio Code
        entschieden.</p>
      </div><br>
      
      <div class="paragraph">
        <p>Da aber Games in Phaser eine Serverumgebung zum Laufen benötigen, musste ich erst einen minimalen Server in Node.js schreiben.<br>
        Weil Node.js noch in Javascript geschrieben ist und die Integration mit Visual Studio Code sehr ausgebaut ist, lässt sich der Server zusammen mit dem Spiel ganz leicht beim Debuggen ausführen und später um Multiplayer-Elemente mit Sockets.io erweitern.</p>
        <div><img src="@/assets/spayle/node.png"></div>
      </div><br>
      
      <div class="paragraph">
        <div><img src="@/assets/spayle/browserify.png"></div>
        <p>Was ich dann mit wachsendem @/assets/spayle feststellen musste, ist dass langsam die Sache - in einer einzigen Datei zusammengequetscht - unübersichtlich wurde.<br>
        Also brauchte ich etwas um das ganze auf mehrere Datein zu verteilen und zu Modularisieren.<br>
        "Hey, es gibt in JS6 jetzt auch import", durfte ich ein paar Tage später feststellen. Naja, zu spät.</p>
      </div><br>
      
      <div class="paragraph">
        <p>Und zum Schluss kann mit Phaser einem Framework in Javascript der Quelltext für das eigentliche Spiel geschrieben werden.
        Alle umständliche low-level Arbeit die mit WebGL/Canvas werden wegabstrahiert.<br>
        Was übrig bleibt ist alles was es eigentlich braucht. Texturen/Sprites, Physik und Kollisionssystem, Sound/Musikverarbeitung, Schnittstelle für Steuerung usw.</p>
        <div><img src="@/assets/spayle/phaser.png"></div>
      </div>
      
      <h1>Komplikationen</h1>
      
      <ol>
        <li>Schwierigstes Problem bleibt es die Parameter so zu wählen, dass es eine balancierte Steuerung hat aber das Feeling und den Flow nicht beeinträchtigen.<br>
        Heißt z.B. das Schiff soll schnell genug sein damit es zur Atmosphäre und Stimmung passt, aber der Spieler soll trotzdem früh genug auf Gefahren reagieren können.<br>
        Das Schiff soll wendig sein und man sollte schnell lenken können. Trotzdem soll die Präzision behalten werden um genaustens auf Gegner zielen zu können
        </li><br>
        
        <li>Trigonometrie. Die ganze Zeit.<br>
        Das ist auch eigentlich überhaupt kein Problem in zweidimensionalen Raum. Problem ist nur in Phaser werden (verständlicherweise) Rotationen bei Physik und Graphiken getrennt betrachtet. Jedoch sind bei mir immer Abweichungen von &pi; oder &pi;/2 welches den Code sehr unansehlich aufbläht.</li><br>
        
        <li>Ich habe schon eine Grenze der Phaser API gefunden: Der Sound lässt sich zwar abspielen, einblenden, ausblenden, verstärken, zeitlich manipulieren undsoweiter. Aber der Pitch oder auch die Schnelligkeit lässt sich nicht manipulieren.
        Muss wohl noch eine weitere library herhalten müssen, nur für etwas pitch shifting.</li><br>
        
        <li>Letzendlich ist das Schwierigste, dass ich nur mit Objektorientierter Programmierung vertraut bin. Während Javascript mit JS6 den syntaktischen Zucker anbietet Klassen zu machen, versuche ich es trotzdem erstmal mittels Modulen, Prototypisierungen und Konstruktoren. Aber erst gestern musste ich einsehen, dass langsam der Code Spaghetti wird. <i>Zeit für mehr refactoring...</i></li>
      </ol>
    </template>
  </Entry>
</template>

<script>
import Entry from '@/components/Entry.vue';

export default {
  name: 'Spayle',
  components: {
    Entry,
  },
};
</script>

<style scoped>
.paragraph {
  display:flex;
  align-items:center;
}

ol {
  list-style-position: inside;
  padding-left: 10px;
}
</style>
