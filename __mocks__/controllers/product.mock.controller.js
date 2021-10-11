// Create a new mock Product with POST
export async function createNewProduct(req, res) {
    const newProduct = {
        id: 1,
        name: "Colgate Luminous White 125 ml",
        description: "Whitening toothpaste.",
        price: 2,
        price_per_kg: null,
        stock: 10,
        require_id_to_sell: false,
    };
    return res.status(201).json({ data: newProduct });
}

// Get all mock products in Products table with GET
export async function getAllProducts(req, res) {
    const allProducts = [
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
    ];
    return res.status(200).json({ data: allProducts });
}

// Get a mock product by id with GET
export async function getProductById(req, res) {
    const id = req.params.id;
    const productById = {
        id: id,
        name: "Vanilla Coca-Cola",
        description: "Vanilla flavored Coca-Cola soda. Limited edition.",
        price: 1.50,
        price_per_kg: null,
        stock: 30,
        require_id_to_sell: false,
    };
    return res.status(200).json({ data: productById });
}

// Delete a mock product by id with DELETE
export async function deleteProductById(req, res) {
    const id = req.params.id;
    return res.status(200).json({ id: id });
}

// Update a mock product by id with PUT
export async function updateAProduct(req, res) {
    const updatedProduct = {
        id: 3,
        name: "Oranges",
        description: "Bulk fresh oranges.",
        price: null,
        price_per_kg: 3.98,
        stock: 150,
        require_id_to_sell: false,
    };
    return res.status(201).json({ data: updatedProduct });
}
