const express = require('express');
const app = express();
const api = require('./server/routes/api');
const bodyParser = require('body-parser');
const PORT = 3002;

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use('/', api);

app.listen(PORT, function () {
  console.log(`Running on port ${PORT}`);
});