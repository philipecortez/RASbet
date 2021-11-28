<template>
  <ul class="navbar">
    <li v-for="(item, key, index) in menu" :key="index">
      <router-link :to="item"> {{key}} </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menu: {
          home: '/',
          sports: '/sports'
      }
    }
  }
}
</script>
<style lang="css">
 .navbar {
    background-color: blue;
    flex-basis: 20%;
    list-style-type: none;
    padding: 0;
  }
</style>