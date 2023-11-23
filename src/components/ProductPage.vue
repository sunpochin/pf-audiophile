<template>
  <div class="product-wrapper">
    <div>Go Back</div>
    <img :src="getSrc(product.image.mobile)" />
    <div class="new-product">NEW PRODUCT</div>
    <div class="product-name">{{ product.name }}</div>
    <div class="product-desc">
      {{ product.description }}
      <div class="product-price">$ {{ product.price }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
const { product } = defineProps(["product"]);
console.log("product: ", product);

onMounted(async () => {});

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
</style>
