<template>
  <div>
    <v-container v-if="!cart || cart.length===0">
      <h1> Card is Empty </h1>
    </v-container>
    <v-row v-for="cartItem in cart" :key="cartItem.itemId">
      <HorizontalProductList
        :product="getProductById(cartItem.itemId)"
        :updateCart="updateCart"
        :quantity="cartItem.quantity"
      />
    </v-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import HorizontalProductList from '@/components/HorizontalProductList.vue'

export default {
  components: {
    HorizontalProductList
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(['products', 'cart'])
  },
  methods: {
    ...mapMutations(['updateItemInCart']),
    updateCart (itemId, quantity = 1) {
      this.updateItemInCart({ itemId, quantity })
    },
    getProductById (itemId) {
      return this.$store.state.products.find(product => product.id === itemId)
    }
  }
}
</script>
