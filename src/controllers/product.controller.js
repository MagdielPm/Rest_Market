import Product from "../models/product";
import LoggerService from "../services/logger.service";
var logger = new LoggerService();
logger = logger.logger;

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
    // Log HTTP request
    logger.log({ level: "info", log_type: "request_info", verb: req.method, route: "/api/products/", query_parameters: req.query, headers: req.headers });
    logger.log({ level: "debug", log_type: "request_debug", verb: req.method, route: "/api/products/", body: req.body });
    try {
        const products = await Product.findAll();
        // Log db query
        logger.log({ level: "debug", log_type: "query", verb: req.method, route: "/api/products/", query: "SELECT * FROM Products" });
  
        if (!!products) {
            res.status(200).json({
            message: "All products fetched successfully.",
            data: products,
            });
            // Log method call
            logger.log({ level: "debug", log_type: "method_call", verb: req.method, route: "/api/products/", method_name: "res.status(200).json()", 
            method_parameters: {message: "All products fetched successfully.", data: products}});
        }
    } catch (error) {
        console.log(error);
        // Log error
        logger.log({ level: "error", log_type: "error", verb: req.method, error_message: "Something went wrong while fetching products.", stack_trace: error.stack });
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
        const product = await Product.findOne({
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
        else {
            res.status(500).json({
                message: "Could not find a product with that id.",
                data: {},
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
        else {
            res.status(500).json({
                message: "Could not delete a product with that id.",
                data: {},
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
        let product = await Product.findOne({
            attributes: ["name", "description", "price", "price_per_kg", "stock", "require_id_to_sell"],
            where: {
                id: id,
            },
        });
  
        if (!!product) {
            await product.update({
                id: id,
                name: name,
                description: description,
                price: price,
                price_per_kg: price_per_kg,
                stock: stock,
                require_id_to_sell: require_id_to_sell
            });
            
            return res.status(201).json({
                message: "Product updated successfully.",
                data: product,
            });
        }
        else {
            res.status(500).json({
                message: "Could not update a product with that id.",
                data: {},
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong while updating a product.",
            data: {},
        });
    }
  }