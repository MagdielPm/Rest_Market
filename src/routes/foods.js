import { Router } from "express";
import {
  createNewFood,
  deleteFoodById,
  getAllFoods,
  getFoodById,
  updateAFood,
} from "../controllers/foods.controller";
import { verifyMyActiveToken } from "../middleware/middleware";

const router = Router();

// We have to define our routes for the entity
// with the next structure api/foods
router.use(verifyMyActiveToken);
router.post("/", createNewFood);
router.get("/", getAllFoods);
router.get("/:id", getFoodById);
router.delete("/:id", deleteFoodById);
router.put("/:id", updateAFood);

export default router;
