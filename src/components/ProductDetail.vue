<template>
  <section class="large">
    <div class="product-wrapper">
      <button class="go-back" @click="goBack()">Go Back</button>
      <div class="img-wrapper">
        <img :src="getSrc(product.image.mobile)" />
      </div>
      <div class="product-name">{{ product.name }}</div>
      <div class="product-desc">
        {{ product.description }}
      </div>
      <div class="product-price">$ {{ product.price }}</div>
      <div class="cart flex-align">
        <div class="quantity flex-center">
          <button class="quantity-setters" v-on:click="decrement()">-</button>
          <p id="qt">{{ quantity }}</p>
          <button class="quantity-setters" v-on:click="increment()">+</button>
        </div>
        <button class="btn-1" v-on:click="addToCart()">
          <p class="btn-1-p">add to cart</p>
        </button>
        <p class="error" v-show="errMsg">{{ errMsg }}</p>
      </div>
      <h1 class="feature">FEATURES</h1>
      <div class="product-desc">
        {{ product.description }}
      </div>
      <div>{{ product.features }}</div>

      <strong class="in-the-box">IN THE BOX</strong>
      <ul>
        <li v-for="(item, index) in product.includes" :key="item.id">
          <span class="quantity">{{ item.quantity }}x</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.item }}
        </li>
      </ul>

      <div class="gallery">
        <img :src="getSrc(product.gallery.first.mobile)" />
        <img :src="getSrc(product.gallery.second.mobile)" />
        <img :src="getSrc(product.gallery.third.mobile)" />
      </div>

      <Best />
    </div>
  </section>
  <Footer />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Best from "@/components/Best.vue";
import Footer from "@/components/Footer.vue";
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();

const router = useRouter();
// const { product } = defineProps(["product"]);
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
const { product } = defineProps(["product"]);
console.log("product: ", product);
const quantity = ref(0);
const errMsg = ref("");

const addToCart = () => {
  cartStore.addToCart(product);
};

onMounted(async () => {});
const goBack = () => {
  router.go(-1);
};

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
const increment = () => {
  if (quantity.value >= 9) {
    return;
  }
  quantity.value++;
};

//https://cn.vitejs.dev/guide/assets#new-url-url-import-meta-url
const getSrc = (imageName: any) => {
  const image = new URL("../../" + `${imageName}`, import.meta.url).href;
  return image;
};
</script>

<style lang="scss" scoped>
.cart {
  gap: 1rem;
  position: relative;
}

.go-back {
  text-align: left;
  font: 400 14px normal Manrope, sans-serif;
  opacity: 0.5;
}
.product-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-name {
  font: 700 2rem normal Manrope, sans-serif;
  margin-bottom: 1rem;
}

.product-desc {
  font: 500 1rem normal Manrope, sans-serif;
  margin: 0.5rem 0;
}

.img-wrapper {
  width: 100%;
  height: 100%;
}

img {
  border-radius: 10px;
}

.product-price {
  font: 700 1rem normal Manrope, sans-serif;
  margin: 2rem 0;
}

.quantity-setters {
  background-color: var(--clr-grey);
}
.quantity {
  color: var(--clr-peach);
}

.feature {
  margin: 3rem 0;
}

.in-the-box {
  font: 700 1.5rem normal Manrope, sans-serif;
  margin: 3rem 0;
}

.gallery {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 4rem auto;
}

@media screen and (max-width: 768px) {
  img {
    border-radius: 10px;
  }
  .product-wrapper {
    padding: 0 var(--page-padding);
  }
}
</style>
