import supertest from "supertest";
import app from "../../__mocks__/app.mock";

// Test for [createNewProduct] mock function
describe("Create a new product with POST", () => {
    it("Should return the new product", async () => {
        const response = await supertest(app).post("/api/products");
        expect(response.body).toEqual({
            data: {
                id: 1,
                name: "Colgate Luminous White 125 ml",
                description: "Whitening toothpaste.",
                price: 2,
                price_per_kg: null,
                stock: 10,
                require_id_to_sell: false,
            }
        });
    });
});

// Test for [getAllProducts] mock function
describe("Get all products with GET", () => {
    it("Should return all mock products", async () => {
        const response = await supertest(app).get("/api/products");
        expect(response.body).toEqual({
            data: [
                {
                    id: 1,
                    name: "Colgate Luminous White 125 ml",
                    description: "Whitening toothpaste.",
                    price: 2,
                    price_per_kg: null,
                    stock: 10,
                    require_id_to_sell: false,
                },
                {
                    id: 2,
                    name: "Vanilla Coca-Cola",
                    description: "Vanilla flavored Coca-Cola soda. Limited edition.",
                    price: 1.50,
                    price_per_kg: null,
                    stock: 30,
                    require_id_to_sell: false,
                },
                {
                    id: 3,
                    name: "Oranges",
                    description: "Bulk fresh oranges.",
                    price: null,
                    price_per_kg: 3.98,
                    stock: 150,
                    require_id_to_sell: false,
                },
                {
                    id: 4,
                    name: "Some prescripted drug",
                    description: "Medical prescription and id card required to sell this product.",
                    price: 45,
                    price_per_kg: null,
                    stock: 5,
                    require_id_to_sell: true,
                },
                {
                    id: 5,
                    name: "Froot Loops cereal 410g",
                    description: "A colorful cereal.",
                    price: 4,
                    price_per_kg: null,
                    stock: 30,
                    require_id_to_sell: false,
                }
            ]
        });
    });
});

// Test for [getProductById] mock function
describe("Get a product by id with GET", () => {
    it("Should return the product with id: 2", async () => {
        const response = await supertest(app).get("/api/products/2");
        expect(response.body).toEqual({
            data: {
                id: "2",
                name: "Vanilla Coca-Cola",
                description: "Vanilla flavored Coca-Cola soda. Limited edition.",
                price: 1.50,
                price_per_kg: null,
                stock: 30,
                require_id_to_sell: false,
            }
        });
    });
});

// Test for [deleteProductById] mock function
describe("Delete a product by id with DELETE", () => {
    it("Should return the id of the deleted product", async () => {
        const response = await supertest(app).delete("/api/products/1");
        expect(response.body).toEqual({ data: "1" });
    });
});

// Test for [updateAProduct] mock function
describe("Update a product by id with PUT", () => {
    it("Should return the updated product", async () => {
        const response = await supertest(app).put("/api/products/3");
        expect(response.body).toEqual({
            data: {
                id: 3,
                name: "Oranges",
                description: "Bulk fresh oranges.",
                price: null,
                price_per_kg: 3.98,
                stock: 150,
                require_id_to_sell: false,
            }
        });
    });
});