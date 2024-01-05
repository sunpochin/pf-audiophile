<template>
  <div>
    <header @wheel.prevent @touchmove.prevent @scroll.prevent>
      <div class="flex-align">
        <v-icon class="burger" @click="toggleBurger">{{ "mdi-menu" }}</v-icon>
        <div class="logos flex-align">
          <img @click="goHome()" src="src/assets/shared/desktop/logo.svg" />
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

        <p class="userName">{{ userName }}</p>

        <v-icon class="loginLogout" @click="loginLogout">
          {{ loggedin ? "mdi-login" : "mdi-logout" }}
        </v-icon>
        <!-- <v-icon size="20" color="#020202">
          <PersonSharp @click="ToggleCart()" />
        </v-icon> -->
        <v-icon size="20" color="#ffffff">
          <Cart @click="ToggleCart()" />
        </v-icon>
      </div>
    </header>
    <CartComp />
  </div>
</template>

<script setup>
import { ArrowRightAltSharp } from "@vicons/material";
import { Cart, PersonSharp } from "@vicons/ionicons5";
import logoSvg from "@/assets/shared/desktop/logo.svg";
import CartComp from "@/components/CartComp.vue";
import { useCartStore } from "@/store/cart";
import { useAuthStore } from "@/store/auth";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const isOpen = ref(false);

const cartStore = useCartStore();
const authStore = useAuthStore();
const userName = computed(() => {
  console.log("computed username: ", authStore.getUserName());
  return authStore.getUserName();
});
const loggedin = computed(() => {
  return authStore.getLoggedin();
});
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

const loginLogout = () => {
  console.log("loginLogout");
  if (loggedin.value) {
    console.log("logout");
    authStore.logout();
  } else {
    console.log("login");
    router.push("/login");
  }
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

.loginLogout {
  color: var(--clr-red);
}
.userName {
  color: var(--clr-red);
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
