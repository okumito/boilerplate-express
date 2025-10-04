let express = require('express');
let app = express();

app.get("/", function(req, res) {
    res,send('hello World')
});

app.listen(3000, function() {
    console.log('servidor iniciado en puerto 3000')
});
































 module.exports = app;
