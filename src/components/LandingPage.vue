<template>
  <nav class="grid grid-cols-4 mt-5">
    <div class="self-center">
      <span class="font-bold text-red-600 text-3xl font-semibold">MOVIE</span>
      <span class="text-3xl font-semibold font-bold text-white">XDB</span>
    </div>
    <div class="inline-block self-center col-span-2 justify-self-center">
      <form @submit.prevent="getAPI">
        <input
          type="text"
          placeholder="Movie name"
          class="py-3 px-20 rounded-full"
          style="outline: none"
          v-model="searchInput"
        />
        <button
          class="text-center text-white py-3 px-9 ml-4 rounded-full hover:bg-white hover:text-black"
          style="border: 2px solid white; outline:none"
        >
          Search
        </button>
      </form>
    </div>
    <ul class="inline-block self-center justify-self-end mr-5">
      <li><a class="text-white cursor-pointer">About us</a></li>
    </ul>
  </nav>

  <section class="mt-20 grid grid-cols-3 sect" style="">
    <div class="col-start-1 col-end-3 self-center mx-12">
      <p class="text-white text-2xl leading-relaxed">
        Movie X is a movie search engine that uses <br />
        themoviedb api to search for movies info<br />
        just input the movie name and get detail about the movie
      </p>
      <button
        class="inline bg-white mr-20 mt-12 p-3 px-20 text-xl rounded-full"
      >
        subscribe
      </button>
      <button
        class="inline hover:bg-white p-3 px-20 text-xl rounded-full text-white hover:text-black"
        style="border: 2px solid white"
      >
        Learn More
      </button>
    </div>

    <div class="col-start-3"></div>
  </section>

  <section id="action" class="grid grid-cols-8 mt-20">
    <div class="">
      <img src="../assets/img/movie1.jpg" alt="" />
    </div>
    <div class="">
      <img src="../assets/img/movie3.jpg" alt="" />
    </div>
    <div class="">
      <img src="../assets/img/movie4.jpg" alt="" />
    </div>
    <div class="">
      <img src="../assets/img/movie5.jpg" alt="" />
    </div>
    <div class="">
      <img src="../assets/img/movie7.jpg" alt="" />
    </div>
    <div class="col-span-3 text-white justify-self-center self-center">
      <h1 class="text-4xl" style="font-family: 'Dancing Script', cursive">
        Action
      </h1>
    </div>
  </section>

  <section id="action" class="grid grid-cols-8 mt-20">
    <div class="col-span-3 text-white justify-self-center self-center">
      <h1 class="text-4xl" style="font-family: 'Dancing Script', cursive">
        Romance
      </h1>
    </div>
    <div class="">
      <img src="../assets/img/movie11.jpg" alt="" />
    </div>
    <div class="">
      <img src="../assets/img/movie13.jpg" alt="" />
    </div>
    <div class="">
      <img src="../assets/img/movie14.jpg" alt="" />
    </div>
    <div class="">
      <img src="../assets/img/movie15.jpg" alt="" />
    </div>
    <div class="">
      <img src="../assets/img/movie16.jpg" alt="" />
    </div>
  </section>

  <section id="action" class="grid grid-cols-8 mt-20">
    <div class="">
      <img src="../assets/img/movie26.jpg" alt="" />
    </div>
    <div class="">
      <img src="../assets/img/movie25.jpg" alt="" />
    </div>
    <div class="">
      <img src="../assets/img/movie24.jpg" alt="" />
    </div>
    <div class="">
      <img src="../assets/img/movie23.jpg" alt="" />
    </div>
    <div class="">
      <img src="../assets/img/movie21.jpg" alt="" />
    </div>
    <div class="col-span-3 text-white justify-self-center self-center">
      <h1 class="text-4xl" style="font-family: 'Dancing Script', cursive">
        Bollywood
      </h1>
    </div>
  </section>

  <section
    id="action"
    class="grid grid-cols-4 mt-20 my-10 h-72"
    style="background-color: #454545"
  >
    <div class="self-center justify-self-center">
      <p class="my-5 text-white">TV SERIES</p>
      <img src="../assets/img/movie28.jpg" alt="" />
    </div>
    <div class="self-center justify-self-center mt-16">
      <img
        src="../assets/img/movie29.jpg"
        alt=""
        style="height: 11rem; width: 18rem"
      />
    </div>
    <div class="self-center justify-self-center mt-16">
      <img
        src="../assets/img/movie30.jpg"
        alt=""
        style="height: 11rem; width: 18rem"
      />
    </div>
    <div class="self-center justify-self-center mt-16">
      <img src="../assets/img/movie31.jpg" alt="" />
    </div>
  </section>

  <footer class="my-10 h-20">
    <hr />
    <p class="text-white text-center my-10">
      Copyright all right reserved 2021
    </p>
  </footer>
</template>

<script>
import { store } from "../store.js";
export default{
  data(){
    return{
      searchInput:'',
      searchResult:{}
    }
  },
  methods:{
    getAPI(){
      var formdata = new FormData();

      var requestOptions = {
        method: 'GET',
        // body: formdata,
        redirect: 'follow'
      };

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=2a11049a87177653043ceb948303a399&query=${this.searchInput}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result.results)
          store.state.ApiResult = []
          for(const i in result.results){
            store.setApiResult(result.results[i])
          }
          this.$router.push('/result')
          })
        .catch(error => console.log('error', error));
      }
    }
    
};
</script>

<style>
.sect {
  background-image: linear-gradient(rgba(0, 0, 0, 0.856), rgba(0, 0, 0, 0.877)),
    url(../assets/img/heist.png);
  height: 60vh;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>