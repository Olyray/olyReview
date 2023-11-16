// Import packages
import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import pg from "pg";
import axios from "axios";

config()

console.log(process.env.databasePassword);
// Set up express
const app = express();
const port = 3000;

// Set up middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

/* Create the routes */
app.get("/", async (req, res) => {
  res.json({
    book: "A Game of Thrones",
    rating: 5,
    review: "I really enjoyed this",
  });
})



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});