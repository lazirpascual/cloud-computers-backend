const testHelper = require("../utils/for_testing");

describe("subtotal", () => {
  const productList = [
    {
      name: "Fractal Design Meshify C",
      price: 95.99,
      quantity: 3,
      category: "Case",
      imgPath: "https://i.imgur.com/b3ieUZw.jpg",
      imgPreview: "https://i.imgur.com/iOrrWY6.jpg",
      productPreview: "https://i.imgur.com/x4CmFCt.png",
    },
    {
      name: "AMD Ryzen 5 5800X",
      price: 499.99,
      quantity: 4,
      category: "Processors",
      imgPath: "https://i.imgur.com/xuuS84t.png",
      imgPreview: "https://i.imgur.com/m4Bppno.jpg",
      productPreview: "https://i.imgur.com/0szXExr.png",
    },
    {
      name: "Asus ROG STRIX B450-F GAMING",
      price: 112.93,
      quantity: 6,
      category: "Motherboard",
      imgPath: "https://i.imgur.com/SZ7jDgh.png",
      imgPreview: "https://i.imgur.com/1uoqG6H.jpg",
      productPreview: "https://i.imgur.com/lF134wO.png",
    },
  ];

  test("of a product with price of 95.99 and quantity of 3", () => {
    const result = testHelper.subtotal(productList[0]);
    expect(result).toBe(287.97);
  });

  test("of a product with price of 499.99 and quantity of 4", () => {
    const result = testHelper.subtotal(productList[1]);
    expect(result).toBe(1999.96);
  });

  test("of a product with price of 112.93 and quantity of 6", () => {
    const result = testHelper.subtotal(productList[2]);
    expect(result).toBe(677.58);
  });
});
