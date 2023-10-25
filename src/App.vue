<template>
  <v-app>
    <v-main>
      <!-- <Home /> -->
      <RouterView />

    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
  import Home from '@/views/Home.vue'
import { RouterView, useRoute } from 'vue-router'
</script>
