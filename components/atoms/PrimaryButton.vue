<template>
  <c-button variant-color="primary">
    <slot />
  </c-button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PrimaryButton',
})
</script>
