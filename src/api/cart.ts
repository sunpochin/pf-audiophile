import { req } from "./https";

const cart = {
  // 取得登入者的購物車
  apiGetCartData() {
    return req("get", "/cart/show", null);
  },
  // 新增
  apiOverwriteCartData(data: { cartItems: [] }) {
    return req("post", "/cart/overwrite", data);
  },
  // //移除購物車項目
  // apiDeleteCartData(data: { courseId: string }) {
  //   return req("delete", "/goldFlow/userCartCourse", data);
  // },
  // //讀取有效優惠券
  // apiGetCoupon() {
  //   return req("get", "goldFlow/validCoupon");
  // },
};

export default cart;
