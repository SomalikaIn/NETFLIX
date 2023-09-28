<template>
  <div class = "container-fluid">
    <p class="header">You May Also Like</p>
      <div class = "card" v-for = "(item, i) in trending" :key = "i">
          <img class = "img-fluid" :src = "'https://image.tmdb.org/t/p/w500' + item.poster_path"/>
          <router-link class = "nav-link" to = "/detail">
            <button class = "btn-play" type = "button"><i class="fa-regular fa-circle-play"></i></button>
          </router-link>
          <h4 class = "title">{{ item.title }}</h4>
          <h4 class = "title">{{ item.name }}</h4>
      </div>
  </div>
</template>
<script>
import axios from 'axios'

export default{
  data(){
      return{
        trending: [],
      };
  },
  name: "MovieCard",
  components: {
    },
  mounted(){
    let td = this;
      axios.get("https://api.themoviedb.org/3/movie/937278/recommendations?api_key=16824a97ccb751138aa46ebe417e0517")
      .then((response) => {
          td.trending.push(...response.data.results);
      });
  }
}

</script>
<style scoped>
.container-fluid{
  justify-content: center;
  background-color: black;
}
.header {
    font-family:Arial, Helvetica, sans-serif;
    font-size: 20px;
    /* font-weight: 600; */
    text-align: left;
    padding-left: 30px;
    padding-top: 30px;
    color: white;
  }
.card{
  position: relative;
  display: inline-flex;
  margin: 0px -15px 25px 32px;
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