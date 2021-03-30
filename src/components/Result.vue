<template>
  <div class="text-white text-center mt-2" v-if="Api.length">Search result....</div>
  <div class="text-white text-center mt-2" v-else>No Search results..</div>
  <section class="grid grid-cols-8 m-10" v-for="api in Api">
    <div class="col-start-1 col-end-2" v-if="api.poster_path">
      <img :src="image(api.poster_path)" alt="" style="max-width:10rem; height:16rem "/>
    </div>
    <div class="col-start-2 col-span-6 p-10" style="border: 1px solid red" v-if="api.poster_path">
      <div style="max-height:18rem">
        <div class="mt-3 ml-5">
            <p class="text-white">Movie Name: {{ api.title }}</p>
        </div>
        <div class="mt-3">
            <p class="text-white ml-5 mt-3">Overview: {{ api.overview }}</p>
        </div>
        <div class="mt-3">
            <p class="text-white ml-5 mt-3">Rating: {{ api.vote_average }}</p>
        </div>
        <div class="mt-3">
            <p class="text-white ml-5 mt-3">Year: {{ api.release_date }}</p>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="grid grid-cols-8 m-8" style="">
    <div class="col-start-1 col-end-2">
      <img src="../assets/img/movie1.jpg" alt="" class="" style="max-height:15rem; max-width:10rem;"/>
    </div>
    <div class="col-start-2 col-span-6 p-10" style="border: 1px solid red" >
      <div class="" style="max-height:13rem">
        <div class="mt-3">
            <p class="text-white">Movie Name: Halo</p>
        </div>
        <div class="mt-3" >
            <p class="text-white ">Overview: Natoy, like any other child, finds joy and excitement in the simplest of things, especially in eating halo-halo filled with pink gelatin and red sago. Things change suddenly when, as he is watching television, a news report about the ongoing war in Mindanao shows footage of a badly wounded soldier waiting to be rescued. That soldier, almost bleeding to death, is his father, Corporal Lino Bolante. This starts his journey as he and his mother Sonia wait for help that comes too late. This story does not only show how the war in Mindanao robs a child of his innocence, but also shows the shadows of war that Filipino homes confront everyday.</p>
        </div>
        <div class="mt-3">
            <p class="text-white ">Rating: 7.9</p>
        </div>
        <div class="mt-3">
            <p class="text-white ">Year: 2017</p>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      static: "http://image.tmdb.org/t/p/w500",
    };
  },
  computed: {
    Api() {
      return store.state.ApiResult
    },
  },
  methods: {
    image(path) {
      return "http://image.tmdb.org/t/p/w342" + path;
    },
  },
};
</script>

<style>

</style>