<template>
  <v-container>
    <v-row>
      <v-col
        cols="10" offset="1"
        md="4" offset-md="2"
        xl="4" offset-xl="2"
        align-self="center">
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
