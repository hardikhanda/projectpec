const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken"); // Import the jwt module
const { createClient } = require('@supabase/supabase-js')
const app = express();
const path = require('path'); // Import the path module

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); //req.body

const supabase = createClient(
  'https://ebrwdeqmuoevehjvprib.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVicndkZXFtdW9ldmVoanZwcmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1NjQ5MTMsImV4cCI6MjAyMzE0MDkxM30.ffPJDAhL5f1h8QzK27oz7h71tUI2yEgFowdt3yOpPmU'
);

app.use(express.static(path.join(__dirname, '../client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query the database to check if the user exists
    const { data: user, error } = await supabase
      .from('user')
      .select('id, email, password, role') // Include user's role
      .eq('email', email)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }

    // Assuming the user is authenticated successfully, you might generate a token here
    const token = jwt.sign({ email: user.email, role: user.role }, 'your_secret_key');

    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// API endpoint to create a request
app.post('/requests', async (req, res) => {
  const { email, service, description } = req.body;

  try {
    // Query the database to get the user's role
    const { data: user, error } = await supabase
      .from('user')
      .select('id, email, role') // Include user's role
      .eq('email', email)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    // Assuming the user is authenticated successfully
    // Check if the user's role allows them to create a request
    if (user.role !== 'student') {
      throw new Error('Only students can create requests');
    }

    // Insert the request into the database
    const result = await supabase
      .from('requests')
      .insert({ user_id: user.id, service, description, approved: false })
      .single();

    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// API endpoint to approve a request
app.post('/requests/:requestId/approve', async (req, res) => {
  const { requestId, email } = req.params;

  try {
    // Query the database to get the user's role
    const { data: user, error } = await supabase
      .from('user')
      .select('id, email, role') // Include user's role
      .eq('email', email)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    // Assuming the user is authenticated successfully
    // Check if the user's role allows them to approve a request
    if (user.role !== 'staff') {
      throw new Error('Only staff members can approve requests');
    }

    // Update the request in the database to mark it as approved
    const result = await supabase
      .from('requests')
      .update({ approved: true })
      .eq('id', requestId)
      .single();

    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.listen(5000, () => {
  console.log("server has started on port 5000");
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const { createClient } = require('@supabase/supabase-js');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Initialize Supabase client
// const supabase = createClient('https://ebrwdeqmuoevehjvprib.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVicndkZXFtdW9ldmVoanZwcmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1NjQ5MTMsImV4cCI6MjAyMzE0MDkxM30.ffPJDAhL5f1h8QzK27oz7h71tUI2yEgFowdt3yOpPmU');

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());

// // Serve static files
// app.use(express.static(path.join(client, 'public')));

// // Route to serve the login form React component
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Route to handle user login


// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });