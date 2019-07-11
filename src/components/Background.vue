<template>
  <div class="background">

    <img src="http://patrick-baessler.de/wp-content/uploads/2019/03/Background-1.svg" alt="" v-rellax="{ speed: 5, }">
    <img src="http://patrick-baessler.de/wp-content/uploads/2019/03/Background-1.svg" alt="" v-rellax="{ speed: 3, }">

  </div>
</template>

<script>
  export default {
    name: 'Background',
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss">
  .background {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -9999;
    right: 0;

    img {
      position: absolute;
      width: 100%;
      left: 0;
      mix-blend-mode: multiply;
      
    }
  }
</style>