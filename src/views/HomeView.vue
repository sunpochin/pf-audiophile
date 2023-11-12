<template>
  <div class="homeview">
    <section>
      <div>
        <HeroBlock />
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

@media screen and (max-width: 768px) {
}
</style>
