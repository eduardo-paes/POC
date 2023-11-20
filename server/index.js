const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

// Use the cors middleware to enable CORS
app.use(cors());

// Define a route that returns sample values
app.get("/sample", (req, res) => {
  const sampleData = {
    message: "Mensagem do servidor!",
  };
  res.json(sampleData);
  console.log("Sample data sent!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
