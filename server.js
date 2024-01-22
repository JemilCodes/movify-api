const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Cors
const cors = require("cors");
app.use(cors());

// Global Use
app.use(express.json());

// Welcome Route
app.get("/", (req, res) => {
  res.send("Welcome to the Movify API!");
});

// Routes
const mainRoute = require("./routes");
app.use("/movify/api/v1", mainRoute);

// Middlewares
const notFoundMiddleware = require("./middleware/notFound");
app.use(notFoundMiddleware);

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (err) {
    console.log("Server not starting", err);
  }
};

start();
