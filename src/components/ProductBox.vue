<template>
  <div>
    <section>
      <div class="prod large flex-align" v-for="p in productList" :key="p.id">
        <div class="prod-img">
          <img :srcset="getSrcset(p.image.mobile)" alt="product image" />
        </div>
        <div class="prod-txt">
          <p class="p-overline"><strong>new product</strong></p>
          <h2 class="prod-name">{{ p.name }}</h2>
          <p class="prod-desc">
            {{ p.description }}
          </p>
          <button class="btn-1">
            <router-link
              class="product-link"
              :to="`/product/${p.category}/${p.slug}`"
              >see product</router-link
            >
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUpdate } from "vue";
import { onMounted, onUpdated, onActivated, ref } from "vue";

function getSrcset(mobileImagePath) {
  // 可以在这里进行任何其他处理
  // 例如，添加其他不同分辨率的图片路径
  // return `@/${mobileImagePath}`;
  return `${mobileImagePath}`;
}
const { productList, xxx } = defineProps(["productList", "xxx"]);
// console.log("xxx  : ", xxx);
// console.log("productList: ", productList);
// productList.forEach((element) => {
//   console.log(element, "element");
// });
// const firstProduct = (productList as any[])[0];
// console.log(firstProduct);

onMounted(() => {
  // console.log("xxx 2: ", xxx);
  // const firstProduct = (productList as Array<any>)[0];
  const firstProduct = productList;
  // console.log("First product: ", firstProduct);
  productList.forEach((element) => {
    console.log(element, "element");
    console.log("img: ", `@/${element.image["mobile"]}`);
    console.log("img: ", `@/${element.image.mobile}`);
  });
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1440px) {
  // @media screen and (max-width: 768px) {
  .prod {
    flex-direction: column;
    margin: 3rem auto 6rem;
  }
  .prod-img {
    width: 100%;
    padding: 1.5rem;
  }
  .prod-txt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    height: 24rem;
    text-align: center;
    width: 100%;
  }
  .p-overline {
    color: var(--clr-peach);
    font: 400 1rem normal Manrope, sans-serif;
    letter-spacing: 0.5rem;
    text-align: center;
    text-transform: uppercase;
  }
  .name {
    font: 700 2.25rem Manrope, sans-serif;
  }
  .prod-desc {
    font: 500 1rem normal Manrope, sans-serif;
  }
  .product-link {
    color: var(--clr-white);
  }
}
</style>
