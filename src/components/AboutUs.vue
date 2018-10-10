<template>
  <main>
    <header>
      <h1 id="title">Impressum</h1>
    </header>
    
    <article id="content">
      <h1 id="quote">"Nowhere can man find a quieter or more untroubled retreat than in his own soul."</h1>
      <p id="cite">Marcus Aurelius, Meditations Book IV</p>
      
      <p>Bei „Memento Mori“ hat man als erstes öden Deutschunterricht von über 400 Jahren alten Gedichten wieder vor Augen. „Gedenke, dass du sterben wirst“ – trübe Thematik.</p>
      <p>Die Stoa des antiken Griechenlands findet trotzdem Trost in dieser „trüben“ Erinnerung.</p>
      <p>Denn bevor sich jeder „letztlich zur Ruhe legt“ - „zurückkehrt“, macht man sich bewusst, dass jeder nur eine einzige Chance bekommen hat.<br /> Man mag sich ungern dem Allgegenwärtigsten bewusst machen: Verbringt lieber seine Zeit mit Inaktivität.</p>
      <p>„Memento Mori“ ist jetzt vielmehr der Grund zur Tat zu schreiten. Das Richtige getan zu haben. Einmal gelebt zu haben. In jedem Stil - kreativ, auf dem Schlachtfeld, in aller Exzellenz. <br /> Und sich schließlich bewusst zu machen, dass für die trivialen Dinge im Leben nicht genug Zeit und Energie verbleibt.</p>
    </article>

    <footer id="selfie">
      <img src="@/assets/ich.jpg" alt="ich" class="img-responsive">
      <p id="name">Julien Midedji</p>
    </footer>
  </main>
</template>

<script>
export default {
  name: 'About-us',
};
</script>

<style scoped>
#title {
  font-size: 4em;
  margin-top: 20vh;
  text-align: center;
}

#content {
  height: 70vh;
  text-align: justify;
}

p {
  font-family: 'Open Sans';
  font-size: 1.5em;
}

#quote {
  font-family: 'Open Sans';
  text-align: center;
  font-size: 1.5em;
}

#cite {
  text-align: right;
  font-size: 1em;
}

#selfie {
  justify-content:center;
  align-items: center;
  margin-bottom: 5%;
  display: flex;
}

#name {
  margin-left: 5%;
}
</style>