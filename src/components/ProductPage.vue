<template>
  <div></div>
</template>

<script setup>
console.log($route.params);
const product = getProductById($route.params.id);
const { name, description, image, price } = product;
</script>

<style lang="scss" scoped></style>
