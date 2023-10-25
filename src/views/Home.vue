<template>
  <h1>home</h1>
  <div>
    <img src="@/assets/home/desktop/image-hero.jpg" alt="hero" />
  </div>
  <div class="hero-img">haha</div>

  <!-- 
    <HelloWorld /> -->
</template>

<script lang="ts" setup>
// import HelloWorld from '@/components/HelloWorld.vue'
import hero from "@/assets/home/desktop/image-hero.jpg";
</script>

<style lang="scss" scoped>
$color-1-deep-orange: #d84d4a;
$color-2-deep-black: #101010;
$color-3-deep-grey: #f1f1f1;
$color-4-light-grey: #fafafa;
$color-5-light-orange: #fbaf85;
$color-6-white: #ffffff;
$color-7-black: #000000;

h1 {
  color: $color-1-deep-orange;
}

.hero-img {
  width: 60%;
  height: 100%;
  background-image: url("@/assets/home/desktop/image-hero.jpg");
  background-position: bottom;
  background-size: cover;

  @media (max-width: 768px) {
    width: 73%;
    background-image: url("@/assets/home/desktop/image-hero.jpg");
  }
}
</style>
