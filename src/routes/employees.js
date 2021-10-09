import { Router } from "express";
import {
  createNewEmployee,
  deletEmployeeById,
  getAllEmployees,
  getEmployeeById,
  updateAnEmployee,
} from "../controllers/employees.controller";

const router = Router();

// We have to define our routes for the entity
// with the next structure api/employeers
router.post("/", createNewEmployee);
router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.delete("/:id", deletEmployeeById);
router.put("/:id", updateAnEmployee);

export default router;
