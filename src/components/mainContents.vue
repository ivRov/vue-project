<template>
<div>
  <ul>
      <li class="videoCard" 
        v-for="(film,idx) in allFilms"
        :key="idx">
        <filmCard
        :filmName="film.filmName"
        :filmHref="film.filmHref"
        :filmAbout="film.filmAbout"
      />
      </li>
  </ul>
</div>
</template>

<script>
import filmCard from './filmCard.vue'

export default {
  components: {filmCard},
    data() {
        return{
           allFilms: [
            {
              filmName:'мальчишник в вегасе',
              filmHref:'./src/assets/video/v1.mp4',
              filmAbout:'фраза из фильма 1....'
            },
             {
              filmName:'время',
              filmHref:'./src/assets/video/v2.mp4',
              filmAbout:'фраза из фильма 2....'
            },
           ]
        }
    },
    
    methods: {
       download() {
        
       }
    }
}
</script>

<style>
.videoCard{
  list-style: none;
  margin-inline: auto;
  padding: 0;
}
div,ul{
  margin: 0;
  padding: 0;
}


</style>