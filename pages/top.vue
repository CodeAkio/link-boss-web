<template>
  <Content class="top">
    <c-flex w="100%" direction="column">
      <Card v-for="(item, index) in shortLinks" :key="item.id" mb="6">
        <c-grid
          justify="center"
          w="100%"
          template-columns="repeat(20, 1fr)"
          gap="2"
        >
          <c-grid-item col-span="1"> # {{ index + 1 }} </c-grid-item>
          <c-grid-item col-span="1" self="center">
            <c-icon name="eye" /> {{ item.views }}
          </c-grid-item>
          <c-grid-item col-span="17">
            <c-link :href="item.original_url" is-external>
              {{ item.title }}
            </c-link>
          </c-grid-item>

          <c-grid-item col-span="1">
            <c-icon-button
              as="a"
              aria-label="Copiar link"
              icon="clone"
              variant-color="primary"
              :href="`${$config.baseURL}/sl/${item.short_code}`"
            />
          </c-grid-item>
        </c-grid>
      </Card>
    </c-flex>
  </Content>
</template>

<script lang="ts">
/* eslint-disable camelcase */
import Vue from 'vue'

interface ShortLink {
  id: string
  user_id: string
  original_url: string
  short_code: string
  title: string
  views: number
}

export default Vue.extend({
  name: 'Top',
  async asyncData({ $axios, error }) {
    try {
      const shortLinks = await $axios.$get('/short-links/top')

      return { shortLinks }
    } catch {
      error({ statusCode: 404, message: 'Não foi possível carregar o ranking' })
    }
  },
  data() {
    return {
      shortLinks: [] as ShortLink[],
    }
  },
})
</script>
