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
</template>

<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      Api:store.AllApiResult
    };
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