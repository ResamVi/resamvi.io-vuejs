<template>
  <article>
    <header>
      <h3 class="entry-date">
          <slot name="date"></slot>
      </h3>
      <h2 class="entry-title">
          <slot name="title"></slot>
      </h2>
    </header>
    <section class="entry-content">
        <slot name="content"></slot>
    </section>
    <footer></footer>
  </article>
</template>

<style scoped>
.entry-date {
  color: #696969;
  margin: 0;
}
.entry-title {
  margin-top:0px;
  border-bottom: 1px solid #333;
}
.entry-content {
  font-family: 'Open Sans';
  margin-bottom: 10%;
  font-size: 1.5em;
}

ul {
  list-style-type: none;
  background-color: #f5f2f0;
  border-radius: 10px;
  padding: 10px;
}

ol {
  list-style-position: inside;
  padding-left: 10px;
}

</style>
