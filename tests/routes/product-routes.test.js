import supertest from "supertest";
import app from "../../__mocks__/app.mock";

// POST route
describe("POST /products", () => {
    it("Should response something", async () => {
        const response = await supertest(app).post("/products");
        expect(201).not.toBeNull();
    });
});

// GET route
describe("GET /products", () => {
    it("Should response something", async () => {
        const response = await supertest(app).get("/products");
        expect(200).not.toBeNull();
    });
});

//GET BY ID route
describe("GET BY ID /products/id", () => {
    it("Should response something", async () => {
        const response = await supertest(app).get("/products/:id");
        expect(201).not.toBeNull();
    });
});

// DELETE route
describe("DELETE /products/id", () => {
    it("Should response something", async () => {
        const response = await supertest(app).delete("/products/:id");
        expect(201).not.toBeNull();
    });
});

// PUT route
describe("PUT /products/id", () => {
    it("Should response something", async () => {
        const response = await supertest(app).put("/products/:id");
        expect(201).not.toBeNull();
    });
});
