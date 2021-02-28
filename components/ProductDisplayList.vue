<template>
  <div>
    <h3>Menu</h3>
    <!-- list of product cards that wraps -->
    <v-row>
      <v-col
        sm="6"
        md="4"
        v-for="product in $store.state.products.all"
        :key="product.name"
      >
        <VerticalProductCard :product="product"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VerticalProductCard from '@/components/VerticalProductCard'

export default {
  components: {
    VerticalProductCard
  }
}
</script>

<style scoped>

</style>
