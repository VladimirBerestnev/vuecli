<template>
  <div id="app">
    <FooterComp />
    <HeaderComp />

  </div>
</template>

<script>

//import BlogArt from './components/BlogArt.vue';
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';


export default {
  name: 'App',
  components: {
    // BlogArt
    FooterComp,
    HeaderComp
  }
}
</script>

<style lang="scss"></style>
