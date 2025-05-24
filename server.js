const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, ".")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
