// Import packages
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";

// Set up express
const app = express();
const port = 3000;

// Set up middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

/* Create the routes */
app.get("/", async (req, res) => {
  res.render("This is the get route");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});