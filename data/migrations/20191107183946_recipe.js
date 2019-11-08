
exports.up = function(knex) {return knex.schema
    .createTable('recipe', tbl => {
      tbl.increments();
      tbl.text('name', 255)
        .notNullable()
        .unique();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.text('name', 255)
         .notNullable()
         .unique();
        
    })
    .createTable('recipeToIngredients', tbl => {
        tbl.increments();
        tbl.decimal('quantity')
            .notNullable();
        tbl.integer('recipeId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipe')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        tbl.integer('ingredientsId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');


    })
};



exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipeToIngredients')
    .dropTableIfExists ('recipe')
    .dropTableIfExists('ingredients')
    
};
