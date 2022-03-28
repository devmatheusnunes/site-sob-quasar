<template>
  <q-layout class="main" view="lHh Lpr lFf">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prosto+One&display=swap" rel="stylesheet">

    <!--HEADER-->
    <div class="header col-100 bg-yellow">
      <div class="header-contents centralize row sides">
          <img class="q-ma-md" src="~/src/assets/header/logo_superotica_horizontal_02.svg" alt="logo-horizontal" @click="$router.push('/')" />

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
      </div>
    </div>

    <!--MENU-->
    <div class="menu-items centralize col-100 bg-white">
      <div class="menu-case row sides">
        <div class="menu-btn centralize">
          <q-btn class="btn" flat label="Sobre Nós" to="about" />
          <q-btn class="btn" flat label="Lentes" to="lenses"/>
          <q-btn class="btn" flat label="Óculos" to="glasses" />
          <q-btn class="btn" flat label="Nossas Lojas" to="stores" />
          <q-btn class="btn" flat label="Nossas Redes" to="network" />
        </div>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    return {
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
.header .header-icons a img {
  max-width: 2.2vw;
}

/*MENU*/
.menu-items {
  max-height: 6vh;
  border-bottom: 0.2vh #0c003f solid;
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
</style>
