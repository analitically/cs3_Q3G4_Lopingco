const express = require('express');
const app = express();
const port = 3015;

// Set the view engine to Handlebars
app.set('view engine', 'hbs');

// Serve static files from the "public" folder
app.use(express.static('public'));

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/', (req, res) => {
  res.render('index', { title: 'Hello, World!', message: 'Application for the absolute GOATs club with Rajveer and Aldrich!' });
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { studentID } = req.body;
  const { name } = req.body;
  const { bday } = req.body;
  const { email } = req.body;
  const { mobile } = req.body;
  const { grade } = req.body;
  const { IE } = req.body;
  const { club } = req.body;
  const { reason } = req.body;
  res.render('result', { title: 'Form Submission', name , studentID, bday, email, mobile, grade, IE, club, reason });
});

app.post('/reset', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
