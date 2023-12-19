export interface ProductInterface {
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

export interface CartItemInterface {
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
