<template>
  <header id="hero-page">

    <div id="horizontal-vertical-center">
      <div id="hero-image">
        <img src="@/assets/logo.png">
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
        <a href="https://github.com/ResamVi">
          <img src="@/assets/github.png" class="icon">
        </a>
        <a href="https://www.hackerrank.com/ResamVi" id="left-right-spacing">
          <img src="@/assets/hackerrank.png" class="icon">
        </a>
        <a href="https://www.youtube.com/user/ResamVi">
          <img src="@/assets/youtube.png" class="icon">
        </a>
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

#horizontal-vertical-center {
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

/* Resizing Text and Images appropriately */
@media only screen and (min-width: 614px) {
  #resamvi {
    font-size: 4em;
  }

  #hero-description {
    font-size: 1.5em;
  }

  .icon {
    width: 100%;
  }
}

@media only screen and (min-width: 420px) and (max-width: 613px) {
  #resamvi {
    font-size: 3em;
  }

  #hero-description {
    font-size: 1.2em;
  }

  .icon {
    width: 70%;
  }
}

@media only screen and (max-width: 419px) {
  #resamvi {
    font-size: 2em;
  }

  #hero-description {
    font-size: 0.8em;
  }

  .icon {
    width: 50%;
  }
}
</style>
