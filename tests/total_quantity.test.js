const testHelper = require("../utils/for_testing");

describe("total quantity", () => {
  const emptyList = [];
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

  test("of an emptyList", () => {
    const result = testHelper.totalQuantity(emptyList);
    expect(result).toBe(0);
  });

  test("of a list with 13 items", () => {
    const result = testHelper.totalQuantity(productList);
    expect(result).toBe(13);
  });
});
