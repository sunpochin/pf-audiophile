// Utilities
import { ref, reactive } from "vue";
import { defineStore } from "pinia";

const showCart = ref(false);

interface ProductInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

interface CartItemInterface {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const cartData = reactive({
  cartItems: [] as CartItemInterface[],
});

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  ).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const saveCartData = () => {
  // Save cartData to cookies
  console.log("saveCartData");
  setCookie("cartData", JSON.stringify(cartData), 365); // Cookie expires in 365 days
};

export const useCartStore = defineStore("cart", {
  state: () => ({
    toggleCart() {
      showCart.value = !showCart.value;
    },
    getShowCart() {
      return showCart.value;
    },

    getCookie(name: any) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(";")?.shift();
      }
    },

    readCookie() {
      const savedCartData = this.getCookie("cartData");
      console.log("cartComp cartItems: ", savedCartData);

      if (savedCartData) {
        // If there is saved data, parse and set it to the reactive cartData
        Object.assign(
          cartData.cartItems,
          JSON.parse(savedCartData as string)["cartItems"]
        );
        console.log("cartComp cartItemssss: ", cartData.cartItems);
        for (let i = 0; i < cartData.cartItems.length; i++) {
          console.log("cart item: ", cartData.cartItems[i]);
        }
      }
    },

    getCartItems() {
      console.log("getCartItems: ", cartData.cartItems);
      return cartData.cartItems;
    },

    getTotalPrice() {
      let totalPrice = 0;
      cartData.cartItems.forEach((item) => {
        console.log(
          "item.price: ",
          item.price,
          "item.quantity: ",
          item.quantity
        );
        totalPrice += item.price * item.quantity;
      });
      return totalPrice;
    },

    addToCart(product: ProductInterface, quantity: number) {
      const foundProduct = cartData.cartItems.find(
        (item) => item.id === product.id
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
        cartData.cartItems.push(cartItem);
      }
      saveCartData();
    },
  }),
});
