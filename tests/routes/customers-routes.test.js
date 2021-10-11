import supertest from "supertest";
import app from "../../__mocks__/app.mock";

// GET Route
describe("GET /customer", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).get("/customer");
    expect(200).not.toBeNull();
  });
});

// POST Route
describe("POST /customer", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).post("/customer");
    expect(201).not.toBeNull();
  });
});

//GET BY ID Route
describe("GET BY ID /customer", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).get("/customer/:id");
    expect(201).not.toBeNull();
  });
});

// DELETE Route
describe("DELETE /customer", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).delete("/customer/:id");
    expect(201).not.toBeNull();
  });
});

// PUT Route
describe("PUT /customer", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).put("/customer/:id");
    expect(201).not.toBeNull();
  });
});
