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

<script setup>
import { useCartStore } from "@/store/cart";
import { useProductStore } from "@/store/product";
import { computed, onBeforeMount } from "vue";
const cartStore = useCartStore();
const productStore = useProductStore();

const removeAll = () => {
  cartStore.removeAll();
};
const totalPrice = computed(() => {
  return cartStore.getTotalPrice();
});

onBeforeMount(async () => {
  console.log("onBeforeMount");
  const result = await cartStore.fetchCartItems();
  console.log("result: ", result);
  console.log("cart items: ", cartStore.getCartItems());
  if (result.items === undefined) {
    console.log("result.items is undefined");
    return;
  }
  result.items.forEach((item) => {
    const product = productStore.getProductById(item.id);
    if (product === undefined) {
      console.log("product is undefined");
      return;
    }
    item.name = product.name;
    item.price = product.price;
    item.image = product.image;
    console.log("item: ", item);
    cartStore.cartData.cartItems.push(item);
  });
});

const getSrc = (imageName) => {
  const image = new URL("../../" + imageName, import.meta.url).href;
  // console.log("getSrc image: ", image);
  return image;
};

const decrement = async (id) => {
  cartStore.decrement(id);
};

const increment = async (id) => {
  cartStore.increment(id);
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
