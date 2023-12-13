<template>
  <div>
    <section class="container" v-show="cartStatus()">
      <div class="cart">
        CART:
        <ul>
          <li v-for="item in cartItems" v-bind:key="item.id">
            <div class="product-img">
              <img :src="getSrc(item.image.mobile)" />
            </div>
            <div class="data-wrapper"></div>
            <div class="item-data">
              <div class="name-price">
                <div class="name">
                  {{ item.name }}
                </div>
                <div class="price">
                  {{ item.price }}
                </div>
              </div>
              <div class="quantity">{{ item.quantity }}</div>
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

img {
  border-radius: 10px;
  width: 3rem;
  height: 3rem;
  // position: absolute;
}

.data-wrapper {
  // display: inline-block;
}
.item-data {
  display: flex;
  flex-direction: row;
}
.name-price {
  display: flex;
  flex-direction: column;
  font: 700 1rem normal Manrope, sans-serif;
  margin-bottom: 1rem;
}
</style>
