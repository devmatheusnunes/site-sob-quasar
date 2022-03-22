<template>
  <q-page class="main">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prosto+One&display=swap" rel="stylesheet">

    <!--HEADER-->
    <div class="header col-100 bg-yellow">
      <div class="header-contents centralize row sides">
          <img class="q-ma-md" src="~/src/assets/header/logo_superotica_horizontal_02.svg" alt="logo" />

          <div class="header-icons">
            <a href="https://www.instagram.com/superoticabrasil/">
              <img class="q-mx-sm" src="~/src/assets/header/instagram-bold.png" alt="instagram"  />
            </a>
            <a href="https://www.facebook.com/SuperOticaBrasil">
              <img class="q-mx-sm" src="~/src/assets/header/facebook.png" alt="facebook"  />
            </a>
            <a href="">
              <img class="q-mx-sm" src="~/src/assets/header/whatsapp.png" alt="whatsapp" />
            </a>
          </div>
      </div>
    </div>

    <!--MENU-->
    <div class="menu-items centralize col-100 bg-white">
      <div class="menu-case row sides">
        <div class="menu-btn centralize">
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
        <q-carousel-slide :name="5" img-src="~/src/assets/carousel/man-glasses.jpg" />
      </q-carousel>
    </div>

    <!--LENSES-->
    <q-card class="card-lens bg-yellow col-100">
      <q-card-sections class="img-lens centralize sides">
        <img src="~/src/assets/lenses/essilor-logo.svg" alt="essilor">
        <img src="~/src/assets/lenses/hoya-logo.svg" alt="hoya">
        <img src="~/src/assets/lenses/kodaklens-logo.svg" alt="kodak">
        <img src="~/src/assets/lenses/varilux-logo.svg" alt="varilux">
        <img src="~/src/assets/lenses/zeiss-logo.svg" alt="zeiss">
      </q-card-sections>
      <q-card-sections class="text centralize sides">
        <p>Trabalhamos com as melhores marcas nacionais e importadas</p>
      </q-card-sections>
    </q-card>

    <!--CARD-ABOUT-->
    <q-card class="card-about sides" flat bordered>
      <q-card-section class="section-you sides" horizontal>
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

      <q-card-section class="section-space sides" horizontal>
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

    <!--CARD-GLASSES-->
    <div class="col-100">
      <div class="card-glasses">
        <div class="title sides centralize">
          Encontre seu perfil
        </div>
        <div class="sides">
          <div class="card-glass-sections centralize">
            <q-img src="~/src/assets/carousel/man-glasses.jpg" alt="man">
              <div class="title-glass-img centralize">Masculino</div>
            </q-img>
            <q-img src="~/src/assets/carousel/woman-glasses.jpg" alt="woman">
              <div class="title-glass-img centralize">Feminino</div>
            </q-img>
            <q-img src="~/src/assets/carousel/baby-glasses.jpg" alt="kid">
              <div class="title-glass-img centralize">Infantil</div>
            </q-img>
          </div>
        </div>
      </div>
    </div>

    <!--Mais Vendidos
    <div>
      <q-card class="my-card-glasses">
        <q-card-sections class="title">
          Mais Vendidos
        </q-card-sections>
        <q-card-sections class="my-card-image">
          <q-card-actions>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Masculina
              </div>
            </q-img>
          </q-card-actions>
          <q-card-actions>
            <q-img src="~/src/assets/carousel/woman-glasses.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Feminina
              </div>
            </q-img>
          </q-card-actions>
          <q-card-actions>
            <q-img src="~/src/assets/carousel/baby-glasses.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Infantil
              </div>
            </q-img>
          </q-card-actions>
        </q-card-sections>
      </q-card>
    </div>-->
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
/*GERAL*/
.main {
  font-family: 'Prosto One', cursive;
  background-color: #eeeeee;
}
.sides {
  max-width: 980px;
  margin: 0 auto;
}
.centralize {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  color: #180081;
  font-size: 5vh;
  justify-content: space-around;
}
.text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/*HEADER*/
.header {
  max-height: 12vh;
}
.header .header-contents {
  justify-content: space-between;
}
.header .header-contents img {
  max-width: 14vw;
}
.header .header-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header .header-icons a img {
  max-width: 2.2vw;
}

/*MENU*/
.menu-items {
  max-height: 6vh;
}
.menu-items .menu-case {
  justify-content: space-between;
}
.menu-items .menu-case .menu-btn .btn {
  color: #b1b1b1;
}
.menu-items .row .menu-btn .btn:hover {
  color: #180081;
}

/*CAROUSEL*/
.carousel {
  min-height: 82.5vh;
  background-size: cover;
}

/*LENSES*/
.card-lens .img-lens {
  justify-content: space-around;
  height: 15vh;
}
.card-lens .img-lens img {
  max-height: 8vh;
  max-width: 10vw;
}
.card-lens .text {
  justify-content: space-around;
  font-size: 3vh;
  font-weight: bold;
  text-transform: uppercase;
  color: #0c003f;
}

/*CARD-ABOUT*/
.card-about {
  margin-top: 10vh;
}
.card-about .section-you {
  margin: 5vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
}
.card-about .section-you .title {
  text-align: start;
}
.card-about .section-you .text {
  text-align: justify;
}
.card-about .section-space {
  margin: 5vh;
  padding-top: 5vh;
  padding-bottom: 10vh;
}
.card-about .section-space .title {
  text-align: end;
}
.card-about .section-space .text {
  text-align: justify;
}

/*CARD-GLASSES*/
.card-glasses .card-glass-sections q-img {
  max-width: 30vw;
}
.title-glass-img {
  width: 100%;
  height: 100%;
}

.title-glass-img:hover {
  background: none;
  color: #0c003f;
}

</style>
