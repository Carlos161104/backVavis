// Initialize the Express configuration
import express from "express";
const app = express();

// Routes imports
import addressesRoutes from "./routes/addresses.routes.js";
import clientsRoutes from "./routes/clients.routes.js";
import guidesRoutes from "./routes/guides.routes.js";

// Middlewares
app.use(express.json());

// Use of routes
app.use("/addresses", addressesRoutes);
app.use("/clients", clientsRoutes);
app.use("/guides", guidesRoutes);

// Export the app
export default app;
