import { Router } from "express";
import { getAllUsers } from "../controllers/users.controller";

const router = Router();

router.get("/login", getAllUsers);

export default router;
