<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
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
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

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

main {
  width: 100%;
  // margin-top: 3.625rem;
  padding-top: 3.625rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
  color: var(--clr-black);
}
h1,
.h2-big {
  font-size: var(--h1-size);
  letter-spacing: 2px;
  line-height: 58px;
  text-transform: uppercase;
}
h2 {
  font-size: var(--h2-size);
  letter-spacing: 1.5px;
  line-height: 44px;
}
h3 {
  font-size: var(--h3-size);
  letter-spacing: 1.15px;
  line-height: 36px;
  text-transform: uppercase;
}
h4 {
  font-size: var(--h4-size);
  letter-spacing: 2px;
  line-height: 38px;
  text-transform: uppercase;
}
h5 {
  font-size: var(--h5-size);
  letter-spacing: 1.7px;
  line-height: 33px;
}
h6 {
  font-size: var(--h6-size);
  letter-spacing: 1.3px;
  line-height: 24px;
  text-transform: uppercase;
}
p {
  font-size: var(--body-size);
  line-height: 25px;
  font-weight: medium;
}

button {
  width: 10rem;
  height: 3rem;
}

.btn-1 {
  background-color: var(--clr-peach);
  border: none;
  text-transform: uppercase;
}
.btn-1:hover {
  background-color: var(--clr-light-peach);
}
.btn-1-p {
  color: var(--clr-white);
}

.btn-2 {
  background-color: transparent;
  border: solid 1px var(--clr-black);
}
.btn-2:hover {
  background-color: var(--clr-black);
}
.btn-2:hover .btn-2-p {
  color: var(--clr-white);
}

.btn-4 {
  background-color: var(--clr-black);
  border: none;
}
.btn-4:hover {
  background-color: rgb(79, 79, 79);
}
.btn-4-p {
  color: var(--clr-white);
}

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

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
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

.quantity {
  height: 3rem;
  background-color: var(--clr-grey);
  gap: 1rem;
  width: 7rem;
}
.quantity * {
  font-size: var(--h6-size);
  font-weight: 600;
  color: var(--clr-border);
}
.quantity-setters {
  cursor: pointer;
  transition: 0.4s;
}
.quantity-setters:hover {
  color: var(--clr-black);
}
</style>
