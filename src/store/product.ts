// Utilities
import { defineStore } from "pinia";
import datas from "@/data.json";

export const useProductStore = defineStore("product", {
  state: () => ({
    //
    getAllProduct() {
      console.log(datas);
      return datas;
    },
    getProductById(slug: string) {
      return datas.find((data) => data.slug === slug);
    },

    getProduct(category: string, slug: string) {
      return datas.filter(
        (data) => data.category === category && data.slug === slug
      );
    },

    getHeadphones() {
      return datas.filter((data) => data.category === "headphones");
    },
    getEarphones() {
      return datas.filter((data) => data.category === "earphones");
    },
    getSpeakers() {
      return datas.filter((data) => data.category === "speakers");
    },
  }),
});
