<template>
  <section class="flex-align hero-shop">
    <div class="shop-item flex" v-for="(item, i) in categories" v-bind:key="i">
      <img :src="item.img" alt="category" class="shop-img" />
      <div class="shop-txt flex-center">
        <h6>{{ item.id }}</h6>
        <router-link :to="item.router" class="flex-align"
          >shop <img src="../assets/shared/desktop/icon-arrow-right.svg" alt=""
        /></router-link>
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
    router: "/headphones",
  },
  {
    id: "speakers",
    img: speakersImage,
    router: "/speakers",
  },
  {
    id: "earphones",
    img: earphonesImage,
    router: "/earphones",
  },
];
</script>

<style scoped>
.hero-shop {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin: 12rem auto 3rem;
  width: 100%;
}
.shop-item {
  display: flex;
  flex-direction: column;
  height: 12rem;
  width: 21rem;
  background-color: var(--vt-clr-grey);
  border-radius: 10px;
  justify-content: center;
}

.shop-txt {
  justify-content: center;
  flex-direction: column;
  align-self: flex-end;
  margin-bottom: 1.3rem;
}

.shop-img {
  top: -6.3rem;
  height: auto;
}

@media screen and (max-width: 768px) {
  .hero-shop {
    flex-direction: column;
    gap: 8rem;
  }
  .shop-item {
  }
  .hero-shop {
    margin: 8rem auto 3rem;
  }
}
</style>
