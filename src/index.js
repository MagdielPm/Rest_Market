import product from "./api/product/product";

product.listen(3000, () => {
  console.log("Running at localhost:3000");
});
