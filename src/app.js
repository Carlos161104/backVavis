// Initialize the Express configuration
import express from "express";
const app = express();

// Routes imports
import addressesRoutes from "./routes/addresses.routes.js";

// Middlewares
app.use(express.json());

// Use of routes
app.use("/addresses", addressesRoutes);

// Export the app
export default app;
