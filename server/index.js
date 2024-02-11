const express = require("express");
const cors = require("cors");
const { createClient } = require('@supabase/supabase-js')
const app = express();
const path = require('path'); // Import the path module

app.use(cors());
app.use(express.json()); //req.body

const supabase = createClient(
  'https://ebrwdeqmuoevehjvprib.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVicndkZXFtdW9ldmVoanZwcmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1NjQ5MTMsImV4cCI6MjAyMzE0MDkxM30.ffPJDAhL5f1h8QzK27oz7h71tUI2yEgFowdt3yOpPmU'
)

app.use(express.static(path.join(__dirname, '../client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});