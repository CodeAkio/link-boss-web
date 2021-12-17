<template>
  <c-stack class="header-items" is-inline :spacing="4">
    <c-box><HeaderItem text="Início" icon="home" to="/" /></c-box>
    <c-box><HeaderItem text="Top" icon="fire" to="/" /></c-box>
    <c-box
      ><HeaderItem text="Login" icon="sign-in-alt" to="/auth/sign_in"
    /></c-box>

    <c-box><ButtonPrimary> Criar Conta </ButtonPrimary></c-box>
  </c-stack>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderItems',
})
</script>
