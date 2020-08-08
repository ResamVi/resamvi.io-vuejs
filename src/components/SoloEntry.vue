<template>
  <div>
    <HeaderSlim />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderSlim from './HeaderSlim.vue';

export default {
  components: {
    HeaderSlim,
  },
};
</script>


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
