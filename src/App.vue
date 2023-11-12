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
  --vt-clr-black: #000000;
  --vt-clr-dark-grey: #101010;
  --vt-clr-grey: #f1f1f1;
  --vt-clr-offwhite: #fafafa;
  --vt-clr-white: #ffffff;
  --vt-clr-peach: #d87d4a;
  --vt-clr-light-peach: #fbaf85;

  --vt-clr-border: #979797;
  --vt-clr-trans-border: hsla(0, 0%, 59%, 0.5);
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
</style>
