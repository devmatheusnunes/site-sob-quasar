<template>
  <q-page>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prosto+One&display=swap" rel="stylesheet">

    <!--MENU SUPERIOR-->
    <div class="col-100 bg-yellow" style="heigth: 6vh">
      <div class="row" style="max-width: 980px; margin: 0 auto; justify-content: space-between;">
          <img class="q-ma-md" src="~/src/assets/header/logo_superotica_centralizada_02.svg" alt="logo" style="max-width: 10vw;" />

          <div style="display: flex; align-items: center; justify-content: center;">
            <a href="https://www.instagram.com/superoticabrasil/">
              <img class="q-mx-sm" src="~/src/assets/header/instagram.svg" alt="instagram" style="max-width: 2vw;" />
            </a>
            <a href="https://www.facebook.com/SuperOticaBrasil">
              <img class="q-mx-sm" src="~/src/assets/header/facebook.svg" alt="facebook" style="max-width: 2vw;" />
            </a>
            <a href="">
              <img class="q-mx-sm" src="~/src/assets/header/whatsapp.svg" alt="whatsapp" style="max-width: 2vw;" />
            </a>
          </div>
      </div>
    </div>

    <!--MENU INFERIOR-->
    <div class="menu-items col-100 bg-white" style="heigth: 4vh; display: flex; align-items: center; justify-content: center;">
      <div class="row" style="max-width: 980px; margin: 0 auto; justify-content: space-between;">
        <div class="menu-btn" style="display: flex; align-items: center; justify-content: center;">
          <q-btn class="btn" flat label="Sobre Nós" />
          <q-btn class="btn" flat label="Nossa História" />
          <q-btn class="btn" flat label="Óculos" />
          <q-btn class="btn" flat label="Mais Vendidos" />
          <q-btn class="btn" flat label="Contato" />
        </div>
      </div>
    </div>

    <!--CAROUSEL-->
    <div>
      <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true">
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>
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
      autoplay: ref(true)
    }
  }
})
</script>

<style scoped>
.menu-items .row .menu-btn .btn {
  font-family: 'Prosto One', cursive;
  color: #b1b1b1;
}
.menu-items .row .menu-btn .btn:hover {
  color: #180081;
}
</style>
