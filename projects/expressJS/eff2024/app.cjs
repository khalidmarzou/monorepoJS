const express = require("express");
const cors = require("cors");
const { port } = require("./config/env.cjs");
const expertRoutes = require("./routes/expertRoutes.cjs");

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

app.use("/", expertRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
