<template>
  <v-card
    outlined
    min-width="100%"
    class="mb-5 pa-4"
  >
    <div class="d-flex">
      <div>
        <v-img
          :src="product.image"
          width="120px"
          height="120px"
        />
      </div>

      <!-- <v-spacer></v-spacer> -->

      <div class="d-flex flex-column justify-center">
        <v-card-title class="pt-0">
          {{ product.name }}
        </v-card-title>

        <v-card-subtitle>
          ${{ product.price }}
        </v-card-subtitle>
        <v-card-text>
          Quantity: {{ quantity }}
        </v-card-text>
        <div class="text-center">
          <v-btn
            color="error"
            class="mx-2"
            outlined
            small
            @click="updateCart(product.id, -1)"
          >
            <v-icon small>mdi-minus</v-icon>
          </v-btn>
          <v-btn
            color="success"
            class="mx-2"
            outlined
            small
            @click="updateCart(product.id, 1)"
          >
            <v-icon small>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
    updateCart: Function,
    quantity: Number
  }
}
</script>
