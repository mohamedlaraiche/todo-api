const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./databases/db");
const router = require("./routes/routes");
const app = express();

connectDB();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

app.use("/api/todos", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server has been connected on ${PORT} !`);
});
