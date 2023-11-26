<template>
  <div class="product-wrapper large">
    <button class="go-back" @click="goBack()">Go Back</button>
    <div class="product-detail">
      <div class="img-wrapper">
        <img :src="getSrc(product.image.mobile)" />
      </div>
      <div class="product-right">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-desc">
          {{ product.description }}
        </div>
        <div class="product-price">$ {{ product.price }}</div>

        <div class="cart flex-align">
          <div class="quantity flex-center">
            <button class="quantity-setters" v-on:click="decrement()">-</button>
            <p id="qt">{{ quantity }}</p>
            <button class="quantity-setters" v-on:click="increment()">+</button>
          </div>
          <button class="btn-1" v-on:click="addToCart()">
            <p class="btn-1-p">add to cart</p>
          </button>
          <p class="error" v-show="errMsg">{{ errMsg }}</p>
        </div>
      </div>
    </div>
    <div class="feature-box-wrapper">
      <div class="feature">
        <h3>FEATURES</h3>
        <div class="product-desc">
          {{ product.description }}
        </div>
        <div>{{ product.features }}</div>
      </div>
      <div class="in-the-box">
        <div class="box-wording">
          <h3>IN THE BOX</h3>
        </div>
        <ul>
          <li
            class="box-item"
            v-for="(item, index) in product.includes"
            :key="item.id"
          >
            <span class="quantity">{{ item.quantity }}x</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
              item.item
            }}
          </li>
        </ul>
      </div>
    </div>

    <div class="gallery">
      <img :src="getSrc(product.gallery.first.mobile)" />
      <img :src="getSrc(product.gallery.second.mobile)" />
      <img :src="getSrc(product.gallery.third.mobile)" />
    </div>

    <Best />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Best from "@/components/Best.vue";
import Footer from "@/components/Footer.vue";

const router = useRouter();
const { product } = defineProps(["product"]);
console.log("product: ", product);

const quantity = ref(0);
const errMsg = ref("");

onMounted(async () => {});
const goBack = () => {
  router.go(-1);
};

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
const increment = () => {
  if (quantity.value >= 9) {
    return;
  }
  quantity.value++;
};

//https://cn.vitejs.dev/guide/assets#new-url-url-import-meta-url
const getSrc = (imageName) => {
  const image = new URL("../../" + `${imageName}`, import.meta.url).href;
  return image;
};
</script>

<style lang="scss" scoped>
.cart {
  gap: 1rem;
  position: relative;
}

.go-back {
  text-align: left;
  font: 400 14px normal Manrope, sans-serif;
  opacity: 0.5;
}
.product-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 var(--page-padding);
}
.product-detail {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 6rem;
  justify-content: space-between;
}

.product-right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  width: 100%;
  margin: 5rem auto;
}

.product-name {
  font: 700 2rem normal Manrope, sans-serif;
  margin-bottom: 1rem;
}

.product-desc {
  font: 500 1rem normal Manrope, sans-serif;
  margin: 0.5rem 0;
}

.img-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

img {
  border-radius: 20px;
}

.product-price {
  font: 700 1rem normal Manrope, sans-serif;
  margin: 2rem 0;
}

.quantity-setters {
  background-color: var(--clr-grey);
}
.quantity {
  color: var(--clr-peach);
}

.feature-box-wrapper {
  display: flex;
  flex-direction: display;
  justify-content: space-between;
  gap: 3rem;
  margin: 3rem auto;
}
.feature {
  flex: 0 0 50%;
  margin: 3rem 0;
}

.in-the-box {
  flex: 0 0 30%;
  font: 700 1.5rem normal Manrope, sans-serif;
  margin: 3rem 0 3rem;
}

.box-wording {
  margin-bottom: 3rem;
}

.box-item {
  font: 500 1rem normal Manrope, sans-serif;
}

.gallery {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 4rem auto;
}

@media screen and (max-width: 1440px) {
}
</style>
