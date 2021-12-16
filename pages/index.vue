<template>
  <c-box class="container">
    <c-flex w="100vw" h="100vh" bg="background.500" flex-dir="column">
      <Header />
    </c-flex>
  </c-box>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/organisms/Header.vue'

export default Vue.extend({
  name: 'App',
  components: { Header },
})
</script>
