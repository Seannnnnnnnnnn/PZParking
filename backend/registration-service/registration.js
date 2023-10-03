// registartion service


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Registration endpoint
app.post('/register', (req, res) => {
  // Extract registration details from the request body
  const { username, email, password } = req.body;

  // TODO: Save registration details to the inventory DB

  // Respond with a success message
  res.json({ success: true, message: 'User registered successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
