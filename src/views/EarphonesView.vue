<template>
  <div class="title">EARPHONES</div>
  <ProductBox :product-list="productList" xxx="123" />
  <CategoriesComp />

  <Best />
  <Footer />
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import ProductBox from "@/components/ProductBox.vue";
import Best from "@/components/Best.vue";
import Footer from "@/components/Footer.vue";
import { useProductStore } from "@/store/product.ts";
import CategoriesComp from "@/components/CategoriesComp.vue";

const productList = ref([]);

onBeforeMount(() => {
  const productStore = useProductStore();
  productList.value = productStore.getEarphones();
  console.log("view productList: ", productList.value);
});
</script>

<style scoped lang="scss">
.title {
  height: 3rem;
  background-color: var(--clr-dark-grey);
  color: var(--clr-white);
  text-align: center;
  font-size: var(--h4-size);
  font: 700 28px Manrope, sans-serif;
}
</style>
