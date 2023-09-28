import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import Trending from "@/views/Trending.vue";
import Movie from "@/views/Movie.vue";
import TV from '@/views/TvShow.vue';
// import Genre from '@/views/Genre.vue';
//import SignUp from '@/components/SignUp.vue'
//import SignIn from '@/components/SignIn.vue'
import MovieDetail from '@/components/MovieDetail.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/trending",
    name: "Trending",
    component: Trending,
  },
  {
    path: "/movie",
    name: "Movie",
    component: Movie,
  },
  {
    path: "/tv",
    name: "TvShow",
    component: TV,
  },
  // {
  //   path: "/genre",
  //   name: "Genre",
  //   component: Genre,
  // },
  // {
  //   path: "/signUp",
  //   name: "SignUp",
  //   component: SignUp,
  // },
  // {
  //   path: "/signIn",
  //   name: "SignIn",
  //   component: SignIn,
  // },
  {
    path: "/detail",
    name: "MovieDetail",
    component: MovieDetail,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  //scroll page to the top
  scrollBehavior() {
    window.scrollTo(0,0);
  }
  
});

export default router;