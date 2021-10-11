import express, { json } from "express";

// Import all the mock routes here below 👇🏽
import employeeMockRoutes from "./routes/employees.mock";
import productMockRoutes from "./routes/product.mock";

const app = express();

// Middlewares for
// You can run the project and see the response
// in the console because we use Morgan for that
app.use(json());

// Put your routes here to listen in localhost:3000 👻
// Remember, the endpoins have to be in plural
app.use("/api/employees", employeeMockRoutes);
app.use("/api/products", productMockRoutes);

export default app;
