export const state = () => ({
  snackbar: {
    show: false,
    variant: 'success',
    message: 'Success! Item added to the cart.'
  },
  cart: []
})

export const mutations = {
  updateItemInCart (state, payload) {
    const { itemId, quantity } = payload
    const idx = state.cart.findIndex((cartItem) => {
      return cartItem.itemId === itemId
    })
    if (idx === -1) {
      if (quantity >= 1) {
        state.cart.push({
          itemId,
          quantity
        })
      }
    } else {
      state.cart[idx].quantity += quantity
      if (state.cart[idx].quantity <= 0) {
        state.cart.splice(idx, 1)
      }
    }
  },
  updateSnackbar (state, settings) {
    state.snackbar = {
      ...state.snackbar,
      ...settings
    }
  }
}
