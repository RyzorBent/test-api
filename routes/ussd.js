const express = require("express");
const multer = require('multer');
const router = express.Router();
const upload = multer();

router.get("/hello", function(req, res, next) {
  res.type('text/plain');
  res.send(
		`Hello, Your Mobile No is: ${req.query.ussd_msisdn}\n1. Enter Name:\n2. Exit`
	);
});

router.get('/hello/name', (req, res, next) => {
  console.log(req.query)
  res.type('text/plain');
  res.send(
		`Your Name In UPPER CASE:\n${req.query.ussd_response_upperName.toUpperCase()}\n0. Exit`
	);
}
)
router.get('/', function (req, res, next) {
  res.type('text/plain').send(`Welcome To Tshepo's USSD`);
});

router.get('/bye', (req, res, next) => {
  res.type('text/plain').send('Thank you for using our platform buddy :)');
})
router.delete("/:id", function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id)
    .then(todo => res.send(todo))
    .catch(err => next(err));
});

module.exports = router;
