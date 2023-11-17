<template>
  <div class="title">HEADPHONES</div>
  <ProductBox :product-list="productList" xxx="123" />
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import ProductBox from "@/components/ProductBox.vue";
import { useProductStore } from "@/store/product.ts";

const productList = ref([]);

onBeforeMount(() => {
  const productStore = useProductStore();
  productList.value = productStore.getHeadphones();
  console.log("view productList: ", productList.value);
});
</script>

<style scoped lang="scss">
.title {
  height: 3rem;
  background-color: var(--clr-dark-grey);
  color: var(--clr-white);
  text-align: center;
  font-size: var(--h4-size);
  font: 700 28px Manrope, sans-serif;
}
</style>

<!-- <script>
import { onMounted, onBeforeMount, ref } from "vue";
import ProductBox from "@/components/ProductBox.vue";
import { useProductStore } from "@/store/product.js";

export default {
  name: "HeadphonesView",
  components: {
    ProductBox,
  },
  data() {
    return {
      productList: [],
    };
  },

  setup() {
    const count = ref(0);

    // expose to template and other options API hooks
    return {
      count,
    };
  },

  mounted() {
    console.log(this.count); // 0
  },
  beforeMount() {
    console.log("headphones mounted");
    const productStore = useProductStore();
    this.productList = productStore.getHeadphones();
    console.log("view productList: ", productList.value);
  },
};
</script> -->
