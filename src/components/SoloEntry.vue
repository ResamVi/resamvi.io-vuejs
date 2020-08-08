<template>
  <div>
    <header id="hero-page">
      <div id="hero-image">
        <img src="@/assets/logo.png" id="logo">
        <img src="@/assets/verticalLine.png" id="verticalLine">
        <div>
          <h1 id="resamvi">ResamVi</h1>
          <div id="hero-description">Hey, <router-link to="/impressum">Julien</router-link> hier.</div>
        </div>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
h1 {
  overflow-wrap: normal;
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

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

  #resamvi {
    font-size: 4em;
  }
}

@media only screen and (min-width: 420px) and (max-width: 613px) {
  #hero-description {
    font-size: 0.7em;
  }
  
  #resamvi {
    font-size: 3em;
  }
  
  #logo {
    width: 40%;
    height: auto;
  }
}

@media only screen and (max-width: 419px) {
  #hero-description {
    font-size: 0.7em;
  }

  #resamvi {
    font-size: 1em;
  }

  #logo {
    width: 30%;
    height: auto;
  }
}
</style>
