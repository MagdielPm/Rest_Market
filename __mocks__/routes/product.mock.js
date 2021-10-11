import { Router } from "express";
import {
    createNewProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateAProduct
} from "../controllers/product.mock.controller";

const router = Router();

// We have to define our mock routes for the entity
// with the next structure: api/employeers
router.post("/", createNewProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProductById);
router.put("/:id", updateAProduct);

export default router;