<template>
  <div>
    <h3>Menu</h3>
    <!-- list of product cards that wraps -->
    <v-row>
      <v-col
        sm="6"
        md="4"
        v-for="(product, i) in $store.state.products"
        :key="product.name"
      >
        <VerticalProductCard :product="product" :i="i" :addToCart="addToCart"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VerticalProductCard from '@/components/VerticalProductCard'

export default {
  components: {
    VerticalProductCard
  },
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapMutations(['updateSnackbar', 'addItemToCart']),
    addToCart (index, quantity = 1) {
      this.addItemToCart({ itemId: index, quantity })
      this.updateSnackbar({ show: true })
    }
  }
}
</script>

<style scoped>

</style>
