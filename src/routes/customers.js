import { Router } from "express";
import {
  createNewCustomer,
  deleteCustomerById,
  getAllCustomers,
  getCostumerById,
  updateACustomerr,
} from "../controllers/customers.controller";
import { verifyMyActiveToken } from "../middleware/middleware";

const router = Router();

// We have to define our routes for the entity
// with the next structure api/employeers
router.use(verifyMyActiveToken);
router.post("/", createNewCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getCostumerById);
router.delete("/:id", deleteCustomerById);
router.put("/:id", updateACustomerr);

export default router;
