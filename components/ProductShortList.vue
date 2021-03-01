<template>
  <div>
    <v-row v-for="cartItem in cart" :key="cartItem.itemId">
      <HorizontalProductList
        :product="getProductById(cartItem.itemId)"
        :updateCart="removeFromCart"
        btnAction="remove"
        :quantity = "cartItem.quantity"
      />
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    removeFromCart () {
    },
    getProductById (itemId) {
      return this.$store.state.products.find(product => product.id === itemId)
    }
  }
}
</script>
