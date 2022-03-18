<template>
  <q-page class="main">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prosto+One&display=swap" rel="stylesheet">

    <!--MENU SUPERIOR-->
    <div class="col-100 bg-yellow" style="heigth: 6vh">
      <div class="row sides" style="justify-content: space-between;">
          <img class="q-ma-md" src="~/src/assets/header/logo_superotica_horizontal_02.svg" alt="logo" style="max-width: 14vw;" />

          <div style="display: flex; align-items: center; justify-content: center;">
            <a href="https://www.instagram.com/superoticabrasil/">
              <img class="q-mx-sm" src="~/src/assets/header/instagram-bold.png" alt="instagram" style="max-width: 2.2vw;" />
            </a>
            <a href="https://www.facebook.com/SuperOticaBrasil">
              <img class="q-mx-sm" src="~/src/assets/header/facebook.png" alt="facebook" style="max-width: 2.2vw;" />
            </a>
            <a href="">
              <img class="q-mx-sm" src="~/src/assets/header/whatsapp.png" alt="whatsapp" style="max-width: 2.2vw;" />
            </a>
          </div>
      </div>
    </div>

    <!--MENU INFERIOR-->
    <div class="menu-items col-100 bg-white" style="heigth: 4vh; display: flex; align-items: center; justify-content: center;">
      <div class="row sides" style="justify-content: space-between;">
        <div class="menu-btn" style="display: flex; align-items: center; justify-content: center;">
          <q-btn class="btn" flat label="Sobre Nós" />
          <q-btn class="btn" flat label="Lentes" />
          <q-btn class="btn" flat label="Óculos" />
          <q-btn class="btn" flat label="Mais Vendidos" />
          <q-btn class="btn" flat label="Contato" />
        </div>
      </div>
    </div>

    <!--CAROUSEL-->
    <div>
      <q-carousel class="carousel" animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true">
        <q-carousel-slide :name="1" img-src="~/src/assets/carousel/woman-glasses.jpg" />
        <q-carousel-slide :name="2" img-src="~/src/assets/carousel/close-eye.jpg" />
        <q-carousel-slide :name="3" img-src="~/src/assets/carousel/doctor-glasses.jpg" />
        <q-carousel-slide :name="4" img-src="~/src/assets/carousel/baby-glasses.jpg" />
      </q-carousel>
    </div>

    <!--LENSES-->
    <q-card class="bg-yellow col-100">
      <q-card-sections class="img-lens sides">
        <img src="~/src/assets/lenses/essilor-logo.svg" alt="essilor">
        <img src="~/src/assets/lenses/hoya-logo.svg" alt="hoya">
        <img src="~/src/assets/lenses/kodaklens-logo.svg" alt="kodak">
        <img src="~/src/assets/lenses/varilux-logo.svg" alt="varilux">
        <img src="~/src/assets/lenses/zeiss-logo.svg" alt="zeiss">
      </q-card-sections>
      <q-card-sections class="text-lens sides">
        <p>Trabalhamos com as melhores marcas nacionais e importadas</p>
      </q-card-sections>
    </q-card>

    <!--O foco é você-->
    <div style="max-width: 100%;">
      <q-card class="my-card" flat bordered>
        <q-card-section class="sides" horizontal>
          <q-card-section>
            <q-card-section class="title">
              O foco é você
            </q-card-section>

            <q-card-section class="text">
              {{ lorem }}
            </q-card-section>
          </q-card-section>

          <q-img
            class="image col-5"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
      </q-card>
    </div>

    <!--Nosso Espaço-->
    <div style="max-width: 100%">
      <q-card class="my-card" flat bordered>
        <q-card-section class="sides" horizontal>
          <q-img
            class="image col-5"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-card-section>
            <q-card-section class="title">
              Nosso Espaço
            </q-card-section>

            <q-card-section class="text">
              {{ lorem }}
            </q-card-section>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
})
</script>

<style scoped>
.main {
  font-family: 'Prosto One', cursive;
}
.sides {
  max-width: 980px;
  margin: 0 auto;
}
.menu-items .row .menu-btn .btn {
  color: #b1b1b1;
}
.menu-items .row .menu-btn .btn:hover {
  color: #180081;
}

.carousel {
  min-height: 82.5vh;
  background-size: cover;
}

.my-card .title {
  color: #180081;
  font-size: 5vh;
  justify-content: space-around;
}
.img-lens {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 15vh;
}
.img-lens img {
  max-height: 8vh;
  max-width: 10vw;
}
.text-lens {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 3vh;
  color: #0c003f;
}
</style>
