import { Router } from "express";
import {
  createNewCustomer,
  deleteCustomerById,
  getAllCustomers,
  getCustomerById,
  updateACustomer,
} from "../controllers/customers.controller";
import { verifyMyActiveToken } from "../middleware/middleware";

const router = Router();

// We have to define our routes for the entity
// with the next structure api/employeers
router.use(verifyMyActiveToken);
router.post("/", createNewCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.delete("/:id", deleteCustomerById);
router.put("/:id", updateACustomer);

export default router;
