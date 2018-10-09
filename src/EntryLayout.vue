<template>
  <article>
    <header>
      <h3>
          <slot name="date"></slot>
      </h3>
      <h2>
          <slot name="title"></slot>
      </h2>
    </header>
    <section>
        <slot name="content"></slot>
    </section>
    <footer></footer>
  </article>
</template>

<style scoped>
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
</style>
