<template>
  <v-container>
    <v-row>
      <v-col sm="4" offset-sm="2" xl="4" offset-xl="2">
        <ProductShortList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductShortList from '@/components/ProductShortList.vue'

export default {
  components: {
    ProductShortList
  }
}
</script>
