var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = 6789;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(port, function(){
  console.log('Listening on port ' + port);
})
