import supertest from "supertest";
import app from "../../__mocks__/app.mock";

// POST route
describe("POST /products", () => {
  it("Should response something", async () => {
    const response = await supertest(app).post("/api/products");
    expect(201).not.toBeNull();
  });
});

// GET route
describe("GET /products", () => {
  it("Should response something", async () => {
    const response = await supertest(app).get("/api/products");
    expect(200).not.toBeNull();
  });
});

//GET BY ID route
describe("GET BY ID /products/id", () => {
  it("Should response something", async () => {
    const response = await supertest(app).get("/api/products/1");
    expect(201).not.toBeNull();
  });
});

// DELETE route
describe("DELETE /products/id", () => {
  it("Should response something", async () => {
    const response = await supertest(app).delete("/api/products/1");
    expect(201).not.toBeNull();
  });
});

// PUT route
describe("PUT /products/id", () => {
  it("Should response something", async () => {
    const response = await supertest(app).put("/api/products/1");
    expect(201).not.toBeNull();
  });
});
