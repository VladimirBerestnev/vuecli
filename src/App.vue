<template>
  <div id="app">
    <HeaderComp />

    <router-view />
    <FooterComp />

  </div>
</template>

<script>

//import BlogArt from './components/BlogArt.vue';
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';
//import MainProjects from './components/MainProjects.vue';
//import MainStarted from './components/MainStarted.vue';
//import MainNumbers from './components/MainNumbers.vue';




export default {
  name: 'App',
  components: {
    // BlogArt

    HeaderComp,
    FooterComp

  }
}
</script>

<style lang="scss">
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

ul {
  padding-left: 0rem;
}

img {
  vertical-align: baseline;
}
</style>
