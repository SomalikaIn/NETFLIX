<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light" style = "background-color: black;">
      <!-- Logo -->
  <router-link class = "nav-link" to = "/">
    <img src="@/assets/Netflix_Logo_PMS.png" width = "110" class="img-fluid" alt="Responsive image">
  </router-link>

  <!-- toggler (for responsive) -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Pages -->
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active" id="home" @click="underline">
        <router-link class = "nav-link" to = "/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class = "nav-link" to = "/trending">Trending</router-link>
      </li>
      <li class="nav-item">
        <router-link class = "nav-link" to = "/movie">Movies</router-link>
      </li>
      <li class="nav-item">
        <router-link class = "nav-link" to = "/tv">TV Shows</router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link class = "nav-link" to = "/genre">Genre</router-link>
      </li> -->
    </ul>

    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
      <!-- <input type="text" v-model="input" placeholder="Movie Titles..." />
    <div class="item movie" v-for="movie in filteredList()" :key="movie">
        <p>{{ movie }}</p>
    </div>
    <div class="item error" v-if="input && !filteredList().length">
        <p>No results found!</p>
      </div> -->
      <button v-on:click="signup" class="btn btn-danger my-2 my-sm-0" type="submit">Sign Up</button>
    </form>

  </div>
</nav>
</template>

<script>
// import { ref } from "vue";
// let input = ref("");
// const movie = ["Ice Age 5","Murder Mystery","Last of Us","L","M"];
// function filteredList() {
//     return movie.filter((movie) =>
//         movie.toLowerCase().includes(input.value.toLowerCase())
//     );
// }
export default{
  name: 'SignOut',
  methods:{
    signout(){
      localStorage.clear();
      this.$router.push({name:"SignIn"})
      alert("Sign Out Success!")
    },
    underline() {
      document.getElementById('home').style.fontStyle = "underline"
    }
  },
}

</script>


<style scoped>
*{
  font-size: 15px;
  color: white !important;
}
/* .navbar{
  position: relative;
} */
.nav-item{
  padding: 0 10px;

}
.form-control{
  background-color: black;
}
.navbar-toggler{
  background-color: white;
}

/* sign in */
.root{
  position: relative;
}
.modal{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal > div{
  background-color: #000000;
  padding: 50px;
  border-radius: 5px;
}
.nav-item:active {
  background-color: red;
}

</style>