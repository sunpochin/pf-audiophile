<template>
  <section class="flex-align">
    <div class="cate-container">
      <div v-for="item in categories" v-bind:key="item.id" class="flex-item">
        <img :src="item.img" alt="category" class="item-img" />
        <h2>{{ item.id }}</h2>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/store/product.js";
import headphonesImage from "@/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "@/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "@/assets/shared/desktop/image-category-thumbnail-earphones.png";

const productStore = useProductStore();

onMounted(() => {
  const data = productStore.getProduct();
  console.log(data);
});

const categories = [
  {
    id: "headphones",
    img: headphonesImage,
  },
  {
    id: "speakers",
    img: speakersImage,
  },
  {
    id: "earphones",
    img: earphonesImage,
  },
];
</script>

<style scoped>
.flex-item {
  display: flex;
  flex-direction: column;
  height: 12rem;
  width: 21rem;
  background-color: var(--vt-clr-grey);
  border-radius: 10px;
  justify-content: center;
}

.item-img {
  top: -6.3rem;
  height: auto;
}
.cate-container {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin-top: 5rem;
  width: 100%;
}
</style>
