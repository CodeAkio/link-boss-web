<template>
  <c-box class="container">
    <c-flex w="100vw" h="100vh" bg="background.500" flex-dir="column">
      <Header />
      <ContentCentered>
        <c-flex w="100%" :max-width="600">
          <Card>
            <c-box
              as="form"
              class="forgot-password-form"
              @submit.prevent="handleSubmit"
            >
              <c-form-control w="100%">
                <c-input
                  v-model="email"
                  type="email"
                  required
                  autofocus
                  placeholder="E-mail de recuperação"
                  bg="background.500"
                  border-color="lightGrey.500"
                  focus-border-color="primary.500"
                />
              </c-form-control>

              <c-button :mt="6" type="submit" variant-color="primary">
                Recuperar
              </c-button>
            </c-box>
          </Card>
        </c-flex>
      </ContentCentered>
    </c-flex>
  </c-box>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/organisms/Header.vue'

export default Vue.extend({
  name: 'ForgotPage',
  components: { Header },
  data() {
    return {
      email: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        await this.$axios.$post('/passwords/forgot', {
          email: this.email,
        })

        this.showToast(
          'E-mail enviado sucesso!',
          'success',
          'Verifique sua caixa de e-mail para continuar a recuperação da senha.'
        )
      } catch (error) {
        this.showToast(
          'Ops! Algo deu errado.',
          'error',
          'Verifique os dados digitados'
        )
      }
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
