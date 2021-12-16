<template>
  <c-box class="container">
    <c-flex w="100vw" h="100vh" bg="background.500" flex-dir="column">
      <Header />
      <ContentCentered>
        <c-flex w="100%" :max-width="600" direction="column">
          <c-flex
            class="header-container"
            w="100%"
            text-align="center"
            justify="center"
            align="center"
          >
            <c-heading class="home-title">
              Encurte seu link
              <c-text as="span" color="primary.500">Like a Boss</c-text>
            </c-heading>

            <img
              class="home-title-icon"
              src="@/assets/img/cool.png"
              alt="Emoticon com óculos de sol"
            />
          </c-flex>

          <c-flex
            as="form"
            class="home-short-link-form"
            :pt="8"
            @submit.prevent="handleSubmit"
          >
            <c-form-control w="100%">
              <c-input
                v-model="url"
                type="url"
                required
                :autofocus="!shortUrl"
                placeholder="Link para encurtar"
                bg="background.500"
                border-color="lightGrey.500"
                focus-border-color="primary.500"
                size="lg"
              />
            </c-form-control>

            <c-button
              type="submit"
              variant-color="primary"
              size="lg"
              :ml="4"
              right-icon="link"
            >
              Encurtar
            </c-button>
          </c-flex>

          <c-flex v-if="shortUrl" :pt="4">
            <c-input-group size="lg" w="100%">
              <c-input
                v-model="shortUrl"
                type="url"
                :autofocus="shortUrl"
                is-read-only
                bg="background.500"
                border-color="success.500"
                focus-border-color="success.500"
                size="lg"
              />

              <c-input-right-element>
                <c-icon-button
                  variant-color="success"
                  aria-label="Copiar link"
                  size="sm"
                  icon="clone"
                  @click="copyToClipboard"
                />
              </c-input-right-element>
            </c-input-group>
          </c-flex>
        </c-flex>
      </ContentCentered>
    </c-flex>
  </c-box>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/organisms/Header.vue'

export default Vue.extend({
  name: 'App',
  components: { Header },
  data() {
    return {
      url: '',
      shortUrl: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.shortUrl = ''

        const data = await this.$axios.$post('/short-links', {
          url: this.url,
        })

        this.shortUrl = `${this.$config.baseURL}/sl/${data.short_code}`

        this.showToast('Link criado com sucesso!', 'success')
      } catch (error) {
        this.showToast(
          'Ops! Algo deu errado.',
          'error',
          'Tente novamente mais tarde'
        )
      }
    },
    async copyToClipboard() {
      await navigator.clipboard.writeText(this.shortUrl)

      this.showToast('Link copiado!', 'success')
    },
    showToast(
      message: string,
      type: 'success' | 'error',
      description?: string
    ) {
      this.$toast({
        title: message,
        description,
        status: type,
        duration: 10000,
        position: 'bottom',
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.home-title-icon {
  height: 3rem;
  padding-left: 1rem;
}
</style>
