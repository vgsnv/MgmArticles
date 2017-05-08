var express = require('express');
var app = express();

app.get('/*', function (req, res) {
  res.json({"msg": "ok"});
});

app.listen(1481, function () {
  console.log('Example app listening on port 1481!');
});