<template>
  <ContentCentered>
    <c-flex w="100%" :max-width="600">
      <Card>
        <c-box
          as="form"
          class="forgot-password-form"
          @submit.prevent="handleSubmit"
        >
          <c-form-control w="100%">
            <InputPrimary
              v-model="email"
              type="email"
              required
              autofocus
              placeholder="E-mail"
            />

            <InputPrimary
              v-model="password"
              type="password"
              required
              placeholder="Senha"
              :mt="6"
            />
          </c-form-control>

          <ButtonPrimary :mt="6" type="submit">Entrar</ButtonPrimary>
        </c-box>
      </Card>
    </c-flex>
  </ContentCentered>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  name: 'SignInPage',
  middleware: 'guest',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        await auth.create({
          email: this.email,
          password: this.password,
        })

        this.$router.push('/')
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
