const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");

app.get("/", (req, res) => {
  res.send("Junior full stack olmak gün 1.");
});

app.listen(port, () => {
  console.log(`Port : ${port}`);
});

app.use(morgan("dev"));
app.use(cors());
app.use("/users", userRoutes);
