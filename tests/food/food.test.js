import supertest from "supertest";
import product from "../../src/api/food/food";

describe("GET /foods", () => {
  it("The response should be not null", async () => {
    const response = await supertest(product).get("/food");
    expect(response.body).not.toBeNull();
  });
});
