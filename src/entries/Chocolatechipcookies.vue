<template>
  <Entry>
    <template slot="date">13. April, 2017</template>
    <template slot="title"><router-link class="nostyle" to="/eintrag/Bouncingball">Chocolate Chip Cookies</router-link></template>
    <template slot="content">
    <h2>Zutaten</h2>
      <ul>
        <li>200g Schokolade</li>
        <li>250g Butter</li>
        <li>260g Zucker</li>
        <li>360g Mehl</li>
        <li>1 TL Natron</li>
        <li>2 TL Vanille Extrakt</li>
        <li>2 Eier</li>
        <li>Prise Salz</li>
      </ul>

      <h2>Anleitung</h2>
      <ol>
        <h3>Teig</h3>
        <li>Schokolade klein schneiden.</li>
        <li>Ofen bei 180°C vorheizen.</li>
        <li>Mehl, Natron, Salz in eine Schüssel und umrühren.</li>
        <li>Butter schaumig schlagen.</li>
        <li>Zucker zur Butter geben. Umrühren.</li>
        <li>Eier und Vanilleextrakt zur Butter-Zuckermischung geben. Gründlich umrühren.</li>
        <h3>Füllung</h3>
        <li>Mehl-Natron-Salzmischung stückweise dazu geben und rühren bis geradeso vermischt.</li>
        <li>Schokolade hinzugeben, grobe Stückchen beiseite legen für später. Umrühren.</li>
        <li>Keksteig rund formen und auf's Backblech legen. Etwas platt drücken. Menge genügt für drei Bleche.</li>
        <li>Einzelne grobe Schokostückchen auf den Kekskugeln verteilen.</li>
        <li>10-13min bei Ober- und Unterhitze backen lassen.</li>
        <li>Abkühlen lassen.</li>
      </ol>
      <h2>Ergebnis</h2>
      <img src="@/assets/003_chocolatechipcookies/chocolatechipcookies.jpg" alt="chocolate chip cookies" class="img-responsive" loading="lazy">
    </template>
  </Entry>
</template>

<script>
import Entry from '@/components/Entry.vue';

export default {
  name: 'chocolatechipcookies',
  components: {
    Entry,
  },
};
</script>
