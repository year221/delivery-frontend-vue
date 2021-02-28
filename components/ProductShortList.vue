<template>
  <div>
    <v-row v-for="(product, i) in products" :key="i">
      <HorizontalProductList
        :product="product"
        :i="i"
        :updateCart="removeFromCart"
        btnAction="remove"
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
    ...mapState(['products'])
  },
  methods: {
    removeFromCart () {
    }
  }
}
</script>
