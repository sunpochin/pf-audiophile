// Utilities
import { reactive } from "vue";
import { defineStore } from "pinia";
import { ProductInterface, CartItemInterface } from "@/types";
import type { AxiosResponse } from "axios";
import CartAPI from "@/api/cart.js";

export const useCartStore = defineStore("cart", () => {
  const cartData = reactive({
    cartItems: [] as CartItemInterface[],
  });
  const visitorCartData = reactive({
    cartItems: [] as CartItemInterface[],
  });

  const saveCartData = async () => {
    console.log("saveCartData", cartData);
    if (isLogin()) {
      const result = (await CartAPI.apiOverwriteCartData(
        cartData.cartItems
      )) as AxiosResponse;
      if (result.data.isSuccess) {
        // notification.success({
      } else {
        // notification.error({
      }
      console.log("result", result.data);
    } else {
      console.log("訪客 add cart");
      console.log("cartData.cartItems", cartData.cartItems);
    }
  };

  const getCartItems = () => {
    console.log("getCartItems", cartData);
    if (isLogin()) {
      return cartData.cartItems;
    } else {
      console.log("訪客 load cart: ", visitorCartData.cartItems);
      return visitorCartData.cartItems;
    }
  };

  const fetchCartItems = async () => {
    console.log("fetch", cartData);
    if (isLogin()) {
      cartData.cartItems = [];
      const result = (await CartAPI.apiGetCartData()) as AxiosResponse;
      if (result.data.isSuccess) {
        // notification.success({
      } else {
        // notification.error({
      }
      console.log("getCartItems result", result.data);
      return result.data;
    } else {
      console.log("訪客 load cart: ", visitorCartData.cartItems);
      return visitorCartData.cartItems;
    }
  };

  const removeAll = () => {
    if (isLogin()) {
      cartData.cartItems = [];
      saveCartData();
    } else {
      visitorCartData.cartItems = [];
    }
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    getCartData().cartItems.forEach((item) => {
      console.log("item.price: ", item.price, "item.quantity: ", item.quantity);
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const isLogin = () => {
    if (localStorage.getItem("accessToken")) {
      return true;
    } else {
      return false;
    }
  };

  const addToCart = (product: ProductInterface, quantity: number) => {
    const foundProduct = getCartData().cartItems.find(
      (item) => item.id == product.id
    );
    if (foundProduct) {
      // Product already in cart, you can show a message here
      foundProduct.quantity += quantity;
      console.log("Found product:", foundProduct);
    } else {
      // Product not in cart, you can add it to the cartItems array here
      const cartItem = {} as CartItemInterface;
      cartItem.id = product.id;
      cartItem.name = product.name;
      cartItem.price = product.price;
      cartItem.image = product.image;
      cartItem.quantity = quantity;
      console.log("push cartItem:", cartItem);
      getCartData().cartItems.push(cartItem);
    }
    // if (isLogin() === true) {
    //   cartData.cartItems = data.cartItems;
    // } else {
    //   visitorCartData.cartItems = data.cartItems;
    // }
    saveCartData();
    console.log("訪客 addToCart", visitorCartData.cartItems);
  };

  const getCartData = () => {
    if (isLogin()) {
      return cartData;
    } else {
      return visitorCartData;
    }
  };
  const increment = async (id: string) => {
    getCartData().cartItems.forEach((item: any) => {
      if (item.id == id) {
        console.log("id: ", id, "item: ", item);
        if (item.quantity < 9) {
          item.quantity++;
        }
      }
    });
    saveCartData();
  };

  const decrement = async (id: string) => {
    getCartData().cartItems.forEach((item: any) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          item.quantity--;
        }
      }
    });
    saveCartData();
  };

  return {
    increment,
    decrement,
    saveCartData,
    removeAll,
    getCartItems,
    fetchCartItems,
    getTotalPrice,
    addToCart,
    getCartData,
  };
});
