// Utilities
import { ref } from "vue";
import { defineStore } from "pinia";
const cart = ref(false);

export const useCartStore = defineStore("cart", {
  state: () => ({
    toggleCart() {
      cart.value = !cart.value;
      console.log("toggleCart: ", cart.value);
    },
    getCartValue() {
      console.log("getCartValue: ", cart.value);
      return cart.value;
    },
  }),
});
