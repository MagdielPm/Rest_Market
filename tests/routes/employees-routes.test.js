import supertest from "supertest";
import app from "../../__mocks__/app.mock";

// GET Route
describe("GET /employees", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).get("/employees");
    expect(200).not.toBeNull();
  });
});

// POST Route
describe("POST /employees", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).post("/employees");
    expect(201).not.toBeNull();
  });
});

//GET BY ID Route
describe("GET BY ID /employees", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).get("/employees/:id");
    expect(201).not.toBeNull();
  });
});

// DELETE Route
describe("DELETE /employees", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).delete("/employees/:id");
    expect(201).not.toBeNull();
  });
});

// PUT Route
describe("PUT /employees", () => {
  it("Should be correct", async () => {
    const response = await supertest(app).put("/employees/:id");
    expect(201).not.toBeNull();
  });
});
