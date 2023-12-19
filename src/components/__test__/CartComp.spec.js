import { beforeEach, describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CartComp from "@/components/CartComp.vue";
import { createPinia, Pinia, setActivePinia } from "pinia";
import { useCartStore } from "@/store/cart";
import { ProductInterface } from "@/types";
import { CartItemInterface } from "@/types";

describe("CartComp", () => {
  let pinia;
  beforeEach(() => {
    pinia = createPinia();
    setActivePinia(pinia);
    const store = useCartStore();
    store.showCart = true;
  });

  it("increments count when + button is clicked", async () => {
    // Arrange
    // const pinia = createPinia();
    // const wrapper = mount(CartComp, {
    //   global: {
    //     plugins: [pinia],
    //   },
    // });

    const store = useCartStore();
    store.showCart = true;
    console.log("store.showCart: ", store.showCart);

    // Act
    const cateCnt = store.getCartItems().length;
    const product = {
      id: 1,
      name: "test",
      price: 100,
      image: "test",
      description: "test",
    };
    // 要 await 才能找到 button
    await store.addToCart(product, 3);

    // Assert
    expect(store.getCartItems().length).toBe(cateCnt + 1);
  });

  it("increments count when + button is clicked", async () => {
    // Arrange
    const pinia = createPinia();
    const wrapper = mount(CartComp, {
      global: {
        plugins: [pinia],
      },
    });
    const store = useCartStore();
    store.showCart = true;

    // Act
    await wrapper.find("button").trigger("click");
    console.log(wrapper.html());

    // Assert
    expect(store.getCartItems()[0].quantity).toBe(2);
  });
});
