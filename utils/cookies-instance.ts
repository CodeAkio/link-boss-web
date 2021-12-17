import { NuxtCookies } from 'cookie-universal-nuxt'

/* eslint-disable import/no-mutable-exports */
let $cookies: NuxtCookies

export const initializeCookies = (cookiesInstance: NuxtCookies) => {
  $cookies = cookiesInstance
}

export { $cookies }
