import Best from "@/components/Best.vue";
import Footer from "@/components/Footer.vue";
import HeroBlock from "@/components/HeroBlock.vue";
import NavBar from "@/components/NavBar.vue";
import CategoriesComp from "@/components/CategoriesComp.vue";
import ProductBox from "@/components/ProductBox.vue";
import ProductComp from "@/components/ProductComp.vue";
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
