const db = require ('../data/db-config');
module.exports = {
    getRecipes,
    // getShoppingList,
    // getInstructions,
}
function getRecipes(){
    return db('recipe')
}

// function getShoppingList(id){
//     return db('recipe')
//     .where ({id})
//     .first();
// }

