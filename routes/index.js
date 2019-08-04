const express = require('express');
const router = express.Router();
const config = require('../config');
const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
require('../models/Recipe');
const Recipe = mongoose.model('Recipe');


/* GET home page. */

router.get('/index', (req, res, next) => {
  Recipe.find({}).sort({date: -1}).exec((err, data)=>{
    res.render('index', {data});
  });
});


module.exports = router;
