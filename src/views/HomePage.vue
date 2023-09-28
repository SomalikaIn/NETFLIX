<template>
    <NavBar/>
    <Header/>
    <Body/>
    <!-- <Carousel/> -->
    <Footer/>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  import Header from '@/components/Header.vue'
  import Body from '@/components/Body.vue'
  // import Carousel from '@/components/Carousel.vue'
  import Footer from '@/components/Footer.vue'
  
  export default {
    name: 'App',
    components: {
      NavBar,
      Header,
      Body,
      // Carousel,
      Footer
    },
    // mounted()
    // {
    //     let user = localStorage.getItem('userinfo');
    //     if(!user)
    //     {
    //         this.$router.push({name:'SignIn'})
    //     }
    // }

  }
  </script>
  
  