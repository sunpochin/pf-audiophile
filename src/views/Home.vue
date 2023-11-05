<template>
  <section class="home-hero">
    <div class="container center-layout">
      <HeaderComp />
      <img
        loading="lazy"
        src="@/assets/home/desktop/image-hero.jpg"
        class="backimg"
      />

      <div class="center-block">
        <div class="div-left">
          <div class="div-14">NEW PRODUCT</div>
          <div class="div-15">XX99 MARK II <br />HEADPHONES</div>
          <div class="div-16">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </div>
          <button class="see-product">See product</button>
        </div>
      </div>
    </div>
  </section>
  <section class="showcase">showcase</section>
  <!-- <div class="hero-img">haha</div> -->
</template>

<script lang="ts" setup>
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderComp from "@/components/HeaderComp.vue";

import hero from "@/assets/home/desktop/image-hero.jpg";
</script>

<style lang="scss" scoped>
// $color-1-deep-orange: #d84d4a;
// $color-2-deep-black: #101010;
// $color-3-deep-grey: #f1f1f1;
// $color-4-light-grey: #fafafa;
// $color-5-light-orange: #fbaf85;
// $color-6-white: #ffffff;
// $color-7-black: #000000;

// .div-3 {
//   display: flex;
//   flex-direction: column;

//   overflow: hidden;
//   align-self: stretch;
//   position: relative;
//   min-height: 737px;
//   width: 100%;
// }

.home-hero {
  // margin-top: 10rem;
  //  padding-left: 7rem;
  min-height: 100vh;
  background-color: #121212;
  // padding: 0 0 0 7rem;
}

.center-layout {
  // padding: 0 0 0 7rem;
}

.center-block {
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  margin-left: 7rempx;

  position: absolute;
  align-self: center;
  display: flex;
  margin-bottom: -33px;
  width: 100%;
  max-width: 1110px;

  color: #fff;
}

.div-left {
  width: 398px;
  height: 346px;

  align-self: left;
  display: flex;
  max-width: 100%;
  flex-grow: 1;
  flex-direction: column;
}

.div-14 {
  color: #fff;
  letter-spacing: 10px;
  text-transform: uppercase;
  opacity: 0.4964;
  align-self: start;
  text-wrap: nowrap;
  font: 400 14px Manrope, sans-serif;
}

.div-15 {
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  align-self: start;
  margin-top: 35px;
  text-wrap: nowrap;
  font: 700 56px/103.571% Manrope, sans-serif;
}

.div-16 {
  color: #fff;
  opacity: 0.75;
  margin-top: 28px;
  font: 500 15px/166.667% Manrope, sans-serif;
}

.see-product {
  margin: 25px 0 0 0;
  width: 100px;
  height: 25px;
  background-color: $primary;
}

.XX99 {
  position: absolute;
  left: 165px;
  top: 225px;
  width: 398px;
  height: 346px;

  color: white;

  display: flex;

  .wording {
    position: absolute;
    font-size: 56px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0.5px;
  }
}
.hero-img {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/home/desktop/image-hero.jpg");
  background-position: bottom;
  background-size: cover;

  @media (max-width: 768px) {
    width: 73%;
    background-image: url("@/assets/home/desktop/image-hero.jpg");
  }
}

.backimg {
  position: absolute;
  top: 20;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.showcase {
  height: 60rem;
  background-color: white;
}
</style>
