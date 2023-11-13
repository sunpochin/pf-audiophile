<template>
  <header>
    <div class="flex-align wording">
      <div class="logos flex-align">
        <svg
          class="burger"
          @click="isOpen = !isOpen"
          width="16"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
          </g>
        </svg>
        audiophile
      </div>
      <nav class="pc-nav">
        <ul class="flex-center pc-ul">
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/headphones">HEADPHONES</router-link></li>
          <li><router-link to="/speakers">SPEAKERS</router-link></li>
          <li><router-link to="/earphones">EARPHONES</router-link></li>
        </ul>
      </nav>
      <!-- <nav class="mobile-nav" v-if="isOpen">
        <ul class="flex-center mobile-ul">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/headphones">Headphones</router-link></li>
          <li><router-link to="/speakers">Speakers</router-link></li>
          <li><router-link to="/earphones">Earphones</router-link></li>
        </ul>
      </nav> -->

      <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg" id="cart">
        <path
          d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
          fill-rule="nonzero"
        />
      </svg>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const isOpen = ref(false);

onMounted(() => {
  isOpen.value = false;
});
</script>

<style lang="scss" scoped>
$color-2-deep-black: #141414;

.wording {
  color: white;
}

.burger,
.mobile-nav {
  display: none;
}

header {
  background-color: var(--clr-black);
  position: fixed;
  top: 0rem;
  left: 0;
  right: 0;
  z-index: 99;
}
header > div {
  max-width: var(--max-width);
  justify-content: space-between;
  padding: 1rem 0 1.5rem;
  margin: auto;
  border-bottom: 1px solid var(--clr-trans-border);
}

.pc-ul {
  gap: 3rem;
}

a {
  color: var(--clr-white);
  text-decoration: none;
}
a:hover {
  color: var(--clr-peach);
}
ul,
li {
  list-style: none;
}

svg {
  cursor: pointer;
  fill: var(--clr-white);
}
svg:hover {
  fill: var(--clr-peach);
}

@keyframes appear {
  from {
    left: -1000px;
    opacity: 0;
  }
  to {
    inset: 2.5rem 0 0 0;
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .burger,
  .mobile-nav {
    display: block;
  }
  .pc-nav {
    display: none;
  }
  .logos {
    gap: 1.5rem;
  }
  .mobile-nav {
    position: fixed;
    background-color: var(--clr-black);
    animation: appear 0.7s forwards;
    z-index: 99;
  }
  .mobile-ul {
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }
  .mobile-ul li {
    border: 1px solid var(--clr-border);
    padding: 2rem 0;
    width: 90%;
    text-align: center;
  }
  .mobile-ul li a {
    font-size: var(--h4-size);
  }
}
</style>
