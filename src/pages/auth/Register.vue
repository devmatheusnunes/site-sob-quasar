<template>
  <q-page class="main flex flex-center">
    <form @submit.prevent="handleRegister">
      <!--CARD LOGIN-->
      <q-card class="card-login">
        <q-card-sections class="card-logo centralize">
          <img src="~/src/assets/header/logo_superotica_horizontal_02.svg" alt="logo-horizontal">
        </q-card-sections>
        <q-card-sections class="card-input">
          <div class="title centralize">CADASTRO</div>
          <q-input
            class="input q-mt-md"
            outlined
            rounded
            dense
            v-model="form.name"
            label="Nome"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Por favor, insira seu nome']"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            class="input"
            outlined
            rounded
            dense
            v-model="form.email"
            label="E-mail"
            type="email"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Por favor, insira seu email']"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>

          <q-input
            class="input"
            outlined
            rounded
            dense
            v-model="form.password"
            label="Senha"
            type="password"
            lazy-rules
            :rules="[val => (val && val.length >= 6) || 'Por favor, insira uma senha válida']"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
        </q-card-sections>
        <q-card-sections class="card-btn centralize">
          <q-btn
            class="btn"
            color="negative"
            text-color="white"
            label="voltar"
            rounded
            @click="$router.replace('login')"
          />
          <q-btn
            class="btn"
            color="positive"
            text-color="white"
            label="Registrar"
            rounded
            type="submit"
          />
        </q-card-sections>
      </q-card>

    </form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageRegister',

  setup () {
    const router = useRouter()
    const { register } = useAuthUser()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        alert(error)
      }
    }

    return {
      form,
      handleRegister
    }
  }
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
.card-login {
  min-width: 30vw;
  max-width: 50vw;
  padding: 3vw;
  border-radius: 5vh;
}
.card-login .card-logo img {
  margin-top: -2vh;
  max-width: 20vw;
}
.card-login .card-input {
  padding: 2vh;
}
.card-login .card-input .title {
  font-size: 3vh;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
}
.card-login .card-input .input {
  margin-left: -1vw;
  margin-right: -1vw;
}
.card-login .card-btn {
  justify-content: space-between;
}
.card-login .card-btn .btn {
  min-width: 10vw;
}
.card-login .reset-btn {
  margin-top: 3vh;
  margin-bottom: -3vh;
}
</style>
