import { req } from "./https";
import { CartItemInterface } from "@/types";

const cart = {
  // 取得登入者的購物車
  apiGetCartData() {
    return req("get", "/cart/show", null);
  },
  // overwrite cart
  apiOverwriteCartData(data: [] | CartItemInterface[]) {
    return req("post", "/cart/overwrite", data);
  },
};

export default cart;
