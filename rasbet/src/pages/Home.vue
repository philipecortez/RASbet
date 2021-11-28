<template>
<div>
  <p>test</p>
</div>
</template>

<script>
export default {
  name: 'Home',
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