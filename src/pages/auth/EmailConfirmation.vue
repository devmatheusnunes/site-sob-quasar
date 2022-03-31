<template>
  <q-page class="main flex flex-center">
    <q-card class="card-info">
      <p class="text-body1 text-center">
        Obrigado por se registrar!
      </p>
      <p class="text-body1 text-center">
        Por favor, para concluir seu registro abra e confirme seu email: <strong>{{ $route.query.email }}</strong>
      </p>
      <div class="row justify-center">
        <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
          <q-btn
            class="full-width"
            label="voltar"
            color="negative"
            rounded
            @click="$router.replace('login')"
          />
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation'
})
</script>

<style scoped>
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
.card-info {
  min-width: 30vw;
  max-width: 40vw;
  padding: 3vw;
  border-radius: 5vh;
}
</style>
