<template>
  <div>
    <header @wheel.prevent @touchmove.prevent @scroll.prevent>
      <div class="flex-align">
        <div class="logos flex-align">
          <svg
            class="burger"
            @click="toggleBurger()"
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#FFF" fill-rule="evenodd">
              <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
            </g>
          </svg>
          <svg
            @click="goHome()"
            width="143"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.363 20.385c1.63 0 3.087-.537 4.237-1.47l.414.994h3.739V5.853h-3.605l-.495 1.087c-1.16-.958-2.637-1.51-4.29-1.51C3.069 5.43 0 8.527 0 12.88c0 4.37 3.07 7.505 7.363 7.505zm.646-4.287c-1.811 0-3.143-1.37-3.143-3.206 0-1.824 1.32-3.195 3.143-3.195 1.812 0 3.144 1.37 3.144 3.195 0 1.836-1.332 3.206-3.144 3.206zm17.535 4.287c4.148 0 6.91-2.562 6.91-6.495V5.868h-4.836v7.811c0 1.47-.782 2.357-2.074 2.357-1.292 0-2.09-.873-2.09-2.357V5.868h-4.836v8.022c0 3.933 2.778 6.495 6.926 6.495zm16.328.015c1.636 0 3.093-.557 4.235-1.52l.456 1.044h3.58V.792H45.36v5.591a6.551 6.551 0 00-3.489-.976c-4.309 0-7.378 3.12-7.378 7.489 0 4.368 3.07 7.504 7.378 7.504zm.647-4.287c-1.812 0-3.143-1.381-3.143-3.217 0-1.835 1.331-3.216 3.143-3.216 1.812 0 3.143 1.38 3.143 3.216 0 1.836-1.331 3.217-3.143 3.217zM57.976 4.109V0h-4.763v4.109h4.763zm.037 15.815V5.868h-4.837v14.056h4.837zm10.097.46c4.563 0 7.872-3.146 7.872-7.488 0-4.357-3.31-7.489-7.872-7.489-4.579 0-7.873 3.132-7.873 7.489 0 4.342 3.294 7.489 7.873 7.489zm0-4.348c-1.764 0-3.029-1.281-3.029-3.14 0-1.858 1.265-3.139 3.029-3.139 1.763 0 3.028 1.292 3.028 3.14 0 1.858-1.265 3.139-3.028 3.139zM82.998 25v-5.534a6.56 6.56 0 003.423.934c4.293 0 7.362-3.125 7.362-7.504 0-4.38-3.069-7.489-7.362-7.489-1.669 0-3.155.578-4.31 1.578l-.605-1.117h-3.29V25h4.782zm2.776-8.887c-1.812 0-3.143-1.37-3.143-3.217s1.331-3.217 3.143-3.217c1.811 0 3.143 1.37 3.143 3.217 0 1.846-1.343 3.217-3.143 3.217zm15.065 3.811v-7.506c0-1.804.912-2.843 2.376-2.843 1.262 0 1.83.826 1.83 2.447v7.902h4.837V11.46c0-3.644-2.071-6.008-5.295-6.008-1.4 0-2.714.507-3.748 1.34v-6h-4.837v19.132h4.837zM117.574 4.11V0h-4.763v4.109h4.763zm.037 15.815V5.868h-4.837v14.056h4.837zm7.878 0V.792h-4.836v19.132h4.836zm9.851.461c3.523 0 6.364-2.004 7.352-5.212h-4.813c-.465.823-1.409 1.318-2.539 1.318-1.527 0-2.55-.834-2.866-2.446H142.9c.063-.435.1-.858.1-1.282 0-4.123-3.134-7.356-7.66-7.356-4.407 0-7.626 3.17-7.626 7.478 0 4.295 3.245 7.5 7.626 7.5zm2.896-9.021h-5.677c.391-1.396 1.372-2.163 2.781-2.163 1.46 0 2.471.758 2.896 2.163z"
              fill-rule="nonzero"
            />
          </svg>
        </div>
        <nav class="pc-nav">
          <ul class="flex-center pc-ul">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/headphones">Headphones</router-link></li>
            <li><router-link to="/speakers">Speakers</router-link></li>
            <li><router-link to="/earphones">Earphones</router-link></li>
          </ul>
        </nav>
        <nav class="mobile-nav" v-if="isOpen">
          <ul class="flex-center mobile-ul">
            <li @click="closeNav"><router-link to="/">Home</router-link></li>
            <li @click="closeNav">
              <router-link to="/headphones">Headphones</router-link>
            </li>
            <li @click="closeNav">
              <router-link to="/speakers">Speakers</router-link>
            </li>
            <li @click="closeNav">
              <router-link to="/earphones">Earphones</router-link>
            </li>
          </ul>
        </nav>

        <svg
          width="23px"
          height="20px"
          viewBox="0 0 24 24"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          @click="LoginLogout()"
        >
          <g transform="translate(0 -1028.4)">
            <path
              d="m12 0c-0.405 0-0.805 0.060326-1.188 0.15625-0.224 0.05678-0.44 0.13135-0.656 0.21875-0.083 0.03401-0.1679 0.05534-0.2498 0.09375-0.034 0.01583-0.06 0.04594-0.0937 0.0625-0.2032 0.10058-0.4021 0.21704-0.5937 0.34375-0.027 0.0174-0.0671 0.01339-0.0938 0.03125-0.0563 0.03864-0.101 0.08419-0.1562 0.12495-0.1569 0.1126-0.3216 0.216-0.4688 0.3438-0.1342 0.1207-0.2494 0.2724-0.375 0.4062-0.4251 0.4359-0.7936 0.8971-1.0938 1.4376-0.5154 0.9034-0.9002 1.9205-1.0624 2.9687-0.0783-0.0165-0.1501-0.0224-0.2188 0-0.5251 0.171-0.6545 1.1685-0.3125 2.2187 0.2007 0.6163 0.5346 1.1015 0.875 1.375 0.4573 1.7778 1.4257 3.2598 2.6875 4.1878v1.031l-1 1-2 1c-1.6173 0.801-3.2284 1.605-4.8438 2.406-0.89513 0.54-1.2415 1.6-1.1562 2.594 0.041664 0.626-0.18448 1.427 0.4375 1.844 0.5909 0.304 1.2959 0.106 1.9375 0.156 1.8766-0.001 3.7484 0 5.625 0 2.669 0.001 5.331 0 8 0 2.367 0 4.727 0.004 7.094 0 0.768-0.054 0.981-0.865 0.906-1.5 0.014-0.932 0.069-1.976-0.656-2.688-0.592-0.602-1.434-0.84-2.156-1.25-1.061-0.525-2.128-1.037-3.188-1.562l-2-1-1-1v-1.031c1.262-0.928 2.23-2.41 2.688-4.1878 0.34-0.2736 0.674-0.7588 0.874-1.375 0.342-1.0502 0.213-2.0477-0.312-2.2187-0.069-0.0224-0.14-0.0165-0.219 0-0.162-1.0482-0.547-2.0653-1.062-2.9687-0.3-0.5405-0.669-1.0017-1.094-1.4376-0.126-0.1338-0.241-0.2855-0.375-0.4062-0.006-0.0055-0.025 0.0055-0.031 0-0.392-0.3499-0.827-0.61894-1.281-0.84375-0.115-0.05622-0.227-0.10854-0.344-0.15625-0.084-0.03401-0.165-0.06426-0.25-0.09375-0.255-0.08848-0.516-0.17356-0.782-0.21875-0.02-0.003405-0.042 0.003148-0.062 0-0.249-0.039144-0.495-0.06525-0.75-0.0625z"
              transform="translate(0 1028.4)"
              fill="#34495e"
            />
            <path
              d="m0 1051.4c0.026419 0.3 0.12651 0.6 0.4375 0.8 0.5909 0.3 1.2959 0.1 1.9375 0.2h5.625 8 7.094c0.576-0.1 0.842-0.5 0.906-1h-24z"
              fill="#2c3e50"
            />
          </g>
        </svg>

        <svg
          width="23"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          id="cart"
          @click="ToggleCart()"
        >
          <path
            d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
            fill-rule="nonzero"
          />
        </svg>
      </div>
    </header>
    <CartComp />
  </div>
</template>

<script setup>
import CartComp from "@/components/CartComp.vue";
import { useCartStore } from "@/store/cart";
import { ref } from "vue";

const isOpen = ref(false);
const cartStore = useCartStore();
const goHome = () => {
  router.push("/");
};

const toggleBurger = () => {
  isOpen.value = !isOpen.value;
};

const closeNav = () => {
  cartStore.toggleCart();
};

const ToggleCart = () => {
  // console.log("ToggleCart");
  cartStore.toggleCart();
};

const LoginLogout = () => {
  console.log("LoginLogout");
};
</script>


<style scoped>
header {
  padding: 0 var(--page-padding);

  background-color: var(--clr-black);
  position: fixed;
  top: 0;
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
.burger,
.mobile-nav {
  display: none;
}
.pc-ul {
  gap: 3rem;
}
svg {
  cursor: pointer;
  fill: var(--clr-white);
}
svg:hover {
  fill: var(--clr-peach);
}
a {
  color: var(--clr-white);
}
a:hover {
  color: var(--clr-peach);
}

@keyframes appear {
  from {
    left: -1000px;
    opacity: 0;
  }
  to {
    inset: 3.5rem 0 0 0;
    opacity: 1;
  }
}

@media screen and (max-width: 1440px) {
  header > div {
    padding: 1rem var(--page-padding);
  }
}
@media screen and (max-width: 1024px) {
  header > div {
    padding: 1rem var(--page-padding);
  }
  .pc-ul {
    gap: 2rem;
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
