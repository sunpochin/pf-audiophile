import { beforeEach, describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";
import { Pinia } from "pinia";
import { useCartStore } from "@/store/cart";
import CartComp from "@/components/CartComp.vue";

const createComponent = (pinia) => {
  return mount(CartComp, {
    global: {
      plugins: [pinia],
    },
  });
};

describe("CartComp", () => {
  let pinia;

  beforeEach(() => {
    pinia = createPinia();
  });

  it("renders message from store", () => {
    // Arrange
    // const wrapper = createComponent(pinia);
    // // Act & Assert
    // expect(wrapper.text()).toContain("Hello"); // 假设 getMessage 返回 'Hello'
  });

  it("interacts with the store", async () => {
    // Arrange
    // const wrapper = createComponent(pinia);
    const store = useCartStore(pinia);

    // Act
    const items = await store.getCartItems();

    // Assert
    expect(items).toEqual([]);
    // expect(wrapper.text()).toContain("New Message");
  });
});
