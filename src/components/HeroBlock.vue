<template>
  <div>
    <section class="home-hero">
      <div class="hero-block flex-align large">
        <div class="div-left">
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
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home-hero {
  background-color: var(--clr-black);
}

.hero-block {
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/home/desktop/image-hero.jpg);
  color: white;
  padding: 9rem 0;
}

.div-left {
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
  font: 700 56px/103.571% Manrope, sans-serif;
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
</style>
