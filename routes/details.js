const express = require('express');
const router = express.Router();
const config = require('../config');
const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');

require('../models/Recipe');
const Recipe = mongoose.model('Recipe');

/* GET home page. */
 router.get('/:id', async (req, res) => {
   try{
     const recipes = await Recipe.find({_id:req.params.id})
     // console.log(recipes);
     res.render('details', {recipes});

   } catch (error) {
     res.status(500)
   }
 });

module.exports = router;
