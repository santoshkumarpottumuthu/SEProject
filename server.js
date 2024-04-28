const express = require('express');
const path = require('path');
const app = express();

// Replace '<app-name>' with your Angular application's directory name
app.use(express.static(__dirname + '/dist/Cinema-E-booking-System'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/Cinema-E-booking-System/index.html'));
});

// Use process.env.PORT for Heroku deployment, fallback to 8081 for local development
const port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});
