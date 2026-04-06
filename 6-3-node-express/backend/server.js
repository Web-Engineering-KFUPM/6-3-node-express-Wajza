// Done 1: Import and Create express app instance
import express from "express";
const app = express(); 
// Done 1: Define server port
const PORT = 3000; 

// Done 4: Import and Apply CORS middleware
import cors from "cors";
app.use(cors());

// Done 5: Import and apply Morgan middleware
import morgan from "morgan";
app.use(morgan("dev"));

// Done 6.1: Create root route "/"
app.get("/", (req, res) => {
  res.send("Welcome!");
});

// Done 6.2: Create "/api/quote" route
import { getRandomQuote } from "./quotes.js";
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

// TODO 7: Start server using app.listen
