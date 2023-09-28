<template>
    <NavBar/>
    <div class="box">
        <div class = "backimage" v-for = "(item, i) in detail" :key = "i">
            <img class = "img-fluid" :src = "'https://image.tmdb.org/t/p/original' + item.backdrop_path"/>
        </div>
        <div class = "wrapper"></div>

        <div class = "container">
            <div class = "poster" v-for = "(item, i) in detail" :key = "i">
                <img class = "img-fluid" :src = "'https://image.tmdb.org/t/p/w500' + item.poster_path"/>
            </div>

            <div class = "text">
                <a href = "https://www.moviekids.tv/watch-movie/a-man-called-otto-91870.9253123">
                    <button class = "btn btn-danger mb-3"><i class="fa-solid fa-play"></i> Watch Now</button>
                </a>
                <div class = "title" v-for = "(item, i) in detail" :key = "i">
                    <h3 style = "font-weight: bold;" >{{ item.title }}</h3>
                </div>
                <h5 style = "font-weight: bold; padding-top:20px;">Overview</h5>
                <div class = "sub-title" v-for = "(item, i) in detail" :key = "i">
                    <p>{{ item.overview }}</p>
                </div>
                <table class = "table">
                    <tr v-for = "(item, i) in detail" :key = "i">
                        <!-- <th>Released:</th> -->
                        <td><b>Released: </b> {{ item.release_date }}</td>
                        <!-- <th>Duration:</th> -->
                        <td><b>Duration: </b>{{ item.runtime + "mn" }}</td>
                        
                    </tr>
                    <tr v-for = "(item, i) in detail" :key = "i">
                        <!-- <th>Genre:</th> -->
                        <td><b>Genre: </b>Comedy, Drama</td>
                        <!-- <th>Country:</th> -->
                        <td><b>Country: </b>United States of America</td>
                    </tr>
                    <tr v-for = "(item, i) in detail" :key = "i">
                        <!-- <th>Language:</th> -->
                        <td><b>Language: </b>{{ item.original_language }}</td>
                        <!-- <th>Status:</th> -->
                        <td><b>Status: </b>{{item.status}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <Suggestion/>
    <Footer/>
</template>

<script>
import axios from 'axios'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Suggestion from '@/components/Suggestion.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        Footer,
        Suggestion,
    },
    data(){
      return{
        detail: [],
      };
  },
  mounted(){
    let md = this;
      axios.get("https://api.themoviedb.org/3/movie/937278?api_key=16824a97ccb751138aa46ebe417e0517")
      .then((response) => {
          md.detail.push(response.data);
      });
  },
  
}

</script>

<style scoped>
body {
    background: #000000;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
}
.backimage{
    width: 100%;
    position: absolute;
    object-fit: cover;
    left: 0%;
    top: 0%;
    z-index: -1;
    filter: blur(5px)
}
.container{
    padding-bottom: 100px;
}
.wrapper{
    width: 100%;
    height: 140%;
    position: absolute;
    object-fit: cover;
    left: 0%;
    top: 0%;
    z-index: -1;
    background-color: skyblue;
    opacity: 0.7;
}
.poster{
    width: 300px;
    margin-top: 150px;
    border: none;
    overflow: hidden;
    border-radius: 10px;
}
.btn{
    border-radius: 50px;
}

.text{
    position: absolute;
    top: 15%;
    left: 30%;
    width: 800px;
    height: 400px;
}
ul{
    /* list-style: none;
    list-style-type: disc; */
    display: inline-flex;
}
.title{
    font-size: 30px;
    font-weight: 600;
}
table{
    border-collapse: separate;
    border-spacing: 0;
}
th, td{
    padding: 3px;
    border-top-style: hidden;
}

</style>


