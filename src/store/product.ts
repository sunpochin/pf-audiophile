// Utilities
import { defineStore } from "pinia";
import datas from "@/data.json";

export const useProductStore = defineStore("product", {
  state: () => ({
    //
    getProduct() {
      console.log("getProduct");
      // return "getProduct";
      // console.log(datas);
      return datas;
    },
  }),
});
