<template>
  <div class="product-wrapper">
    <button @click="goBack()">Go Back</button>
    <img :src="getSrc(product.image.mobile)" />
    <div class="new-product">NEW PRODUCT</div>
    <div class="product-name">{{ product.name }}</div>
    <div class="product-desc">
      {{ product.description }}
    </div>
    <div class="product-price">$ {{ product.price }}</div>
    <div>{{ product.features }}</div>

    <strong>IN THE BOX</strong>
    <ul>
      <li v-for="(item, index) in product.includes" :key="item.id">
        <span class="quantity">{{ item.quantity }}x</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { product } = defineProps(["product"]);
console.log("product: ", product);

onMounted(async () => {});
const goBack = () => {
  router.go(-1);
};
//https://cn.vitejs.dev/guide/assets#new-url-url-import-meta-url
const getSrc = (imageName) => {
  const image = new URL("../../" + `${imageName}`, import.meta.url).href;
  return image;
};
</script>

<style lang="scss" scoped>
.product-wrapper {
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 100%;
  height: 100%;

  padding: 0 var(--page-padding);
}

img {
  // margin: 1rem;
  border-radius: 10px;
}
.new-product {
  font: 400 14px normal Manrope, sans-serif;
}
.product-name {
  width: 100%;
  height: 100%;
  color: #000;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.product-price {
  margin-left: 0;
  font: 700 18px normal Manrope, sans-serif;
}
.quantity {
  color: var(--clr-peach);
}
</style>
