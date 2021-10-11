import { Router } from "express";
import {
  createNewCustomer,
  deleteCustomerById,
  getAllCustomers,
  getCustomerById,
  updateACustomer,
} from "../controllers/customers.mock.controller";

const router = Router();

// We have to define our mock routes for the entity
// with the next structure api/employeers
router.post("/", createNewCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.delete("/:id", deleteCustomerById);
router.put("/:id", updateACustomer);

export default router;
