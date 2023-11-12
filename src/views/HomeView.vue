<template>
  <div>
    <section class="hero-sec">
      <div class="hero flex-align large">
        <div class="hero-txt">
          <div class="new-product">NEW PRODUCT</div>
          <div class="product-name">XX99 MARK II <br />HEADPHONES</div>
          <div class="product-desc">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </div>
          <button class="see-product">See product</button>
        </div>
      </div>
    </section>

    <section>
      <div>
        <CategoriesComp />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import hero from "@/assets/home/desktop/image-hero.jpg";
import HeroBlock from "@/components/HeroBlock.vue";
import CategoriesComp from "@/components/CategoriesComp.vue";
</script>

<style lang="scss" scoped>
.homeview {
  display: flex;
  flex-direction: column;
}

.showcase {
  height: 60rem;
  background-color: white;
}

.hero-sec {
  background-color: var(--vt-clr-black);
}

.hero {
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/home/desktop/image-hero.jpg);
  color: white;
  padding: 9rem 0;
}

.hero-txt {
  width: 398px;
  height: 346px;
  display: flex;

  // align-self: left;
  max-width: 100%;
  flex-grow: 1;
  flex-direction: column;
}

.new-product {
  color: #fff;
  letter-spacing: 10px;
  text-transform: uppercase;
  opacity: 0.4964;
  align-self: start;
  text-wrap: nowrap;
  font: 400 14px Manrope, sans-serif;
}

.product-name {
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  align-self: start;
  margin-top: 35px;
  text-wrap: nowrap;
  font: 700 46px/103.571% Manrope, sans-serif;
}

.product-desc {
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

/* --- RESPONSIVE --- */
@media screen and (max-width: 1440px) {
  .hero {
    padding: 7rem var(--page-padding);
  }
}

@media screen and (max-width: 1024px) {
  .hero {
    background-image: url(../assets/home/tablet/image-header.jpg);
    justify-content: center;
    background-position: center;
  }

  .hero-txt {
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  .hero {
    background-image: url(../assets/home/mobile/image-header.jpg);
  }
}
</style>
