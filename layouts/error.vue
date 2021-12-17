<template>
  <c-box class="container">
    <c-flex w="100vw" h="100vh" bg="background.500" flex-dir="column">
      <Header />
      <ContentCentered>
        <img
          class="not-found-image"
          src="@/assets/img/404.svg"
          alt="Não encontrado"
        />
      </ContentCentered>
    </c-flex>
  </c-box>
</template>

<style lang="scss" scoped>
.not-found-image {
  max-width: 50%;
}
</style>
