<template>
  <q-page class="main">
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

        <q-parallax
          class="image col-5"
          src="~/src/assets/about/superotica-pessoas.jpeg"
        />
      </q-card-section>

      <q-card-section class="section-space sides" horizontal>
        <q-parallax
          class="image col-5"
          src="~/src/assets/about/superotica-asa-norte.jpg"
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
    <div class="card-glasses col-100">
      <div class="card-glass">
        <div class="title sides centralize">
          Encontre seu perfil
        </div>
        <div class="sides">
          <div class="card-glass-sections centralize">
            <q-img class="img" src="~/src/assets/carousel/man-glasses.jpg" alt="man">
              <div class="title-glass-img ">
                <div class="title-1 centralize">Armações</div>
                <div class="title-2 centralize">Masculinas</div>
              </div>
            </q-img>
            <q-img src="~/src/assets/carousel/woman-glasses.jpg" alt="woman">
              <div class="title-glass-img">
                <div class="title-1 centralize">Armações</div>
                <div class="title-2 centralize">Feminino</div>
              </div>
            </q-img>
            <q-img src="~/src/assets/carousel/baby-glasses.jpg" alt="kid">
              <div class="title-glass-img">
                <div class="title-1 centralize">Armações</div>
                <div class="title-2 centralize">Infantil</div>
              </div>
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

    <!--CONTACT
    <q-card class="card-contact">
      <q-card-sections class="sides centralize title">
        <div>Encontre nossas lojas</div>
      </q-card-sections>
      <q-card-sections class="sides centralize">
        <q-card-sections class="sections-contact sides">
          <div class="contact">loja 1</div>
          <div class="contact">loja 2</div>
          <div class="contact">loja 3</div>
          <div class="contact">loja 4</div>
          <div class="contact">loja 5</div>
        </q-card-sections>
        <q-card-sections class="sections-contact sides">
          <div class="contact">loja 6</div>
          <div class="contact">loja 7</div>
          <div class="contact">loja 8</div>
          <div class="contact">loja 9</div>
          <div class="contact">loja 10</div>
        </q-card-sections>
      </q-card-sections>
    </q-card>-->

    <!--BASEBOARD-->
    <q-card class="card-baseboard">
      <q-card-sections class="sides">
        <div class="title centralize">NOS SIGA NAS REDES SOCIAIS</div>

        <div class="header-icons centralize">
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
        <div class="centralize">
          <img class="q-ma-md" src="~/src/assets/header/logo_superotica_centralizada_02.svg" alt="logo-central"/>
        </div>
        <div class="text centralize">Copyright 2022© Todos os direitos reservados | SUPERÓTICA BRASIL</div>
        <div class="text centralize">Desenvolvido por: Matheus Nunes (dev.matheusnunes@gmail.com)</div>
      </q-card-sections>
    </q-card>
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
  background-color: #fcffe4;
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
.card-about .section-space {
  margin: 5vh;
  padding-top: 5vh;
  padding-bottom: 10vh;
}
.card-about .section-you .title {
  text-align: start;
}
.card-about .section-space .title {
  text-align: end;
}
.card-about .section-you .text, .card-about .section-space .text {
  text-align: justify;
  font-size: 1.2vw;
}
.card-about .image {
  max-height: 50vh;
  border-radius: 5vw;
}

/*CARD-GLASSES*/
.card-glasses {
  margin-top: 15vh;
}
.card-glasses .card-glass .card-glass-sections {
  margin-top: 5vh;
}
.card-glasses .card-glass .card-glass-sections q-img {
  max-width: 30vw;
}
.title-glass-img {
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  padding: 30%;
}
.title-glass-img:hover {
  transition-duration: 0.5s;
  background: none;
}
.title-glass-img .title-1 {
  font-size: 2.5vh;
}
.title-glass-img .title-2 {
  font-size: 4vh;
}
/*CONTACT*/
.card-contact {
  margin-top: 10vh;
}

/*BASEBOARD*/
.card-baseboard {
  margin-top: 10vh;
  background-color: yellow;
}
.card-baseboard .title {
  padding-top: 5vh;
  font-size: 1.5vw;
}
.card-baseboard .header-icons {
  padding-top: 2vh;
}
.card-baseboard img {
  max-width: 15vw;
}

.card-baseboard .text {
  font-weight: bold;
  color: #0c003f;
}
</style>
