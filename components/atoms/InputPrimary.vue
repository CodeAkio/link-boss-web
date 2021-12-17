<template>
  <c-input
    class="input-primary"
    bg="background.500"
    border-color="lightGrey.500"
    focus-border-color="primary.500"
    v-bind="[$props, $attrs]"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InputPrimary',
})
</script>
