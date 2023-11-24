<template>
  <div>
    <!-- <p class="no-select">這是一段文本，用戶不能選擇。</p> -->
    <ProductDetail :product="product" />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "@/store/product";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import ProductDetail from "@/components/ProductDetail.vue";

const productStore = useProductStore();
const route = useRoute();
console.log("route: ", route.params.category, route.params.id);
const product = productStore.getProductById(
  // route.params.category as string,
  route.params.id as string
);
// console.log("product: ", product);
</script>

<style lang="scss" scoped>
.no-select {
  user-select: none;
}
</style>
