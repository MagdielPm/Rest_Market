import { Router } from "express";
import {
  createNewEmployee,
  deleteEmployeeById,
  getAllEmployees,
  getEmployeeById,
  updateAnEmployee,
} from "../controllers/employees.controller";
import { verifyMyActiveToken } from "../middleware/middleware";

const router = Router();

// We have to define our routes for the entity
// with the next structure api/employeers
router.use(verifyMyActiveToken);
router.post("/", createNewEmployee);
router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.delete("/:id", deleteEmployeeById);
router.put("/:id", updateAnEmployee);

export default router;
