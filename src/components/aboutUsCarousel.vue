<template>
  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="box-aboutOne">
        <h3>Загружай видео для рилсов</h3>
        <h4>после <a href="">регистрации</a></h4>
      </div>
    </div>
    <div class="carousel-item">
      <div class="box-aboutTwo">
        <h3>Актуальные рилсы</h3>
        <h4>обновляются каждый день</h4>
      </div>
   </div>
    <div class="carousel-item">
      <div class="box-aboutThree">
      <h3>Lorem, ipsum.</h3>
        <h4>Lorem, ipsum dolor.</h4>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</template>

<script setup>

</script>

<style scoped>
.carousel-control-prev,
.carousel-control-next {
 width: 5%;
 top:5vw;
 margin-inline: 35vw;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
  background-color: black;
  margin: 0;
}
.box-aboutOne,
.box-aboutTwo,
.box-aboutThree {
  width: 20vw;
  height: 25vw;
  margin-inline: auto;
  margin-top: 100px;
  background: linear-gradient(to top, black, 20%, cyan);
  border-radius: 20%;
}

h3 {
  padding-top: 50%;
  margin: auto;
}
h4 {
  margin-top: 1em;
}
a {
  text-decoration: none;
  color: green;
}
</style>