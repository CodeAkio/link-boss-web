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
              v-model="username"
              required
              autofocus
              placeholder="Usuário"
            />

            <InputPrimary
              v-model="email"
              type="email"
              required
              autofocus
              placeholder="E-mail"
              :mt="6"
            />

            <InputPrimary
              v-model="password"
              type="password"
              minlength="6"
              maxlength="180"
              required
              placeholder="Senha"
              :mt="6"
            />

            <InputPrimary
              v-model="password_confirmation"
              type="password"
              minlength="6"
              maxlength="180"
              required
              placeholder="Confirme a senha"
              :mt="6"
            />
          </c-form-control>

          <ButtonPrimary :mt="6" type="submit">Cadastrar</ButtonPrimary>
        </c-box>
      </Card>
    </c-flex>
  </ContentCentered>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  name: 'SignUpPage',
  middleware: 'guest',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  },
  methods: {
    async handleSubmit() {
      if (this.password !== this.password_confirmation) {
        return this.showToast('As senhas estão diferentes', 'error')
      }

      try {
        await this.$axios.$post('/users', {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })

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
