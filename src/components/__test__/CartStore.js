import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import component from "@/store/cart.ts";

it("should ???", () => {
  // Arrange
  const wrapper = mount(component);

  // Act
  wrapper.trigger("click");

  // Assert
  expect(wrapper.emitted()).toHaveProperty("clicked");
});
