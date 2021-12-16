<template>
  <c-flex
    class="header"
    as="header"
    w="100%"
    :h="20"
    :px="6"
    mx="auto"
    :max-width="1480"
    align="center"
  >
    <NuxtLink to="/">
      <Logo />
    </NuxtLink>

    <c-flex as="nav" align="center" ml="auto">
      <HeaderItems />
    </c-flex>
  </c-flex>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
})
</script>
