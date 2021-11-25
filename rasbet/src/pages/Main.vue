<template>
  <h1 class="title">RasBet</h1>
  <div class="wrapper">
    <ul class="navbar">
      <li><v-link href="/">Home</v-link></li>
      <li><v-link href="/about">About</v-link></li>
      <li><v-link href="/foo">Under Construction</v-link></li>
    </ul>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VLink from '../components/VLink.vue'
export default {
  components: {
    VLink
  }
}
</script>
<style lang="css">
  .title {
    text-align: center;
    background-color: blue;
  }

  .wrapper {
    display: flex;
    height: 100%;
  }

  .navbar {
    background-color: blue;
    flex-basis: 20%;
    list-style-type: none;
    padding: 0;
  }

  .content {
    flex-basis: 80%;
  }

  .title, 
  .wrapper,
  .navbar, 
  .content {
    margin: 0;
  }
</style>