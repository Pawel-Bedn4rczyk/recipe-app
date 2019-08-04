const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  time: {
    type: Number
  },
  imageUrl: {
    type: String
  },
  imageId: {
    type: String
  },
  ingredients: {
    type: String
  },
  preparing: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: Date, default: Date.now
  }
})


module.exports = mongoose.model('Recipe', recipeSchema)
