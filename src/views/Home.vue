<template>
  <div class="home">
    <div v-if="home" v-html="home.content"></div>

  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'home',
    data() {
      return {
        home: null
      }
    },
    methods: {
      getHomePage() {
        axios.get(`patrick-baessler.de/wp-json/better-rest-endpoints/v1/page/home`)
          .then(response => {
            this.home = response.data
          })
      }
    },
    created() {
      this.getHomePage()
    },
  }
</script>