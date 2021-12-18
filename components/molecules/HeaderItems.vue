<template>
  <c-stack class="header-items" is-inline :spacing="4">
    <c-box>
      <HeaderItem text="Início" icon="home" as="nuxt-link" to="/" />
    </c-box>

    <c-box>
      <HeaderItem text="Top" icon="fire" as="nuxt-link" to="/top" />
    </c-box>

    <c-box v-if="!isAuth">
      <HeaderItem
        text="Login"
        icon="sign-in-alt"
        as="nuxt-link"
        to="/auth/sign_in"
      />
    </c-box>

    <c-box v-if="isAuth">
      <HeaderItem text="Sair" icon="sign-out-alt" @click="signOut" />
    </c-box>

    <c-box v-if="!isAuth">
      <ButtonPrimary as="nuxt-link" to="/auth/sign_up">
        Criar Conta
      </ButtonPrimary>
    </c-box>
  </c-stack>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  name: 'HeaderItems',
  computed: {
    isAuth() {
      return !!auth.$token
    },
  },
  methods: {
    async signOut() {
      await auth.destroy()
    },
  },
})
</script>
