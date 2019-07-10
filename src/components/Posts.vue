<template>
  <div class="all-posts-wrap">
    <h2>Projekte</h2>
    <div class="all-posts" v-masonry gutter="16" origin-left="false" 
      item-selector=".post-card">
      <div v-masonry-tile class="post-card" v-for="(post) in posts" :key="post.id">
        <!-- <img :src="post.better_featured_image.source_url"  width="50px" alt=""> -->
        <router-link :to="{
            name: 'SinglePost', 
            params: {category: post.category_names[0].replace(' ', '-').toLowerCase() ,
            post_id: post.slug}
            }">

          <img :src="post.media.large" :srcset="`${post.media.thumbnail}  780w,
                ${post.media.medium} 1024w,
                ${post.media.medium_large} 1440w,
                ${post.media.large} 2400w`" width="100%" height="auto" :alt="post.title">
          <div class="card-content">
            <h4>{{post.title}}</h4>
          </div>

        </router-link>
      </div>

    </div>
    <button @click="loadMore" class="loadMore" v-if="totalPages > currentPage">
      Load More
    </button>
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
            `https://patrick-baessler.de/wp-json/better-rest-endpoints/v1/posts?page=${this.currentPage}&acf=false&content=false&yoast=false`
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
  @import "./src/assets/scss/colors";

  .all-posts-wrap {
    max-width: 1440px;
    margin: auto;
    position: relative;
    margin-top: 5rem;

    h2 {
      position: absolute;
      text-transform: uppercase;
      font-size: 3rem;
      top: 0px;
      left: 0;
      font-weight: 900;
      letter-spacing: 10px;
      color: $blue-dark;
      writing-mode: vertical-lr;
      margin: 0;
      transform: rotate(180deg);
    }
  }

  .all-posts {
    padding-left: 7.5rem;
    margin-bottom: 2rem;

    .post-card {
      border-radius: 5px;
      overflow: hidden;
      background: #f3f3f3;
      max-width: 200px;
      margin-bottom: 1rem;
      animation: fadeIn 2s forwards;
      

      a {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
        text-decoration: none;

        img {
          width: 100%;
          height: auto;
        }

        .card-content {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;

          h4 {
            color: rgb(67, 67, 67);
            color: $blue-light;
            text-decoration: none;

          }
        }
      }

      .tag {
        display: block;
        width: auto;
        background: #ddd;
      }
    }

  }

  .loadMore {
    appearance: none;
    background: $blue-dark;
    color: white;
    display: block;
    width: 100%;
    padding: 2rem;
    font-size: 2rem;
    max-width: 960px;
    margin: auto;
    text-transform: uppercase;
    font-weight: 800;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }

  
</style>