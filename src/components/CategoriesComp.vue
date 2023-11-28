<template>
  <section class="hero-shop">
    <div class="shop" v-for="(item, i) in categories" v-bind:key="i">
      <img :src="item.img" alt="category" class="shop-img" />
      <div class="shop-txt flex-center">
        <h6>{{ item.id }}</h6>
        <router-link :to="item.router" class="flex-align"
          >SHOP &nbsp;<img
            src="../assets/shared/desktop/icon-arrow-right.svg"
            alt=""
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
  const data = productStore.getAllProduct();
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
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  height: 21rem;
  max-width: var(--max-width);
  margin: 10rem auto 6rem;
  gap: 2rem;
  /* padding: 0 var(--page-padding);
  margin: 12rem auto 3rem;
  padding-bottom: 3rem;
  padding: 1.5rem; */
}
.shop {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 16rem;
  background-color: var(--clr-grey);
  border-radius: 10px;
  position: relative;
  top: 0rem;
  gap: 0rem;
}

.shop-txt {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  top: 12rem;
}

.shop-img {
  height: auto;
  position: absolute;
  top: -8rem;
}

@media screen and (max-width: 768px) {
  .hero-shop {
    flex-direction: column;
    gap: 0rem;
    height: 70rem;
  }
  .shop {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-self: center;
    max-width: 90%;
    height: 15rem;
    padding: 0 var(--page-padding);
  }

  .shop-img {
    align-self: center;
    position: absolute;
    top: -7rem;
    height: auto;
  }
  .shop-txt {
    flex-direction: column;
    position: relative;
    top: -2rem;
  }
}
</style>
