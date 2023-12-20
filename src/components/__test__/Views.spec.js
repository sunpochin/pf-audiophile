import EarphoneView from "@/views/EarphoneView.vue";
import HeadphonesView from "@/views/HeadphonesView.vue";
import HomeView from "@/views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";
import SpeakersView from "@/views/SpeakersView.vue";

import { describe, it, expect } from "vitest";

describe("Best!", () => {
  it("1 + 1 should be 2", () => {
    expect(1 + 1).toBe(2);
  });

  // const isNumeric = (val) => {};
  const isNumeric = (value) => !isNaN(value - parseFloat(value));

  expect(isNumeric(1)).toBe(true);
  expect(isNumeric("100")).toBe(true);
  expect(isNumeric(null)).toBe(false);
  expect(isNumeric(NaN)).toBe(false);
});
