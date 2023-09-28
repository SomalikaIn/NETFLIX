<template>
  <NavBar/>
  <div class = "container-fluid pt-5">
    <Carousel/>
  </div>
  <div class = "container-fluid">
      <div class = "card" v-for = "(item, i) in popular" :key = "i">
          <img class = "img-fluid" :src = "'https://image.tmdb.org/t/p/w500' + item.poster_path"/>
          <router-link class = "nav-link" to = "/detail">
            <button class = "btn-play" type = "button"><i class="fa-regular fa-circle-play"></i></button>
          </router-link>
          <h4 class = "title">{{ item.name }}</h4>
      </div>
  </div>
  <Footer/>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Carousel from '@/components/Carousel.vue'
import axios from 'axios'

export default{
  data(){
      return{
          popular: [],
      };
  },
  name: "MovieCard",
  components: {
      Carousel,
      NavBar,
      Footer,
    },
  mounted(){
    let lm = this;
      axios.get("https://api.themoviedb.org/3/tv/popular?api_key=16824a97ccb751138aa46ebe417e0517")
      .then((response) => {
          lm.popular.push(...response.data.results);
      });
  }
}
</script>
<style scoped>
.container-fluid{
  justify-content: center;
  background-color: black;
  padding-top: 30px;
}
.card{
  position: relative;
  display: inline-flex;
  margin: 25px -15px 0 32px;
  border: none;
  width: 200px;
  height: 360px;
  /* border-radius: 5px; */
  /* overflow: hidden; */
  background-color: transparent;
}
.img-fluid{
  display: flex; 
  width: 200px;
  height: 300px;
  transition: .5s ease;
  box-shadow: 0px 0px 15px 5px rgba(78, 78, 78, 0.433);
}

.card:hover .img-fluid{
    opacity: 0.5;
}
.title{
  position: absolute;
  font-size: 16px;
  color: red;
  font-weight: 600;
  /* padding: 230px 10px 0px 10px; */
  top: 87%;
  left: 2%;
}
.card:hover .title {
  opacity: 1;
}
.btn-play {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  font-size: 60px;
  background-color:transparent;
  border: none;
  color: red;
}

.card:hover .btn-play {
  opacity: 1;
}

</style>