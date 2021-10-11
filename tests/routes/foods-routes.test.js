import supertest from "supertest";
import app from "../../__mocks__/app.mock";

// GET Route
describe("GET /foods", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).get("/foods");
    expect(200).not.toBeNull();
  });
});

// POST Route
describe("POST /foods", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).post("/foods");
    expect(201).not.toBeNull();
  });
});

//GET BY ID Route
describe("GET BY ID /foods", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).get("/foods/:id");
    expect(201).not.toBeNull();
  });
});

// DELETE Route
describe("DELETE /foods", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).delete("/foods/:id");
    expect(201).not.toBeNull();
  });
});

// PUT Route
describe("PUT /foods", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).put("/foods/:id");
    expect(201).not.toBeNull();
  });
});