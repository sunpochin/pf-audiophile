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
    <section class="main-prod-wrap flex-center">
      <div class="main-product">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcset="../assets/home/desktop/image-speaker-zx9.png"
            class="source-pc"
          />
          <source
            media="(min-width: 768px)"
            srcset="../assets/home/tablet/image-speaker-zx9.png"
            class="source-tablet"
          />
          <img
            src="../assets/home/mobile/image-speaker-zx9.png"
            alt="image of the speaker"
            class="source-mobile"
          />
        </picture>
        <div class="main-prod-txt">
          <h2 class="h2-big">zx9 speaker</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button class="btn-4" @click="toProduct('zx9 speaker', 'speakers')">
            <p class="btn-4-p">see product</p>
          </button>
        </div>
      </div>
    </section>
    <section class="secondary-product-wrap flex-center">
      <div class="secondary-product large flex-align">
        <div class="secondary-product-txt">
          <h4>zx7 speaker</h4>
          <button class="btn-2" @click="toProduct('zx7 speaker', 'speakers')">
            <p class="btn-2-p">see product</p>
          </button>
        </div>
      </div>
    </section>
    <section class="ternary-product-wrap">
      <div class="ternary-product">
        <div class="ternary-product-1"></div>
        <div class="ternary-product-2">
          <div class="ternary-product-txt">
            <h4>yx1 earphones</h4>
            <button
              class="btn-2"
              @click="toProduct('yx1 earphones', 'earphones')"
            >
              <p class="btn-2-p">see product</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
import hero from "@/assets/home/desktop/image-hero.jpg";
import HeroBlock from "@/components/HeroBlock.vue";
import CategoriesComp from "@/components/CategoriesComp.vue";
const toProduct = (name: string, path: string) => {
  // router.push({path: path, params: { pathname: name} );
  router.push({ path: path });
};
</script>

<style lang="scss" scoped>
.main-prod-txt {
  color: var(--clr-white);
}

.main-prod-txt > p {
  max-width: 17rem;
  margin: 2rem 0;
}

.source-mobile {
  height: 10rem;
}
.main-product {
  flex-direction: column;
  background-color: var(--clr-peach);
  height: 40rem;
  width: 100%;
  border-radius: 10px;
  padding: 3rem;
  margin: 0 auto 3rem;
  position: relative;
}

.main-product picture {
  margin: 1rem;

  width: 16rem;
  height: auto;
}

.secondary-product {
  // background-color: var(--clr-grey);
  background-image: url("../assets/home/desktop/image-speaker-zx7.jpg");
  // background-size: contain;
  // background-repeat: repeat;
  background-size: cover;
  background-position: bottom;
  // background-size: cover;
  // background-position: bottom 2rem right 1rem;
  height: 20rem;
  width: 100%;
  border-radius: 10px;
  padding: 3rem;
  margin: 0 auto 3rem;
}

h4 {
  max-width: 18rem;
  margin: 2rem 0;
}

.ternary-product {
  display: flex;
  flex-direction: column;
}
.ternary-product-1 {
  background-image: url("../assets/home/desktop/image-earphones-yx1.jpg");
  background-size: cover;
  background-position: bottom;
  height: 14rem;
  width: 100%;
  border-radius: 10px;
  padding: 3rem;
  margin: 0 auto 3rem;
}

.ternary-product-2 {
  background-color: var(--clr-grey);
  height: 14rem;
  width: 100%;
  border-radius: 10px;
  margin: 0 auto 3rem;
}

.ternary-product-txt {
  max-width: 21rem;
  margin: 0rem 3rem;
}

.hero-sec {
  background-color: var(--clr-black);
}

.hero {
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/home/desktop/image-hero.jpg);
  color: white;
}

.hero-txt {
  // width: 398px;
  height: 346px;
  display: flex;

  // align-self: left;
  max-width: 100%;
  // flex-grow: 1;
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
  font: 700 40px/103.571% Manrope, sans-serif;
}

.product-desc {
  color: #fff;
  opacity: 0.75;
  margin-top: 28px;
  font: 500 15px/166.667% Manrope, sans-serif;
}

.see-product {
  margin: 2rem 0 0 0;
  width: 10rem;
  height: 2rem;
  background-color: var(--clr-peach);
  align-self: center;
}

/* --- RESPONSIVE --- */
@media screen and (max-width: 1440px) {
  .hero {
    padding: 7rem var(--page-padding);
  }

  .main-prod-wrap,
  .secondary-product-wrap,
  .ternary-product-wrap {
    padding: 0 var(--page-padding);
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

  .main-product picture {
    left: 3rem;
    top: 0.7rem;
    width: 12.3rem;
    height: auto;
  }

  .main-prod-txt {
    margin-left: unset;
    text-align: center;
    margin: auto;
  }
  // .secondary-product-txt {
  //   // margin-left: unset;
  //   // text-align: center;
  //   // margin: auto;
  // }
}

@media screen and (max-width: 768px) {
  .hero {
    background-image: url(../assets/home/mobile/image-header.jpg);
  }
  .secondary-product {
    background-image: url("../assets/home/mobile/image-speaker-zx7.jpg");
  }
}
</style>
