import express from "express";

const product = express();

product.get("/products", (req, res) => {
  res.send([{ productId: "1", product: "iPhone 12", storage: "164G" }]);
});

export default product;
