import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";

// Import all routes here below 👇🏽
import employeerRoutes from "./routes/employees";
import customerRoutes from "./routes/customers";
import foodRoutes from "./routes/foods";
import productRoutes from "./routes/product";
import usersRoutes from "./routes/users";

const app = express();

//Middlewares for the project
// You can run the project and see the response
// in the console because we use Morgan for that
app.use(morgan("dev"));
app.use(json());
app.use(cors());

//Put your routes here to listen in localhost:3000 👻
// Remember, the endpoins have to be in plural

app.use("/api/users", usersRoutes);
app.use("/api/employees", employeerRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/products", productRoutes);

export default app;
