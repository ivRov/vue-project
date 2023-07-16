<template>
  <div class="card">
    <div class="card-header">
      {{filmName}}
    </div>
    <video :key="filmHref" oncontextmenu="return false;"
      controls controlslist="nodownload" class="video"> 
      <source :src='filmHref' class="card-img-top" alt="..." type="video/mp4">
    </video>
    <div class="card-body">
      <p class="card-text">{{filmAbout}} </p>
    </div>
    <div class="card-bottom">
      <a :href="filmHref"  class="btn btn-success" download>Скачать</a>
    </div>
  </div>
</template>

<script>
export default {
    props: ['filmName','filmHref','filmAbout']
}
</script>

<style>
.card {
    margin-top: 100px;
    width: 95vw;
    margin-inline: auto;
    text-align: center;
}
.video {
    width: 94vw;
    height: 95vw;
}
.btn-success {
    margin-bottom: 20px;
}
</style>