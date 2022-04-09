const { create, login } = require('../data/users.js');
const express = require('express');
const morgan = require('morgan');

//const app = express();
const router = express.Router();

router.post('/login', (req, res) => {
  if (login(req.body)) {
    console.log(`${req.body.username} is logged in`);
  }
  else {
    console.log('Something went wrong!');
  }
  res.redirect('/');
})

router.get('/signup', (req, res) => {
  create(req.body);
  res.redirect('/');
});

module.exports = router;