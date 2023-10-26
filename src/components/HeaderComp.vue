<template>
  <div class="div1 d-flex justify-center ;">
    <div class="back">
      audiophile
      <div class="tabsfour text-white justify-between">
        <div>home</div>
        <div>headphones</div>
        <div>speakers</div>
        <div>earphones</div>
      </div>
      <top>login</top>
    </div>
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
  height: 28px;
  background-color: $color-2-deep-black;
  display: flex;
  justify-content: space-between;
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
