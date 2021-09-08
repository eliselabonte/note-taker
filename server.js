// import necessary node stuff
const express = require('express');
const path = require('path');
const fs = require('fs');

// create unique id for each note
const uuid = require('./helpers/uuid');

// import middleware
const { clog } = require('./middleware/clog.js')

const PORT = process.env.PORT || 3001;

const app = express;

// use middleware to log requests in console
app.request(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
