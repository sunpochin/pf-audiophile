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
          <button
            class="btn-1"
            @click="toProduct('headphones', 'xx99-mark-two-headphones')"
          >
            <p class="">SEE PRODUCT</p>
          </button>
        </div>
      </div>
    </section>

    <div class="padding-wrapper">
      <CategoriesComp />

      <section class="main-prod-wrap">
        <div class="main-product large flex-align">
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
            <button class="btn-4" @click="toProduct('speakers', 'zx9 speaker')">
              <p class="btn-4-p">SEE PRODUCT</p>
            </button>
          </div>
        </div>
      </section>
      <section class="secondary-product-wrap flex-center">
        <div class="secondary-product large flex-align">
          <div class="secondary-product-txt">
            <h4>zx7 speaker</h4>
            <button class="btn-2" @click="toProduct('speakers', 'zx7 speaker')">
              <p class="btn-2-p">SEE PRODUCT</p>
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
                @click="toProduct('earphones', 'yx1 earphones')"
              >
                <p class="btn-2-p">SEE PRODUCT</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Best />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
import CategoriesComp from "@/components/CategoriesComp.vue";
import Best from "@/components/Best.vue";
import Footer from "@/components/Footer.vue";

const toProduct = (category: string, str: string) => {
  const arr = str.toLowerCase().split(" ");
  const join = arr.join("-");
  console.log(join);
  router.push("/" + category);
};
</script>

<style lang="scss" scoped>
.hero {
  padding: 9rem var(--page-padding);
}

.padding-wrapper {
  max-width: var(--max-width);
  padding: 0 var(--page-padding);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
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
  display: flex;
  flex-direction: row;
  background-color: var(--clr-peach);
  height: 30rem;
  width: 100%;
  border-radius: 10px;
  margin: 0 auto 3rem;
  position: relative;
  padding: 0 var(--page-padding);
}

.main-product picture {
  margin: 1rem;
  width: 36rem;
  height: 20rem;
}

// .main-product picture {
//   position: absolute;
//   width: 25.625rem;
//   height: auto;
//   bottom: -1rem;
//   left: 7.8rem;
// }

.secondary-product {
  background-image: url("../assets/home/desktop/image-speaker-zx7.jpg");
  background-size: cover;
  background-position: bottom;
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
  height: 346px;
  display: flex;
  max-width: 100%;
  flex-direction: column;
}

.new-product {
  width: 100%;
  text-align: center;
  color: var(--clr-white);
  letter-spacing: 10px;
  text-transform: uppercase;
  opacity: 0.4964;
  align-self: start;
  text-wrap: nowrap;
  font: 400 14px Manrope, sans-serif;
}

.product-name {
  width: 100%;
  text-align: center;
  color: var(--clr-white);
  letter-spacing: 2px;
  text-transform: uppercase;
  align-self: start;
  margin-top: 35px;
  text-wrap: nowrap;
  font: 700 26px/103.571% Manrope, sans-serif;
}

.product-desc {
  color: #fff;
  opacity: 0.75;
  margin: 4rem 0;
  font: 500 15px/166.667% Manrope, sans-serif;
}

/* --- RESPONSIVE --- */
@media screen and (max-width: 768px) {
  .hero {
    padding: 7rem var(--page-padding);
  }

  .main-product {
    flex-direction: column;
    height: 40rem;
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
