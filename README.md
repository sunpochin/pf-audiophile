# 切版作品：

## （又是）電商網站

- Demo site: https://pf-audiophile.vercel.app/
- 這是一個由 Frontend Mentor 網站購買的 figma 設計稿，製作而成的 vue3 切版作品，有著大量的設計稿切版工作。
- 目前做了 mobile 跟 desktop 兩個版本的響應式網頁設計(RWD)，tablet 稿還沒有實做。
- 用了可重複運用的元件 components 來顯示不同的商品。
- 並使用 Vue-Router, Pinia 技術。
- 使用 vitest 來做單元測試，使用 Github actions 來做 CI/CD，在 coveralls 上面可以看到測試的覆蓋率是： [![Coverage Status](https://coveralls.io/repos/github/sunpochin/pf-audiophile/badge.svg?branch=main)](https://coveralls.io/github/sunpochin/pf-audiophile?branch=main)
- 購物車功能：我幫專案加上了一個 Node.js backend: https://github.com/sunpochin/audiophile-backend, 所以現在可以在這網站註冊、登入帳號，並且每個帳號分別擁有不同的購物車內容了。他是一個簡單的 Full-stack App. 了，Yay!

## 尚未完成

- 結帳功能

![Design preview for the Audiophile e-commerce website coding challenge](./preview.jpg)
