import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { createPinia, Pinia, setActivePinia } from "pinia";
import { useCartStore } from "@/store/cart";

describe("myStore", () => {
  let pinia;

  beforeEach(() => {
    pinia = createPinia();
    setActivePinia(pinia);
  });

  afterEach(() => {
    // pinia
    setActivePinia(null);
  });

  it("increments count", () => {
    // Arrange
    const store = useCartStore();

    // Act
    store.incrementCount();

    // Assert
    expect(store.count).toBe(1);
  });

  // Add more tests as needed
});
