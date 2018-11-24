<template>
  <Entry>
    <template slot="date">24. November, 2018</template>
    <template slot="title">Schlossparklauf</template>
    <template slot="content">
      <img src="@/assets/schlossparklauf18/logo.jpg" alt="logo" class="img-responsive" width="50%">
      <br>
      <strong>Wo:</strong> Karlsruhe
      <br>
      <strong>Wie weit:</strong> 9.6 km
      <br>
      <strong>Webseite:</strong>
      <a href="https://www.ksc.de/verein/abteilungen/leichtathletik/schlossparklauf/">https://www.ksc.de/verein/abteilungen/leichtathletik/schlossparklauf/</a>
      <img src="@/assets/schlossparklauf18/strecke.jpg" alt="strecke" class="img-responsive">
      <br>

      <h2>Splits</h2>
      <table>
        <thead>
          <tr>
            <th>Kilometer</th>
            <th>Zeit (min:sek)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td style="color:brown;">4:45</td>
          </tr>
          <tr>
            <td>2</td>
            <td>4:26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>4:24</td>
          </tr>
          <tr>
            <td>4</td>
            <td style="color:red;">4:37</td>
          </tr>
          <tr>
            <td>5</td>
            <td>4:27</td>
          </tr>
          <tr>
            <td>6</td>
            <td>4:27</td>
          </tr>
          <tr>
            <td>7</td>
            <td style="color:red;">4:37</td>
          </tr>
          <tr>
            <td>8</td>
            <td style="color:limegreen;">4:19</td>
          </tr>
          <tr>
            <td>9</td>
            <td style="color:limegreen;">4:20</td>
          </tr>
          <tr>
            <td>9,6</td>
            <td>3:47</td>
          </tr>
          <tr style="border-top: 2px solid grey;">
            <td>&Oslash;</td>
            <td>4:27</td>
          </tr>
        </tbody>
      </table>

      <h2>Bilder</h2>
      <p class="center"> Eingang zum Stadion wo die Strecke anfängt </p>
      <img src="@/assets/schlossparklauf18/eingang.jpg" alt="eingang" class="img-responsive">
      
      <p class="center"> Meine Startnummer </p>
      <img src="@/assets/schlossparklauf18/nummer.jpg" alt="nummer" class="img-responsive">
      
      <p class="center"> Blick zum Stadion wenn man an der Startstelle steht </p>
      <img src="@/assets/schlossparklauf18/leute.jpg" alt="leute" class="img-responsive">
      
      <p class="center"> Zielgerade im Stadion </p>
      <img src="@/assets/schlossparklauf18/stadion.jpg" alt="stadion" class="img-responsive">
      
      <p class="center"> Es muss dreimal die gleiche Strecke gelaufen werden </p>
      <img src="@/assets/schlossparklauf18/schild.jpg" alt="schild" class="img-responsive">
      
      <p class="center"> Blick zum Start vom Stadion aus </p>
      <img src="@/assets/schlossparklauf18/aussicht.jpg" alt="aussicht" class="img-responsive">
      <br>
      <p class="center"> Gutes Wetter, aber kalt. Ich hatte kurze Hosen, nice.</p>
      <img src="@/assets/schlossparklauf18/wetter.jpg" alt="wetter" class="img-responsive">
      
      <p class="center"> KSC Maskottchen gibt einem High-Fives. Ich hab mein High-Five verfehlt wegen meinem letzten Sprint :&lt; <p class="center">
      <img src="@/assets/schlossparklauf18/ziel.jpg" alt="nummer" class="img-responsive">
      
      <p class="center"> Verpflegung nach dem Ziel. Wo ich weit abseits stehe und versuche nicht zu kotzen vor Anstrengung </p>
      <img src="@/assets/schlossparklauf18/ende.jpg" alt="ende" class="img-responsive">

      <p class="center"> Der Grund wieso 9.6km statt die üblichen 9.9km (fragt mich nicht wieso 9.9km) war die Baustelle die eine Stadionrunde nicht ermöglichte </p>
      <img src="@/assets/schlossparklauf18/baustelle.jpg" alt="baustelle" class="img-responsive">


      <h2>Ergebnis</h2>
      <p>Beim Wettlauf habe ich nur aus Spaß an der Freude mitgemacht. Schließlich lässt sich auf der Strecke kein 10km PR machen.</p>

      <p class="center"> Strava Graph </p>
      <img src="@/assets/schlossparklauf18/graph.png" alt="graph" class="img-responsive">

      <p class="center"> Vergleich zu meinem PR (orange) </p>
      <img src="@/assets/schlossparklauf18/vergleich.png" alt="vergleich" class="img-responsive">

      <h2>Gesamtplatzierung: 126. von 812</h2>
      <h2>Altersklasse: 20. von 71</h2>
      <h2>Gesamtzeit: 0:42:01</h2>
    </template>
  </Entry>
</template>

<script>
import Entry from '@/components/Entry.vue';

export default {
  name: 'schlossparklauf18',
  components: {
    Entry,
  },
};
</script>
