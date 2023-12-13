// Utilities
import { ref } from "vue";
import { defineStore } from "pinia";
// import { ProductInterface } from "@/components/ProductInterface";

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
  description: string;
  price: number;
  features: string;
  quantity: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const cartItems = ref([] as CartItemInterface[]);

export const useCartStore = defineStore("cart", {
  state: () => ({
    toggleCart() {
      showCart.value = !showCart.value;
      console.log("toggleCart: ", showCart.value);
    },
    getCartValue() {
      console.log("getCartValue: ", showCart.value);
      return showCart.value;
    },

    getCartItems() {
      console.log("getCartItems: ", cartItems.value);
      return cartItems.value;
    },

    addToCart(product: ProductInterface, quantity: number) {
      const foundProduct = cartItems.value.find(
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
        cartItem.description = product.description;
        cartItem.price = product.price;
        cartItem.features = product.features;
        cartItem.image = product.image;
        cartItem.quantity = quantity;
        console.log("push cartItem:", cartItem);
        cartItems.value.push(cartItem);
      }
    },
  }),
});
