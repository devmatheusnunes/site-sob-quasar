<template>
  <q-page class="main flex flex-center">
    <!--CARD LOGIN-->
    <q-card class="card-login">
      <q-card-sections class="card-logo centralize">
        <img src="~/src/assets/header/logo_superotica_horizontal_02.svg" alt="logo-horizontal">
      </q-card-sections>
      <q-card-sections class="card-imput">
        <div class="title centralize">LOGIN</div>
        <q-input class="imput" outlined v-model="text" label="Outlined" />
        <q-input class="imput" outlined v-model="text" label="Outlined" />
      </q-card-sections>
      <q-card-sections class="card-btn centralize">
        <q-btn color="red" text-color="white" label="voltar" to="/" />
        <q-btn color="green" text-color="white" label="Entrar" />
      </q-card-sections>
      <q-card-sections>
        <div class="reset-btn centralize" color="white" text-color="black">Esqueci a Senha</div>
      </q-card-sections>
    </q-card>
  </q-page>
</template>

<script>
export default {

}
</script>

<style>
/*GERAL*/
.main {
  font-family: 'Prosto One', cursive;
  background-color: gray;
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

/*CARD LOGIN*/
.card-login {
  max-width: 40vw;
  padding: 3vw;
  border-radius: 5vh;
}
.card-login .card-logo img {
  margin-top: -2vh;
  max-width: 20vw;
}
.card-login .card-imput {
  padding: 2vh;
}
.card-login .card-imput .title {
  font-size: 3vh;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.card-login .card-imput .imput {
  padding-top: 2vh;
  margin-left: -1vw;
  margin-right: -1vw;
}
.card-login .card-btn {
  justify-content: space-between;
  margin-left: 2vw;
  margin-right: 2vw;
}
.card-login .reset-btn {
  margin-top: 3vh;
  margin-bottom: -3vh;
}
</style>
