import express, { json } from "express";
import morgan from "morgan";

// Import all routes here below 👇🏽
import employeerRoutes from "./routes/customers";

const app = express();

//Middlewares for the project
// You can run the project and see the response
// in the console because we use Morgan for that
app.use(morgan("dev"));
app.use(json());

//Put your routes here to listen in localhost:3000 👻
// Remember, the endpoins have to be in plural
app.use("/api/employees", employeerRoutes);
app.use("/api/customers", employeerRoutes);

export default app;
