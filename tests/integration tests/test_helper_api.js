const CartItem = require("../../models/cartitem");

const initialItems = [
  {
    name: "Kingston HyperX FURY DDR3",
    price: 47.53,
    quantity: 1,
    category: "Memory",
    imgPath: "https://i.imgur.com/RO9kJ7y.png",
    imgPreview: "https://i.imgur.com/QvVzIf6.jpg",
    productPreview: "https://i.imgur.com/K81Tm08.png",
  },
  {
    name: "Asus TUF Gaming X570-Plus (Wi-Fi)",
    price: 189.99,
    quantity: 1,
    category: "Motherboard",
    imgPath: "https://i.imgur.com/SxWzVAx.png",
    imgPreview: "https://i.imgur.com/2pPKJV9.jpg",
    productPreview: "https://i.imgur.com/G6yBbK2.png",
  },
  {
    name: "Nvidia GeForce RTX 3090",
    price: 1499.99,
    quantity: 1,
    category: "Video Card",
    imgPath: "https://i.imgur.com/xex37JS.jpg",
    imgPreview: "https://i.imgur.com/gCuegUp.jpg",
    productPreview: "https://i.imgur.com/GGc48yD.png",
  },
  {
    name: "Lian Li PC-011 Dynamic",
    price: 139.99,
    quantity: 1,
    category: "Case",
    imgPath: "https://i.imgur.com/txxg1H2.jpg",
    imgPreview: "https://i.imgur.com/mQFgwsd.jpg",
    productPreview: "https://i.imgur.com/6cRCmi4.png",
  },
];

const nonExistingId = async () => {
  const item = new CartItem({
    name: "Lian Li PC-011 Dynamic",
    price: 139.99,
    quantity: 1,
    category: "Case",
    imgPath: "https://i.imgur.com/txxg1H2.jpg",
    imgPreview: "https://i.imgur.com/mQFgwsd.jpg",
    productPreview: "https://i.imgur.com/6cRCmi4.png",
  });
  await item.save();
  await item.remove();

  return item._id.toString();
};

const productsInDb = async () => {
  const items = await CartItem.find({});
  return items.map((item) => item.toJSON());
};

module.exports = {
  initialItems,
  nonExistingId,
  productsInDb,
};
