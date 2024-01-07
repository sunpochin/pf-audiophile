<template>
  <section>
    <div class="cart">
      <div class="cart-content">
        <div class="wording-n-remove">
          <div class="cart-wording">CART:</div>
          <div v-on:click="removeAll()" class="remove-all">Remove All</div>
        </div>
        <ul>
          <li
            class="flex-align li-data"
            v-for="it in cartStore.getCartItems()"
            v-bind:key="it.id"
          >
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
              <button v-on:click="decrement(it.id)" class="decrement">-</button>
              <p id="qt">{{ it.quantity }}</p>
              <button v-on:click="increment(it.id)" class="increment">+</button>
            </div>
          </li>
        </ul>
        <div class="total">TOTAL: {{ totalPrice }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from "@/store/cart";
import { computed, onMounted, onBeforeMount } from "vue";
const cartStore = useCartStore();

const removeAll = () => {
  cartStore.removeAll();
};
const totalPrice = computed(() => {
  return cartStore.getTotalPrice();
});

onBeforeMount(() => {
  cartStore.readCookie();
});

// const getShowCart = () => {
//   return cartStore.getShowCart();
// };

const getSrc = (imageName: string) => {
  const image = new URL("../../" + imageName, import.meta.url).href;
  // console.log("getSrc image: ", image);
  return image;
};

const decrement = (id: number) => {
  cartStore.getCartItems().forEach((item) => {
    if (item.id === id) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    }
  });
  cartStore.saveCartData();
};

const increment = (id: number) => {
  cartStore.getCartItems().forEach((item) => {
    if (item.id === id) {
      if (item.quantity < 9) {
        item.quantity++;
      }
    }
  });
  cartStore.saveCartData();
};
</script>

<style lang="scss" scoped>
.li-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.container {
  padding: 0 var(--page-padding);

  // background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  // position: fixed;
  // z-index: 100;
  // inset: 3.5rem 0 0 0;
}

.cart {
  width: auto;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--clr-white);
  padding: 2rem 10rem;
  position: relative;
  margin: 0 auto;

  flex-direction: column;
  justify-content: space-between;
}

.cart-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0rem;
}

.wording-n-remove {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font: 700 1rem normal Manrope, sans-serif;
}

.remove-all {
  color: var(--clr-red);
  cursor: pointer;
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

.total {
  font: 700 1rem normal Manrope, sans-serif;
  margin-bottom: 1rem;
  margin-left: auto;
}
</style>
