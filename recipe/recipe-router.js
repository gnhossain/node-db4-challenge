const express = require('express');
const Recipedb = require('./recipe-model');
const router = express.Router();

router.get('/', (req, res)=>{
    Recipedb.getRecipes()
    .then(recipe =>{
        res.status(200).json(recipe);
    })
    .catch(err =>{
        res.status(500).json(err)
    })
})





module.exports = router;

