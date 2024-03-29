const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

//handle uncaughtException
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION Shutting Down Server", err.name, err.message);
  process.exit(1);
});

// configure the port
dotenv.config({ path: "backend/config/config.env" });
//connect database
connectDB();

app.listen(3000, () => {
  console.log("Server is running on port " + 3000);
});
