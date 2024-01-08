<template>
  <div>
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

const product = productStore.getProductBySlug(route.params.id as string);
console.log("product: ", product);

onBeforeMount(() => {
  window.scrollTo(0, 0);
});
</script>

<style lang="scss" scoped>
.no-select {
  user-select: none;
}
</style>
