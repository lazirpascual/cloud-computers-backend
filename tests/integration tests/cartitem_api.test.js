const supertest = require("supertest");
const mongoose = require("mongoose");
const helper = require("./test_helper_api");
const app = require("../../app");
const api = supertest(app);

const CartItem = require("../../models/cartitem");

beforeEach(async () => {
  await CartItem.deleteMany({});
  await CartItem.insertMany(helper.initialItems);
});

describe("when there are initially some items saved to cart", () => {
  test("items are returned as json", async () => {
    await api
      .get("/api/cartitems")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("all items are returned", async () => {
    const response = await api.get("/api/cartitems");

    expect(response.body).toHaveLength(helper.initialItems.length);
  });

  test("a specific item is within the returned items", async () => {
    const response = await api.get("/api/cartitems");

    const productNames = response.body.map((r) => r.name);

    expect(productNames).toContain("Kingston HyperX FURY DDR3");
  });
});

describe("viewing a specific item in the cart", () => {
  test("succeeds with a valid id", async () => {
    const itemsAtStart = await helper.productsInDb();

    const itemToView = itemsAtStart[0];

    const resultItem = await api
      .get(`/api/cartitems/${itemToView.id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const processedItemToView = JSON.parse(JSON.stringify(itemToView));

    expect(resultItem.body).toEqual(processedItemToView);
  });

  test("fails with statuscode 404 if item does not exist", async () => {
    const validNonexistingId = await helper.nonExistingId();

    await api.get(`/api/cartitems/${validNonexistingId}`).expect(404);
  });

  test("fails with statuscode 400 if id is invalid", async () => {
    const invalidId = "5a3d5da59070081a82a3445";

    await api.get(`/api/cartitems/${invalidId}`).expect(400);
  });
});

describe("adding a new item to the cart", () => {
  test("succeeds with valid data", async () => {
    const newItem = {
      name: "Nvidia GeForce RTX 3090",
      price: 1499.99,
      quantity: 1,
      category: "Video Card",
      imgPath: "https://i.imgur.com/xex37JS.jpg",
      imgPreview: "https://i.imgur.com/gCuegUp.jpg",
      productPreview: "https://i.imgur.com/GGc48yD.png",
    };

    await api
      .post("/api/cartitems")
      .send(newItem)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const itemsAtEnd = await helper.productsInDb();
    expect(itemsAtEnd).toHaveLength(helper.initialItems.length + 1);

    const productNames = itemsAtEnd.map((n) => n.name);
    expect(productNames).toContain("Nvidia GeForce RTX 3090");
  });

  test("fails with status code 400 if data is invalid", async () => {
    const newItem = {
      name: "Nvidia GeForce RTX 3090",
      price: 1499.99,
    };

    await api.post("/api/cartitems").send(newItem).expect(400);

    const itemsAtEnd = await helper.productsInDb();

    expect(itemsAtEnd).toHaveLength(helper.initialItems.length);
  });
});

describe("deleting an item in the cart", () => {
  test("succeeds with status code 204 if id is valid", async () => {
    const itemsAtStart = await helper.productsInDb();
    const itemToDelete = itemsAtStart[0];

    await api.delete(`/api/cartitems/${itemToDelete.id}`).expect(204);

    const itemsAtEnd = await helper.productsInDb();

    expect(itemsAtEnd).toHaveLength(helper.initialItems.length - 1);

    const productNames = itemsAtEnd.map((r) => r.name);

    expect(productNames).not.toContain(itemToDelete.name);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
