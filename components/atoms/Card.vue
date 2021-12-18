<template>
  <c-flex
    class="card"
    w="100%"
    :p="6"
    :border-radius="16"
    bg="darkGrey.500"
    flex-dir="column"
    v-bind="[$props, $attrs]"
    v-on="$listeners"
  >
    <slot />
  </c-flex>
</template>
