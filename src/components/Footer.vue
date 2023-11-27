<template>
  <div>
    <footer>
      <div class="footer-wrapper">
        <div class="logo-n-links">
          <div class="footer-logo">
            <img src="../assets/shared/desktop/logo.svg" alt="logo" />
          </div>
          <div class="footer-links">
            <router-link to="/">HOME</router-link>
            <router-link to="/headphones">HEADPHONES</router-link>
            <router-link to="/speakers">SPEAKERS</router-link>
            <router-link to="/earphones">EARPHONES</router-link>
          </div>
        </div>
        <div class="footer-desc">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>
        <div class="footer-copyright">Copyright 2021. All Rights Reserved</div>
        <div class="footer-social">
          <img
            src="../assets/shared/desktop/icon-facebook.svg"
            alt="facebook"
          />
          <img src="../assets/shared/desktop/icon-twitter.svg" alt="twitter" />
          <img
            src="../assets/shared/desktop/icon-instagram.svg"
            alt="instagram"
          />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3rem;

  width: 100%;
  background-color: var(--clr-black);
  color: var(--clr-peach);
}

.logo-n-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 var(--page-padding);
}

img {
  object-fit: cover;
}
.footer-logo {
  height: 1.5rem;
  margin: 2rem 0;
}

.footer-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 0 var(--page-padding);

  color: var(--clr-white);
}
a {
  color: var(--clr-white);
}
a:hover {
  color: var(--clr-peach);
}

.footer-desc {
  max-width: 20rem;
  margin: 0 auto;
  text-align: center;
  color: var(--clr-white);
  font: 500 1rem "Manrope", sans-serif;
  opacity: 0.5;
}

.footer-copyright {
  color: var(--clr-white);
  font: 500 1rem "Manrope", sans-serif;
  opacity: 0.5;
  text-align: center;
}

.footer-social {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 7rem;
  margin: 2rem auto;
}

@media screen and (max-width: 768px) {
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3rem;

    width: 100%;
    background-color: var(--clr-black);
    color: var(--clr-peach);
  }

  .footer-logo {
    height: 1.5rem;
    margin: 2rem auto;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    justify-content: flex-start;

    color: var(--clr-white);
  }
  a {
    color: var(--clr-white);
  }
  a:hover {
    color: var(--clr-peach);
  }

  .footer-desc {
    max-width: 20rem;
    margin: 0 auto;
    text-align: center;
    color: var(--clr-white);
    font: 500 1rem "Manrope", sans-serif;
    opacity: 0.5;
  }

  .footer-copyright {
    color: var(--clr-white);
    font: 500 1rem "Manrope", sans-serif;
    opacity: 0.5;
    text-align: center;
  }

  .footer-social {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 7rem;
    margin: 2rem auto;
  }
}
</style>
