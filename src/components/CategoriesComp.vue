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
  const data = productStore.getProduct();
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
  height: 21rem;
  max-width: var(--max-width);

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0rem;
  /* padding: 0 var(--page-padding);
  margin: 12rem auto 3rem;
  padding-bottom: 3rem;
  margin: 10rem auto 6rem;
  padding: 1.5rem; */
}
.shop {
  display: flex;
  width: 100%;
  height: 16rem;
  background-color: var(--clr-grey);
  border-radius: 10px;
  position: relative;
  /* left: 100px; */
  top: 0rem;
  gap: 0rem;
}

.shop-txt {
  justify-content: center;
  flex-direction: column;
  /* margin-bottom: -7.3rem; */
}

.shop-img {
  height: auto;
}

@media screen and (max-width: 768px) {
  /* // study
  .hero-shop {
    flex-direction: column;
    gap: 0rem;
    margin: 5rem auto 0rem;

    padding: 1.5rem;
    height: 51rem;
  }
  .shop {
    height: 16rem;
    gap: 1rem;
  } */

  .hero-shop {
    flex-direction: column;
    gap: 0rem;
    height: 70rem;
  }
  .shop {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 15rem;
    gap: 0rem;
  }

  .shop-img {
    align-self: center;
    position: absolute;
    top: -7rem;
    height: auto;
  }
  .shop-txt {
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;
    gap: 1rem;
  }
}
</style>
