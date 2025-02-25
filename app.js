const express = require('express');
const app = express();
const path = require('path');

const session = require('express-session');

app.use(session({secret: 'thisisnotgoodsecret'}));

// Set up the view engine to use EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render the home.ejs file
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/viewcount', (req, res) => {
     res.send("You have viewed this page X times")
})

const port = 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});