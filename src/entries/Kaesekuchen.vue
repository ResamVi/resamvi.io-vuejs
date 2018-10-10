<template>
  <Entry>
    <template slot="date">3. Mai, 2017</template>
    <template slot="title">Käsekuchen (&Oslash; 20cm)</template>
    <template slot="content">
      <h2>Zutaten</h2>
        <ul>
          <li>350g Magerquark</li>
          <li>65g Butter</li>
          <li>140g Zucker</li>
          <li>125g Mehl</li>
          <li>250ml Milch</li>
          <li>2 Eier</li>
          <li>Tiefgefrorene Zitrone</li>
          <li>3/4 Vanillepuddingpulver</li>
          <li>0,5 TL Backpulver</li>
          <li>4 EL Öl</li>
        </ul>

        <h2>Anleitung</h2>
        <ol>
          <li>Magerquark, Butter, Milch und Eier rausstellen (bis Zimmertemperatur erreicht ist).</li>
          <li>Tiefgefrorene Zitrone aus der Gefriertruhe nehmen. Mit Küchenreibe die Haut raspeln (Fleisch der Zitrone unwichtig)</li>
          <li>Springform einfetten.</li>
          <li>125g Mehl und 65g Butter vermengen.</li>
          <li>40g Zucker, 0,5 TL Backpulver und 1 Ei hinzugeben und vermengen.</li>
          <li>Fläche auf dem Tisch sowie Nudelholz mit Mehl bestäuben, 3/4 der Teigmasse ausrollen.</li>
          <li>Ausgerollten Teig in die Springform legen.</li>
          <li>Rest der Teigmasse den Rand der Springform auskleiden. "Schlangen" rollen und an den Boden kneten.</li>
          <li>Springform für 10 Minuten in den Kühlschrank stellen.</li>
          <li>Herd auf 200°C Ober- und Unterhitze vorheizen.</li>
          <li>350g Quark, 3/4 Packung Vanillepuddingpulver, 250ml Milch, 100g Zucker, 1 Ei, 4 EL Öl und den Zitronenaufrieb vermengen.</li>
          <li>In die Springform gießen</li>
          <li>35 Minuten in den Ofen stellen.</li>
          <li>Abkühlen lassen.</li>
        </ol>

        <h2>Ergebnis</h2>
        <img src="@/assets/kaesekuchen/kaesekuchen.jpg" alt="kaesekuchen" class="img-responsive">
    </template>
  </Entry>
</template>

<script>
import Entry from '@/components/Entry.vue';

export default {
  name: 'Kaesekuchen',
  components: {
    Entry,
  },
};
</script>
