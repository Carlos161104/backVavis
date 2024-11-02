// Initiate the app
import app from "./app.js";
// Import sequelize
import { sequelize } from "./database/database.js";

// Main function
async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(3000, () => {
      console.log("Server running on port", 3000);
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}

// Call the main function
main();
