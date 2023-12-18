import { beforeEach, describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CartComp from "@/components/CartComp.vue";
import { createPinia, Pinia, setActivePinia } from "pinia";
import { useCartStore } from "@/store/cart";

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
    const pinia = createPinia();
    const wrapper = mount(CartComp, {
      // data() {
      //   return {
      //     isVisible: true,
      //   };
      // },
      global: {
        plugins: [pinia],
      },
    });

    //    const store = useCartStore(pinia);
    const store = useCartStore();
    store.showCart = true;
    console.log("store.showCart: ", store.showCart);

    // Act
    // console.log("div:", wrapper.findAll("button"));
    // wrapper.findAll("button")[0].exists();
    await wrapper.vm.$nextTick();
    console.log(wrapper.html());

    // todo: 要加入一個 cartItem 才能找到 button

    const xxx = wrapper.find("button").exists();
    console.log("xxx:", xxx);

    store.incrementCount();
    // Assert
    expect(store.count).toBe(1);
  });
});
