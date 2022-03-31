<template>
  <q-layout class="main" view="hHh lpR fFf">

    <q-header class="bg-yellow text-white header centralize">
      <q-toolbar>
        <q-btn color="black" dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <img src="~/src/assets/header/logo_superotica_horizontal_02.svg" alt="logo-horizontal" :to="{ name: 'home' }" />
        </q-toolbar-title>
      </q-toolbar>
      <q-btn-dropdown flat text-color="black" icon="person">
        <div class="column items-center bg-white">

          <div class="text name centralize q-pa-sm full-width">{{ user.user_metadata.name }}</div>

          <q-btn
            class="full-width"
            text-color="red"
            label="Sair"
            push
            flat
            rounded
            dense
            v-close-popup
            @click="handleLogout"
          />
        </div>
      </q-btn-dropdown>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'AdminLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    const $q = useQuasar()
    const router = useRouter()
    const { user, logout } = useAuthUser()

    const handleLogout = async () => {
      $q.dialog({
        title: 'Você está saindo',
        message: 'Você realmente deseja sair?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        await logout()
        router.replace({ name: 'login' })
      })
    }

    return {
      user,
      leftDrawerOpen,
      handleLogout,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
/*GERAL*/
.main {
  font-family: 'Prosto One', cursive;
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

.header {
  justify-content: space-between;
}
.header img {
  max-width: 12vw;
}
.name {
  font-size: 2.5vh;
  font-weight: bold;
  color: #ffffff;
  background-color: #180081;
}
</style>
