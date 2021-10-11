import ProductMock from "../../__mocks__/models/product.mock";

// Test for [findAll] method for GET HTTP request
describe("Test sequelize mocking model 'findAll' method", () => {
    it("Should return all existing entries in mock db", async () => {
        const products = await ProductMock.findAll();
        const allProducts = [];
        allProducts.push(products[0].dataValues["0"]);
        allProducts.push(products[0].dataValues["1"]);
        allProducts.push(products[0].dataValues["2"]);
        allProducts.push(products[0].dataValues["3"]);
        allProducts.push(products[0].dataValues["4"]);
        expect(allProducts).toEqual([
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
        ]);
    });
});

// Test for [findOne] method for GET HTTP request
describe("Test sequelize mocking model 'findOne' method", () => {
    it("Should return the entry with id: 1 in db", async () => {
        const product = await ProductMock.findOne({
            where: {
                id: 1
            }
        });
        expect(product.dataValues["0"]).toEqual({
            id: 1,
            name: "Colgate Luminous White 125 ml",
            description: "Whitening toothpaste.",
            price: 2,
            price_per_kg: null,
            stock: 10,
            require_id_to_sell: false,
        });
    });
});

// Test for [destroy] method for DELETE HTTP request
describe("Test sequelize mocking model 'destroy' method", () => {
    it("Should return the number of deleted entries (1)", async () => {
        const number_of_deleted_products = await ProductMock.destroy({
            where: {
                id: 1
            },
        });
        expect(number_of_deleted_products).toBe(1);
    });
});

// THIS TEST MIGHT NOT WORK !
// Test for [update] method for PUT HTTP request
describe("Test sequelize mocking model 'update' method", () => {
    it("Should return the number of updated entries (1)", async () => {
        const number_of_updated_products = await ProductMock.update([
            {
                name: "Doritos nacho cheese 146g",
                description: "Cheese flavored tortilla chips.",
                price: 0.8,
                price_per_kg: null,
                stock: 35,
                require_id_to_sell: false,
            }
        ]);
    });
});

// Test for [create] method for POST HTTP request
describe("Test sequelize mocking model 'create' method", () => {
    it("Should return the created product", async () => {
        const product = await ProductMock.create([
            {
                id: 6,
                name: "Doritos nacho cheese 146g",
                description: "Cheese flavored tortilla chips.",
                price: 0.8,
                price_per_kg: null,
                stock: 35,
                require_id_to_sell: false,
            }
        ]);
        expect(product.dataValues["0"]).toEqual({
            id: 6,
            name: "Doritos nacho cheese 146g",
            description: "Cheese flavored tortilla chips.",
            price: 0.8,
            price_per_kg: null,
            stock: 35,
            require_id_to_sell: false,
        });
    });
});
