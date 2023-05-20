const express = require('express');
const app = express();

// Define your routes and middleware here

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
