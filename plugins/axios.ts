import { Plugin } from '@nuxt/types'

const axiosPlugin: Plugin = ({ app, store, redirect }) => {
  app.$axios.onRequest((config) => {
    const token = app.$cookies.get('token')

    if (token) {
      config.headers.Authorization = `bearer ${token}`
    }
  })

  app.$axios.onError((error) => {
    if (error.request?.status === 401) {
      app.$cookies.remove('token')

      store.dispatch('auth/update', { token: null })

      return redirect('/auth/sign_in')
    }
  })
}

export default axiosPlugin
