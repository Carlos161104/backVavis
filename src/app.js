// Initialize the Express configuration
import express from "express";
const app = express();

// Routes imports
import addressesRoutes from "./routes/addresses.routes.js";
import clientsRoutes from "./routes/clients.routes.js";
import guidesRoutes from "./routes/guides.routes.js";
import inventoriesRoutes from "./routes/inventories.routes.js";
import ordersRoutes from "./routes/orders.routes.js";
import packagesRoutes from "./routes/packages.routes.js";
import productRoutes from "./routes/products.routes.js";
import quotationsRoutes from "./routes/quotations.routes.js";
import sellsRoutes from "./routes/sells.routes.js";

// Middlewares
app.use(express.json());

// Use of routes
app.use("/addresses", addressesRoutes);
app.use("/clients", clientsRoutes);
app.use("/guides", guidesRoutes);
app.use("/inventories", inventoriesRoutes);
app.use("/orders", ordersRoutes);
app.use("/packages", packagesRoutes);
app.use("/products", productRoutes);
app.use("/quotations", quotationsRoutes);
app.use("/sells", sellsRoutes);

// Export the app
export default app;
