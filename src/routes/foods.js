import { Router } from "express";
import {
  createNewFood,
  deletFoodById,
  getAllFoods,
  getFoodById,
  updateAFood,
} from "../controllers/foods.controller";

const router = Router();

// We have to define our routes for the entity
// with the next structure api/foods
router.post("/", createNewFood);
router.get("/", getAllFoods);
router.get("/:id", getFoodById);
router.delete("/:id", deletFoodById);
router.put("/:id", updateAFood);

export default router;
