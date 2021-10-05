import supertest from "supertest";
import product from "../../src/api/product/product";

describe("GET /products", () => {
  it("The response should be not null", async () => {
    const response = await supertest(product).get("/product");
    expect(response.body).not.toBeNull();
  });
});
