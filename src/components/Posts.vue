<template>
  <div class="all-posts-wrap">
    <h2>Projekte</h2>
    <div class="all-posts">
      <div class="post-card" v-for="(post) in posts" :key="post.id">
        <!-- <img :src="post.better_featured_image.source_url"  width="50px" alt=""> -->
        <router-link :to="{name: 'SinglePost', params: {category: post.category_names[0].replace(' ', '-').toLowerCase() ,post_id: post.slug}}">

          <img :src="post.media.large" :srcset="`${post.media.thumbnail}  780w,
                ${post.media.medium} 1024w,
                ${post.media.medium_large} 1440w,
                ${post.media.large} 2400w`" width="100%" height="auto" :alt="post.title">
          {{post.title}}

          <div class="tag" v-for="(tagname, key) in post.tag_names" :key="key">
            {{tagname}}
          </div>
        </router-link>
      </div>

    </div>
    <button @click="loadMore">Load More</button>


  </div>

</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Posts',
    data() {
      return {
        posts: [],
        currentPage: 1,
        totalPages: null,
      }
    },
    methods: {
      getPosts() {
        axios.get(
            `http://patrick-baessler.de/wp-json/better-rest-endpoints/v1/posts?page=${this.currentPage}&acf=false&content=false&yoast=false`
            )
          .then(response => {
            this.totalPages = response.headers["x-wp-totalpages"]
            response.data.forEach(dataSet => {
              this.posts.push(dataSet)
            })

          })
      },
      loadMore() {
        if (this.totalPages > this.currentPage) {
          this.currentPage++
          this.getPosts()
        }
      }

    },
    created() {
      this.getPosts()
    },
  }
</script>

<style lang="scss">
  .all-posts {
    max-width: 840px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 1rem;

    .post-card {
      border: 1px solid black;

      .tag {
        display: block;
        width: auto;
        background: #ddd;
      }
    }
  }
</style>