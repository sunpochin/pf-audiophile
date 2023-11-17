// Utilities
import { defineStore } from "pinia";
import datas from "@/data.json";

export const useProductStore = defineStore("product", {
  state: () => ({
    //
    getProduct() {
      console.log("getProduct");
      console.log(datas);
      return datas;
    },

    getHeadphones() {
      console.log("getHeadphones");
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
