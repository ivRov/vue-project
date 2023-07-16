<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">

      <a class="navbar-brand" href="#">
          <img src="../assets/img/iconNavBar.png"  width="30" height="30" alt="">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="home" class="nav-link active" aria-current="page" >Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link to="about" class="nav-link active" aria-current="page">О сервисе</router-link>
          </li>
       
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Категории
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" style="color:red">Новые</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Популярные</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Вечная классика</a></li>
            </ul>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Поиск фильма.." aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Искать</button>
        </form>
        <button type="button" class="btn btn-primary position-relative" style="margin-left:20px">
          Profile
          <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style>
.navbar-brand{
  margin-left: 5px;
}
</style>