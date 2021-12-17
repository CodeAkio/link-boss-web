import { Plugin } from '@nuxt/types'
import { initializeAxios } from '@/utils/nuxt-instance'
import { initializeCookies } from '@/utils/cookies-instance'

const accessor: Plugin = ({ $axios, $cookies }) => {
  initializeAxios($axios)
  initializeCookies($cookies)
}

export default accessor
