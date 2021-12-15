<template>
  <c-box w="100%" class="logo">
    <img src="@/assets/img/logo.svg" alt="Link Boss" />
  </c-box>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Logo',
})
</script>

<style lang="scss" scoped>
.logo {
  img {
    width: 100%;
  }
}
</style>
