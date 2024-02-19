<template>
  <div></div>
</template>

<script setup>
var expect = function (val) {
  return {
    toBe: function (input) {
      if (val === input) {
        return true;
      }
      return false;
    },
    notToBe: function (input) {
      if (val !== input) {
        return true;
      }
      return false;
    },
  };
  // toBe(input) {
  //     if (val === input) {
  //         return true;
  //     }
  //     return false;
  // }
  // notToBe(input) {
  //     if (val !== input) {
  //         return true;
  //     }
  //     return false;
  // }
};
</script>

<style scoped></style>
