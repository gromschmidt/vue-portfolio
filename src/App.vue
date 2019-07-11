<template>
  <div id="app">
    <div id="nav">
      <div class="logo" v-html="logo">
        <!-- logo SVg -->
      </div>

      <div class="nav-links">
        <router-link to="/">Home</router-link> |
        <router-link to="/">About Me</router-link>
      </div>
    </div>

    <transition name="fade" mode="out-in" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
      <router-view class="container" />
    </transition>

    <Posts />

    <Background/>

  </div>
</template>

<script>
  import Posts from './components/Posts'
  import Background from './components/Background'


  export default {
    name: 'App',
    data() {
      return {
        logo: '<svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433.12 202.8"><defs><style>.cls-1{fill:#1d1d1b;}</style></defs><title>Unbenannt-2</title><rect class="cls-1" width="138.79" height="38.14"/><rect class="cls-1" y="80.91" width="138.79" height="38.14"/><rect class="cls-1" x="147.17" width="138.79" height="38.14"/><rect class="cls-1" x="147.17" y="80.91" width="138.79" height="38.14"/><rect class="cls-1" x="350.79" y="82.33" width="126.53" height="38.14" transform="translate(312.66 515.46) rotate(-90)"/><rect class="cls-1" x="79.43" y="59.36" width="80.59" height="38.14" transform="translate(41.29 198.16) rotate(-90)"/><rect class="cls-1" x="-41.87" y="122.79" width="121.89" height="38.14" transform="translate(-122.79 160.93) rotate(-90)"/><rect class="cls-1" x="147.17" y="164.66" width="138.79" height="38.14"/><rect class="cls-1" x="294.33" width="100.66" height="38.14"/><rect class="cls-1" x="294.33" y="164.66" width="100.66" height="38.14"/></svg>',
      }
    },
    components: {
      Posts, Background,

    },
    methods: {
      beforeLeave(element) {
        this.prevHeight = getComputedStyle(element).height;
      },
      enter(element) {
        const {
          height
        } = getComputedStyle(element);

        element.style.height = this.prevHeight;

        setTimeout(() => {
          element.style.height = height;
        });
      },
      afterEnter(element) {
        element.style.height = 'auto';
      },
    },

  }
</script>

<style lang="scss">
  * {
    scroll-behavior: smooth;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-bottom: 3rem;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }

    .logo {
      max-width: 100px;
    }
  }

  .container {
    max-width: 1440px;
    margin: auto;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: height, opacity;
    transition-timing-function: ease;
    overflow: hidden;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>