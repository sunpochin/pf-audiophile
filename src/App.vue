<template>
  <NavBar />
  <RouterView />
  <!-- <v-app>
    <v-main>
      <Home />

    </v-main>
  </v-app> -->
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import HomeView from "@/views/HomeView.vue";
import NavBar from "@/components/NavBar.vue";
import { RouterView, useRoute } from "vue-router";
</script>

<style lang="scss">
/* global styles here */
:root {
  --margin-bottom: 10rem;
  --page-padding: 5rem;
  --max-width: 1440px;

  --clr-black: #000000;
  --clr-dark-grey: #101010;
  --clr-border: #979797;
  --clr-trans-border: hsla(0, 0%, 59%, 0.5);
  --clr-grey: #f1f1f1;
  --clr-offwhite: #fafafa;
  --clr-white: #ffffff;
  --clr-peach: #d87d4a;
  --clr-light-peach: #fbaf85;
  --clr-red: #cd2c2c;

  --h1-size: 3.5rem;
  --h2-size: 2.5rem;
  --h3-size: 2rem;
  --h4-size: 1.75rem;
  --h5-size: 1.5rem;
  --h6-size: 1.125rem;

  --overline-size: 0.875rem;
  --sub-size: 0.813rem;
  --body-size: 0.938rem;
  --label-size: 0.75rem;

  --margin-bottom: 10rem;
  --page-padding: 5rem;
  --max-width: 1440px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
  background-repeat: no-repeat;
}

.flex {
  display: flex;
}

$color-2-deep-black: #141414;

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-align {
  display: flex;
  align-items: center;
}

.large {
  max-width: var(--max-width);
  margin: auto;
}

img {
  max-width: 100%;
  display: block;
  height: auto;
}

@media screen and (max-width: 1024px) {
  :root {
    --page-padding: 3rem;
  }
}
@media screen and (max-width: 768px) {
  :root {
    --h1-size: 2.25rem;
    --page-padding: 1.5rem;
  }
  h1 {
    letter-spacing: 1.29px;
    line-height: 40px;
  }
  .best-gear {
    margin-bottom: 3rem;
  }
}
</style>
