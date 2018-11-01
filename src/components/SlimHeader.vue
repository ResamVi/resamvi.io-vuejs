<template>
  <header id="hero-page">
    <div id="hero-image">
      <img src="@/assets/logo.png">
      <img src="@/assets/verticalLine.png" id="verticalLine">
      <div>
        <h1 id="resamvi">ResamVi</h1>
        <div id="hero-description">Hey, <a href="impressum.html">Julien</a> hier.</div>
      </div>
    </div>
  </header>
</template>

<style scoped>
#hero-page {
  margin: 0 10%;
}

#hero-image {
  justify-content: center;
  align-items: center;
  display: flex;
}

#resamvi {
  padding-left: 1%;
  margin-bottom: 0;
}

#verticalLine {
  max-width: 100%;
  display: block;
  height: 10vh;
}

#hero-description {
  padding-left: 1%;
  text-align: center;
  font-family: 'Space Mono';

}

/* Resizing Text and Images appropriately */
@media only screen and (min-width: 614px) {
  #hero-description {
    font-size: 0.7em;
  }
}

@media only screen and (min-width: 420px) and (max-width: 613px) {
  #hero-description {
    font-size: 0.7em;
  }
}

@media only screen and (max-width: 419px) {
  #hero-description {
    font-size: 0.7em;
  }
}
</style>
