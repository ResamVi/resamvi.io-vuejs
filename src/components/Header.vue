<template>
  <header id="hero-page">
    <div id="container">
      <div id="hero-image">
        <img src="@/assets/logo.png" id="logo">
        <img src="@/assets/verticalLine.png" id="verticalLine">
        <h1 id="resamvi">ResamVi</h1>
      </div>

      <div id="hero-description">
        <div>
          Hey, ich bin <router-link to="/impressum">Julien</router-link>.
          <br />
          Informatikstudent.
        </div>
      </div>

      <div id="hero-icons">
        <div class="icon-column">
          <a href="https://github.com/ResamVi">
            <img src="@/assets/github.png" class="icon">
          </a>
          <span class="icon-description">Code</span>
        </div>
        
        <div class="icon-column">
          <a href="https://www.youtube.com/user/ResamVi">
            <img src="@/assets/youtube.png" class="icon">
          </a>
          <span class="icon-description">Videos</span>
        </div>

        <div class="icon-column">
          <a href="https://wiki.resamvi.io/books">
            <img src="@/assets/wiki.png" class="icon">
          </a>
          <span class="icon-description">Wiki</span>
        </div>

        <div class="icon-column">
          <a href="https://dst.resamvi.io/">
            <img src="@/assets/dstvis.png" class="icon">
          </a>
          <span class="icon-description">DST-Vis</span>
        </div>

        <div class="icon-column">
          <a href="https://stats.resamvi.io/">
            <img src="@/assets/infclass.png" class="icon">
          </a>
          <span class="icon-description">InfClass Stats</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
#hero-page {
  margin: 0 10%;
  height: 100vh;
  display: grid;
}

#container {
  margin: auto;
}

#hero-image {
  justify-content: center;
  align-items: center;
  display: flex;
}

#verticalLine {
  max-width: 100%;
  display: block;
  height: 10vh;
}

#resamvi {
  padding-left: 1%;
}

#hero-description {
  text-align: center;
  font-family: 'Space Mono';
}

#hero-icons {
  display: flex;
  margin-top: 4%;
  justify-content: center;
}

#left-right-spacing {
  margin: 0 10%;
}

.icon {
  margin: 10px 10px 0px 10px;
  display: inline;
}

.icon-column {
  flex-direction: column;
  align-items: center;
  display: flex;
  margin: 0 15px;
}

.icon-description {
  font-family: 'Cinzel';
  font-weight: bold;
  overflow-wrap: break-word;
}

/* Resizing Text and Images appropriately */
@media only screen and (min-width: 614px) {
  #resamvi {
    font-size: 4em;
  }

  #hero-description {
    font-size: 1.5em;
  }
}

@media only screen and (min-width: 420px) and (max-width: 613px) {
  #resamvi {
    font-size: 3em;
  }

  #hero-description {
    font-size: 1.2em;
  }

  #logo {
    width: 40%;
    height: auto;
  }
}

@media only screen and (max-width: 419px) {
  #resamvi {
    font-size: 2em;
  }

  #hero-description {
    font-size: 0.8em;
  }

  #logo {
    width: 30%;
    height: auto;
  }
}
</style>
