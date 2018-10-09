<template>
  <EntryLayout>
    <template slot="date">23. Juni 2017</template>
    <template slot="title">Apfelstreuselkuchen</template>
    <template slot="content">
      <h2>Zutaten</h2>
      <h3>Teig</h3>
      <ul>
        <li></li>
        <li>500g Mehl</li>
        <li>2 &#189; gestrichene Teelöffel Backpulver</li>
        <li>150g Zucker</li>
        <li>1 Packung Vanillezucker</li>
        <li>2 Eier</li>
        <li>200g Butter</li>
      </ul>
      <h3>Apfelfüllung</h3>
      <ul>
        <li></li>
        <li>1 kg Äpfel (~6 Stück)</li>
        <li>1 Zitrone</li>
        <li>50g Zucker</li>
        <li>1 Packung Vanillezucker</li>
        <li>1 Teelöffel Zimt</li>
      </ul>
      <h2>Anleitung</h2>
      <ol>
        <li>Springform ausbuttern, Eier und Butter rausstellen damit sie Zimmertemperatur sind.</li>
        <li>Mehl mit Backpulver verrühren.</li>
        <li>Butter, Zucker, Vanillezucker und 2 Eier hinzugeben.</li>
        <li>Alles verrühren bis es streuslig ist.</li>
        <li>Teig zu einer großen Kugel kneten.</li>
        <li>2/3 der Kugel werden für den Boden benutzt, die restlichen 1/3 abreißen für die Streusel später.</li>
        <li>Die 2/3 Kugel als Boden in die Springform kneten. Einen Rand (~2-3cm) formen.</li>
        <li>Ofen vorheizen (180°C Ober- und Unterhitze).</li>
        <li>Äpfel schälen. Dabei zuerst die Äpfel in Viertel schneiden, Kerngehäuse des Apfels wegschneiden, dann in
          Scheiben
          schneiden.</li>
        <li>Zu den geschälten Äpfel Vanillezucker, Zucker, Zimt und dem Saft der Zitrone hinzugeben. Per Hand
          durchrühren.</li>
        <li>Die vorbereiteten Äpfelscheiben als Füllung in die Springform geben.</li>
        <li>Den restlichen Teig darüber streuseln.</li>
        <li>Bei 180°C Ober- und Unterhitze für 50 Minuten im Backofen lassen.</li>
        <li>Abkühlen lassen.</li>
      </ol>
      <h2>Ergebnis</h2>
      <img src="@/assets/apfelkuchen/apfelkuchen.jpg" alt="apfelkuchen" class="img-responsive">
    </template>
  </EntryLayout>
</template>

<script>
import EntryLayout from '../EntryLayout.vue';

export default {
  name: 'Apfelkuchen',
  components: {
    EntryLayout,
  },
};
</script>
