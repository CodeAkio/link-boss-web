<template>
  <c-button
    class="header-item"
    variant-color="primary"
    variant="ghost"
    color="lightGrey.500"
    :_active="{ color: 'white' }"
    :left-icon="icon"
    v-bind="[$props, $attrs]"
    v-on="$listeners"
  >
    {{ text }}
  </c-button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderItem',
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  color: white;
}
</style>
