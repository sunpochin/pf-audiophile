<template>
  <div></div>
</template>

<script setup lang="ts">
import { useProductStore } from "@/store/product";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
const productStore = useProductStore();

const route = useRoute();
console.log("route: ", route.params.category, route.params.id);
const product = productStore.getProduct(
  route.params.category as string,
  route.params.id as string
);
console.log("product: ", product);
</script>

<style lang="scss" scoped></style>
