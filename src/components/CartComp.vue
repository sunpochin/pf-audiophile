<template>
  <div>
    <section class="container" v-show="cartStatus()">
      CART COMP
      <div class="cart">SSSSS</div>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();

const cartStatus = () => {
  console.log("stats");
  return cartStore.getCartValue();
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 100;
  inset: 3.5rem 0 0 0;
}

.cart {
  width: auto;
  max-width: 32rem;
  min-height: 30rem;
  border-radius: 10px;
  background-color: var(--clr-white);
  padding: 2rem;
  position: relative;
  top: 3rem;
  margin-left: auto;

  transform: translateY(-200rem);
  animation: slideIn 0.4s forwards;
  flex-direction: column;
  justify-content: space-between;
}
@keyframes slideIn {
  from {
    transform: translateY(-200rem);
  }
  to {
    transform: translateY(0);
  }
}
</style>
