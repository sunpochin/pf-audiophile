<template>
  <footer>
    <div class="footer-wrapper">
      <div class="logo-n-link">
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
      <div class="desc-n-social">
        <div class="footer-desc">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>
        <div class="footer-copyright">Copyright 2023. All Rights Reserved</div>
      </div>
      <div class="footer-social">
        <img src="../assets/shared/desktop/icon-facebook.svg" alt="facebook" />
        <img src="../assets/shared/desktop/icon-twitter.svg" alt="twitter" />
        <img
          src="../assets/shared/desktop/icon-instagram.svg"
          alt="instagram"
        />
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  background-color: var(--clr-black);
  padding: 3.5rem 0;
}
.logo-n-link {
  display: flex;
  justify-content: space-between;
  position: relative;
  max-width: var(--max-width);
  margin: auto;
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

.desc-n-social {
  max-width: var(--max-width);

  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer-desc {
  max-width: 30%;
  text-align: left;
  color: var(--clr-white);
  font: 500 1rem "Manrope", sans-serif;
  opacity: 0.5;
}

.footer-copyright {
  margin-top: 2rem;
  text-align: left;
  color: var(--clr-white);
  font: 500 1rem "Manrope", sans-serif;
  opacity: 0.5;
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

  .desc-n-social {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    // padding: 0 var(--page-padding);
  }
  .footer-desc {
    max-width: 100%;
    margin: 2rem auto;
    text-align: center;
  }

  .logo-n-link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 var(--page-padding);
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
