<template>
    <div class = "container-fluid">
        <!-- Trending Now--------------------------------------------- -->
        <router-link class = "nav-link" to = "/trending">
    <p class="title">
      Trending Now &nbsp;
      <i style = "font-size: 16px;" class="fa-solid fa-angle-right"></i>
    </p>
  </router-link>
  <Carousel class = "card" :items-to-show="6" :wrap-around="true">
      <Slide v-for = "(item, i) in trending" :key = "i">
          <div class="carousel__item" >
            <img class = "img-fluid" :src = "'https://image.tmdb.org/t/p/w500' + item.poster_path"/>
            <router-link class = "nav-link" to = "/detail">
            <button class = "btn-play" type = "button"><i class="fa-regular fa-circle-play"></i></button>
          </router-link>
          </div>
      </Slide>

      <template #addons>
          <Navigation />
      </template>
  </Carousel>

  <!-- Movies--------------------------------------------- -->
  <router-link class = "nav-link" to = "/movie">
    <p class="title">
      Latest Movies &nbsp;
      <i style = "font-size: 16px;" class="fa-solid fa-angle-right"></i>
    </p>
  </router-link>
  <Carousel class = "card" :items-to-show="6" :wrap-around="true">
      <Slide v-for = "(item, i) in movie" :key = "i">
          <div class="carousel__item" >
            <img class = "img-fluid" :src = "'https://image.tmdb.org/t/p/w500' + item.poster_path"/>
            <router-link class = "nav-link" to = "/detail">
            <button class = "btn-play" type = "button"><i class="fa-regular fa-circle-play"></i></button>
          </router-link>
          </div>
      </Slide>

      <template #addons>
          <Navigation />
      </template>
  </Carousel>

  <!-- TV --------------------------------------------- -->
  <router-link class = "nav-link" to = "/tv">
    <p class="title">
      Latest TV Shows &nbsp;
      <i style = "font-size: 16px;" class="fa-solid fa-angle-right"></i>
    </p>
  </router-link>
  <Carousel class = "card" :items-to-show="6" :wrap-around="true">
      <Slide v-for = "(item, i) in popular" :key = "i">
          <div class="carousel__item" >
            <img class = "img-fluid" :src = "'https://image.tmdb.org/t/p/w500' + item.poster_path"/>
            <router-link class = "nav-link" to = "/detail">
            <button class = "btn-play" type = "button"><i class="fa-regular fa-circle-play"></i></button>
          </router-link>
          </div>
      </Slide>

      <template #addons>
          <Navigation />
      </template>
  </Carousel>

    </div>
</template>

<script>
import { defineComponent } from 'vue'
//install npm install vue3-carousel
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import axios from 'axios'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
      Carousel,
      Slide,
      Navigation,
  },
  data(){
    return{
        trending: [],
        movie: [],
        popular: [],
    };
  },
  mounted(){
      let td = this;
      axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=16824a97ccb751138aa46ebe417e0517")
      .then((response) => {
          td.trending.push(...response.data.results);
      });
      let tm = this;
      axios.get("https://api.themoviedb.org/3/movie/popular?api_key=16824a97ccb751138aa46ebe417e0517")
      .then((response) => {
          tm.movie.push(...response.data.results);
      });
      let lm = this;
      axios.get("https://api.themoviedb.org/3/tv/popular?api_key=16824a97ccb751138aa46ebe417e0517")
      .then((response) => {
          lm.popular.push(...response.data.results);
      });
      
  }
})
</script>
<style scoped>
.container-fluid{
    color:white;
    background-color: #141414;
    /* padding-top: 20px; */
  }
.card{
  background-color: #141414;
    margin:0 30px;
    border: none;
    padding-bottom: 30px;
}
.carousel__item {
position: relative;
  height: 300px;
  width: 200px;
  font-size: 20px;
  display: flex;
  /* background-color: transparent; */
  border: none;
}
p {
    font-size: 18px;
    font-weight: 600;
    /* text-align: left; */
    padding-left: 15px;
    padding-top: 20px;
    color: white;
  }

p:hover{
  color: #ffffff;
  opacity: 0.7;
}
  .img-fluid{
  display: flex; 
  transition: .5s ease;
}

.carousel__item:hover .img-fluid{
    opacity: 0.5;
}
  .btn-play {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  font-size: 60px;
  border: none;
  color: red !important;
  background-color: transparent;
}

.carousel__item:hover .btn-play {
  opacity: 1;
  background-color: transparent !important;
}


</style>