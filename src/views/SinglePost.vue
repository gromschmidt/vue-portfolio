<template>
  <div v-if="post" class="single-post">
    <h1>{{post.title}}</h1>
    <div>
      <p v-html="post.content"></p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    name: 'SinglePost',
    data() {
      return {
        post: null,
        id: this.$route.params.post_id
      }
    },
    methods: {
      getPost() {
        axios.get(`patrick-baessler.de/wp-json/better-rest-endpoints/v1/post/${this.id}?acf=false&yoast=false`)
          .then(response => {
            
            this.post = response.data
            window.document.title = `My-Page | ${this.post.title}`
          })
      },
      updateId() {
        
        this.id = this.$route.params.post_id
        this.getPost()
        
      }
    },
    created() {
      this.getPost()
    },
    beforeMount() {
      
    },
    watch: {
      $route: 'updateId'
    },
  }
</script>

<style lang="scss">
.single-post {
  max-width: 1200px;
  border: 1px solid black;
  margin: auto;
}
</style>
