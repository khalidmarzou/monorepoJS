const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/env.cjs");
const contactRoutes = require("./routes/contactRoutes.cjs");

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

app.use("/", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
