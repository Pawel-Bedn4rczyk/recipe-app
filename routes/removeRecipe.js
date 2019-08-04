const express = require('express');
const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');



const Recipe = mongoose.model('Recipe');
require('../models/Recipe');
const config = require('../config');
const router = express.Router();

/* GET home page. */

router.get('/', async (req, res) => {
  try{
    const recipes = await Recipe.find({})
    res.render('removeRecipe', {recipes});

  } catch (error) {
    res.status(500)
  }
});

router.get('/:id',(req,res,next) =>{
  Recipe.findByIdAndRemove({_id:req.params.id}).then((recipe) =>{
  cloudinary.uploader.destroy(recipe.imageId, function(error,result) {
    // console.log(result, error)
  });
});
  res.render('success');
})


module.exports = router;
