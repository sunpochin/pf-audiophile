<template>
  <div>
    <section class="container" v-show="cartStatus()">
      <div class="cart">
        CART:
        <ul>
          <li class="flex-align" v-for="it in cartItems" v-bind:key="it.id">
            <div class="product-img">
              <img
                :src="getSrc(it.image.mobile)"
                :alt="'Picture of the ' + it.name"
              />
            </div>
            <div class="product-infos">
              <p>
                <strong>{{ it.name }}</strong>
              </p>
              <p class="price">$ {{ it.price }}</p>
            </div>
            <div class="quantity flex-center">
              <button class="quantity-setters">-</button>
              <p id="qt">{{ it.quantity }}</p>
              <button class="quantity-setters">+</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();
const cartItems = cartStore.getCartItems();

const cartStatus = () => {
  return cartStore.getCartValue();
};

const getSrc = (imageName: string) => {
  const image = new URL("../../" + imageName, import.meta.url).href;
  console.log("getSrc image: ", image);
  return image;
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 100;
  inset: 3.5rem 0 0 0;
}

.product-img {
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  flex: 0 0 4rem;
}

.price {
  font-size: var(--overline-size);
  color: var(--clr-border);
}

.cart {
  width: auto;
  max-width: 32rem;
  min-height: 30rem;
  border-radius: 10px;
  background-color: var(--clr-white);
  padding: 0.5rem;
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

img {
  border-radius: 10px;
  width: 3rem;
  height: 3rem;
  // position: absolute;
}

.item-data {
  display: flex;
  flex-direction: row;
}

.product-infos {
  width: 8rem;
  word-wrap: break-word;
}
.name-price {
  display: flex;
  flex-direction: column;
  font: 700 1rem normal Manrope, sans-serif;
  margin-bottom: 1rem;
}
</style>
