import { Middleware } from '@nuxt/types'

const auth: Middleware = ({ store, redirect }) => {
  if (!store.state.auth.token) {
    return redirect('/auth/sign_in')
  }
}

export default auth
