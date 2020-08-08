<template>
  <article>
    <header>
      <h3 class="entry-date">
          <slot name="date"></slot>
      </h3>
      <h2 class="entry-title">
          <slot name="title"><router-link class="nostyle" to="/eintrag/xxx"></router-link></slot>
      </h2>
    </header>
    <section class="entry-content">
        <slot name="content"></slot>
    </section>
  </article>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.entry-date {
  color: #696969;
  margin: 0;
}

.entry-title {
  margin-top: 0px;
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

footer {
  border-radius: 5px;
  background-color: #fcfcfc;
  padding: 20px;
  width: 60%;
  margin-left: 20%;
}

input,
textarea {
  width: 60%;
  font-family: 'Arial', 'Helvetica', 'sans-serif';
}

#subject {
  height: 100px
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {

  .col-25,
  .col-75,
  button {
    width: 100%;
    margin-top: 0;
  }
}

</style>
