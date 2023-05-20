const express = require('express');

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'employmeet';

// Create a new MongoClient
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB server
client.connect(function (err) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected successfully to MongoDB');

  const db = client.db(dbName);

  // Perform database operations
  // ...

  client.close();
});

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
