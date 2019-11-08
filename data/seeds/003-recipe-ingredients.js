
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeToIngredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipeToIngredients').insert([
        {quantity: 2.4, recipeId:1, ingredientsId:2},
        {quantity: 2.7, recipeId:2, ingredientsId:1},
        {quantity: 2.9, recipeId:1, ingredientsId:3},
      
      ]);
    });
};
