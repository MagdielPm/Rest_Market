import Product from "../models/product";

// Create a new Product with POST
export async function createNewProduct(req, res) {
    const { name, description, price, price_per_kg, stock, require_id_to_sell } = req.body;
    try {
        let newProduct = await Product.create(
            {
                name: name,
                description: description,
                price: price,
                price_per_kg: price_per_kg,
                stock: stock,
                require_id_to_sell: require_id_to_sell
            },
            {
                fields: ["name", "description", "price", "price_per_kg", "stock", "require_id_to_sell"],
            }
        );
  
        if (!!newProduct) {
            return res.status(201).json({
            message: "Product created successfully.",
            data: newProduct,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong while creating a Product.",
            data: {},
        });
    }
}

// Get all the products in the Product table with GET
export async function getAllProducts(req, res) {
    try {
        const products = await Product.findAll();
  
        if (!!products) {
            res.status(200).json({
            message: "All products fetched successfully.",
            data: products,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong while fetching products.",
            data: {},
        });
    }
}

//Get a product by id with GET
export async function getProductById(req, res) {
    try {
        const { id } = req.params;
        const product = await Customer.findOne({
            where: {
                id: id,
            },
        });
  
        if (!!product) {
            res.status(200).json({
                message: "Product fetched successfully.",
                data: product,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong while fetching a product.",
            data: {},
        });
    }
}

// Delete a product by id with DELETE
export async function deleteProductById(req, res) {
    try {
        const { id } = req.params;
        const product = await Product.destroy({
            where: {
                id: id,
            },
        });
  
        if (!!product) {
            res.status(200).json({
                message: "Product deleted successfully.",
                data: product,
            });
        }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong while deleting a product.",
        data: {},
      });
    }
}

// Update a product by id with PUT
export async function updateAProduct(req, res) {
    const { id } = req.params;
    const { name, description, price, price_per_kg, stock, require_id_to_sell } = req.body;
    try {
        let products = await Product.findAll({
            attributes: ["name", "description", "price", "price_per_kg", "stock", "require_id_to_sell"],
            where: {
                id: id,
            },
        });
  
        if (!!products) {
            products.forEach(async (product) => {
                await product.update({
                    name: name,
                    description: description,
                    price: price,
                    price_per_kg: price_per_kg,
                    stock: stock,
                    require_id_to_sell: require_id_to_sell
                });
            });
        } 
  
        return res.status(201).json({
            message: "Product updated successfully.",
            data: products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong while updating a product.",
            data: {},
        });
    }
  }