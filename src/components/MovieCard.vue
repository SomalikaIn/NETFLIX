<template>
    <div>
        <div class = "card" v-for = "(item, i) in movies" :key = "i">
            <img class = "poster" :src = "'https://image.tmdb.org/t/p/w500' + item.poster_path"/>
            <!-- <div class = "poster">
                <img :src = "'https://image.tmdb.org/t/p/w500' + item.poster_path"/>
            </div> -->
            <h4 class = "title">{{ item.title }}</h4>
            <!-- <div class = "title">
                <h4>{{ item.title }}</h4>
            </div> -->
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            movies: [],
        };
    },
    name: "MovieCard",
    mounted(){
        let vm = this;
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=16824a97ccb751138aa46ebe417e0517")
        .then((response) => {
            vm.movies.push(...response.data.results);
        })
    }
}
</script>
<style scoped>
.card{
    position: relative;
    display: inline-flex;
    margin-right: 20px;
    width: 200px;
    height: 360px;
    margin-bottom: 20px;
    background-color: red;
    border-radius: 5px;
    overflow: hidden;
    
    /* margin-top: 50px;
    margin-right: 20px; */
    /* display: flex;
    flex-wrap: wrap; */
}
.poster{
    display: flex; 
    width: 200px;
    height: 300px;
    /* padding-bottom: 20px; */
}
.title{
    position: absolute;
    padding-top: 290px;
    padding-left: 5px;
}


</style>