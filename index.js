const express = require("express");
const app = express();
const cors = require("cors");
const multer = require('multer');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const ussdRoutes = require("./routes/ussd");


var options = {
	inflate: true,
	limit: '100kb',
	type: 'multipart/form-data',
};

let port = process.env.PORT || 3001;
app.use(morgan("tiny"));

// app.use(bodyParser.raw(options));
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use("/api/ussd", ussdRoutes);

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.type('text/plain')
  res.send(`Mathaata!: ${err}`);
});

app.listen(port, function () {
	console.log('Server starting on port 3001');
});
