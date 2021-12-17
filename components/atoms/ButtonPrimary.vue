<template>
  <c-button
    class="button-primary"
    variant-color="primary"
    v-bind="[$props, $attrs]"
    v-on="$listeners"
  >
    <slot />
  </c-button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ButtonPrimary',
})
</script>
