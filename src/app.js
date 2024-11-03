// Initialize the Express configuration
import express from "express";
const app = express();

// Initialize CORS
import cors from "cors";
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

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
import suppliersRoutes from "./routes/suppliers.routes.js";
import trackInventoryRoutes from "./routes/trackinventory.routes.js";
import userRoutes from "./routes/users.routes.js";
import quotationprodRoutes from "./routes/quotationproduct.routes.js";

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
app.use("/suppliers", suppliersRoutes);
app.use("/trackinventory", trackInventoryRoutes);
app.use("/users", userRoutes);
app.use("/quotationproduct", quotationprodRoutes);

// Export the app
export default app;
