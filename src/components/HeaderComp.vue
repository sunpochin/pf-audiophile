<template>
  <!-- <div class="div1 d-flex justify-center ;"> -->
  <div class="back">
    audiophile
    <v-tabs>
      <v-tab value="home">home</v-tab>
      <v-tab value="headphones">headphones</v-tab>
      <v-tab value="speakers">speakers</v-tab>
      <v-tab value="earphones">earphones</v-tab>
    </v-tabs>

    <hr />
    <div id="#loginblock">login</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
$color-2-deep-black: #141414;

.div1 {
  justify-content: center;
  width: 100%;
  background-color: $color-2-deep-black;
}

.back {
  width: 1109.83px;
  height: 96px;
  background-color: $color-2-deep-black;
  display: flex;
  justify-content: space-between;
  align-items: left;
  color: white;
}

.tabsfour {
  display: flex;
  justify-content: space-between;
  width: 429px;
  height: 2500px;
  color: white;
  text-transform: uppercase;

  letter-spacing: 2px;
  font: bold 13px Manrope, sans-serif;
  margin-top: 15px;
}

loginblock {
  color: white;
  // background-color: green;
}

.div-12 {
  background-color: rgba(255, 255, 255, 0.2);
  align-self: stretch;
  display: flex;
  margin-top: 36px;
  width: 100%;
  height: 1px;
  flex-direction: column;
}
</style>
