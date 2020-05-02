import * as mongoose from "mongoose";
import populateDatabase from "../scripts/populateDatabase";
import populateDatabaseProducts from "../scripts/populateDatabase-products";
import app from "./app";

const url = process.env.MONGODB_URI || "mongodb://localhost:27017/fivebyone_database";
const port = process.env.PORT || 9000;

(async () => {
  // Connect to the database
  await mongoose.connect(url, { useNewUrlParser: true });
  // Populate database with sample data if it's empty
  await populateDatabase();
  await populateDatabaseProducts();
  // Start express App
  app.listen(port);
  console.log(`App listening on port ${port}...`);
})();
