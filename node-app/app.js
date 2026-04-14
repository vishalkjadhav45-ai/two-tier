const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = 3000;

// Route
app.get('/', (req, res) => {
  res.json({ message: "“Deployed a 2-tier Docker app via Jenkins with isolated containers communicating.”" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
