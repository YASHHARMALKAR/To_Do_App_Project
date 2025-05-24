const express = require('express');
const app = express();
const port = 3000;

// Static files served from current folder (which is public)
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
