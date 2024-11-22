// Initiate the app
import app from "./app.js";
// Import sequelize
import { sequelize } from "./database/database.js";

// Import relations
import { applyAssociations } from "./database/associations.js";

// Main function
async function main() {
  try {
    await sequelize.sync({ force: false, alter: true });
    applyAssociations();
    // await seedDatabase(); // Comentar o eliminar esta línea
    app.listen(3000, () => {
      console.log("Server running on port", 3000);
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}

// Call the main function
main();
