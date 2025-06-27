const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send({hi : 'Current node express for June 2025' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);