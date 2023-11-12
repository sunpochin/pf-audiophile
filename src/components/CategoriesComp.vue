<template>
  <div class="container">
    <h1>Categories</h1>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/store/product.js";
const productStore = useProductStore();

onMounted(() => {
  const data = productStore.getProduct();
  console.log(data);
});

const categories = [
  {
    id: "headphones",
    img: "../assets/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    id: "speakers",
    img: "../assets/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    id: "earphones",
    name: "Category 3",
  },
];
</script>

<style scoped>
.container {
  /* height: 100vh; */
  min-height: 100vh;
  background-color: #121212;
  color: white;
}
</style>
