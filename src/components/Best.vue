<template>
  <div class="best-wrapper">
    <!-- <img src="../assets/shared/mobile/image-best-gear.jpg" alt="" />
    <img
      srcset="../assets/shared/mobile/image-best-gear.jpg"
      alt="product image"
    /> -->
    <div class="text-wrapper">
      <div class="text-title">Bringing you the best audio gear</div>
      <div class="text-desc">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </div>
    </div>
    <img
      src="../assets/shared/mobile/image-best-gear.jpg"
      srcset="
        ../assets/shared/mobile/image-best-gear.jpg  480w,
        ../assets/shared/mobile/image-best-gear.jpg  800w,
        ../assets/shared/mobile/image-best-gear.jpg 1200w
      "
      sizes="(max-width: 600px) 480px, 800px"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.best-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: var(--max-width);
  height: 100%;
  gap: 2rem;
  margin: 2rem auto 0rem;
  padding: 0 var(--page-padding);
}
img {
  widows: 100%;
  max-height: 30rem;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.best-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  background-color: var(--clr-peach);
  margin: 3rem;
  padding: 3rem auto 3rem;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 3rem auto 3rem;
}
.text-title {
  color: var(--clr-black);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}
.text-desc {
  color: var(--clr-black);
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  max-width: 50rem;
}

@media screen and (max-width: 768px) {
  // @media screen and (max-width: 1440px) {
  .best-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    gap: 2rem;
    margin: 2rem auto 0rem;
    padding: 0 var(--page-padding);
  }
  img {
    width: 100%;
    max-height: 20rem;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .best-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    background-color: var(--clr-peach);
    margin: 3rem;
    padding: 3rem auto 3rem;
  }
  .text-title {
    color: var(--clr-black);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
  .text-desc {
    color: var(--clr-black);
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    max-width: 50rem;
  }
}
</style>
