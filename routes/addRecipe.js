const express = require('express');
const config = require('../config');
require('dotenv').config()
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const mongoose = require('mongoose');
require('../models/Recipe');
const Recipe = mongoose.model('Recipe');
const router = express.Router();

/* GET home page. */

router.get('/', (req, res, next) => {
    res.render('addRecipe');
});


require('../handlers/cloudinary')
const upload = require('../handlers/multer')


router.post('/', upload.single('image'), async(req, res) => {

  result = await cloudinary.uploader.upload(req.file.path)
  const recipe = new Recipe()
  recipe.name = req.body.name
  recipe.time = req.body.time
  recipe.ingredients = req.body.ingredients
  recipe.preparing = req.body.preparing
  recipe.description = req.body.description
  recipe.imageUrl = result.secure_url
  recipe.imageId = result.public_id
  await recipe.save((err) => {
    if (err){
      res.render('failure');
      return;
    }
    res.render('success');
  });

});

module.exports = router;
