<template>
  <header>
    <div class="flex-align wording">
      <div class="logos flex-align">
        <svg
          class="burger"
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
      <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg" id="cart">
        <path
          d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
          fill-rule="nonzero"
        />
      </svg>
    </div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
$color-2-deep-black: #141414;

.wording {
  color: white;
}

header {
  background-color: var(--vt-clr-black);
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
  border-bottom: 1px solid var(--vt-clr-trans-border);
}

.pc-ul {
  gap: 3rem;
}

a {
  color: var(--vt-clr-white);
  text-decoration: none;
}
a:hover {
  color: var(--vt-clr-peach);
}
ul,
li {
  list-style: none;
}

svg {
  cursor: pointer;
  fill: var(--vt-clr-white);
}
svg:hover {
  fill: var(--vt-clr-peach);
}

// .div1 {
//   justify-content: center;
//   width: 100%;
//   background-color: $color-2-deep-black;
// }

// .back {
//   width: 1109.83px;
//   height: 96px;
//   background-color: $color-2-deep-black;
//   display: flex;
//   justify-content: space-between;
//   align-items: left;
//   color: white;
// }

// .tabsfour {
//   display: flex;
//   justify-content: space-between;
//   width: 429px;
//   height: 2500px;
//   color: white;
//   text-transform: uppercase;

//   letter-spacing: 2px;
//   font: bold 13px Manrope, sans-serif;
//   margin-top: 15px;
// }

// .div-12 {
//   background-color: rgba(255, 255, 255, 0.2);
//   align-self: stretch;
//   display: flex;
//   margin-top: 36px;
//   width: 100%;
//   height: 1px;
//   flex-direction: column;
// }
</style>
