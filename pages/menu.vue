<template>
  <v-container>
    <v-row>
      <v-col sm="9" lg="7">
        <ProductDisplayList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductDisplayList from '@/components/ProductDisplayList'
export default {
  components: {
    ProductDisplayList
  }
}
</script>

<style scoped>

</style>
