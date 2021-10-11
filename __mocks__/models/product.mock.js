import MockDBConnection from "../mock/mock_db";

// Product model mock
const Product = MockDBConnection.define("Products", [
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

export default Product;