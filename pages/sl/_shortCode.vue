<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ params, error, $axios, redirect }) {
    try {
      const data = await $axios.$get(`/short-links/${params.shortCode}`)

      redirect(data.original_url)
      return {}
    } catch (err) {
      error({ statusCode: 404, message: 'URL não encontrada' })
    }
  },
})
</script>
