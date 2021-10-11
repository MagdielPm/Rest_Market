import { Router } from "express";
import {
  createNewFood,
  deleteFoodById,
  getAllFoods,
  getFoodById,
  updateAFood,
} from "../controllers/foods.mock.controller";

const router = Router();

// We have to define our mock routes for the entity
// with the next structure api/food
router.post("/", createNewFood);
router.get("/", getAllFoods);
router.get("/:id", getFoodById);
router.delete("/:id", deleteFoodById);
router.put("/:id", updateAFood);

export default router;