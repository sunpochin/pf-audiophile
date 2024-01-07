import { req } from "./https";

const cart = {
  // 取得登入者的購物車
  apiGetCartData() {
    return req("get", "/goldFlow/userCart", null);
  },
  // 新增
  apiPostCartData(data: { courseId: string }) {
    return req("post", "/goldFlow/userCartCourse", data);
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
