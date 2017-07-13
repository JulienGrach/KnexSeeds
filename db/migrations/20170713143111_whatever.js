/*
C'est ici que l'on défini notre schéma (1 fichier par table).
Sur "$: knex migrate:make whatever", knex crée ce fichier qui doit définir notre schéma.


Il a par défaut deux fonctions vide qu'on va alimenter:
        La première détermine a quoi doit ressembler la table en base de données.
        La seconde permet de détruire la table

Qu'importe celle des trois bases de données appelée (prod, dev ou test),
elles seront up (construites) et down (vidées) de la même manière.

 "$: knex migrate:latest --env test" va ensuite appliquer toutes les migrations qui ne sont pas run
 à la database correspondant à l'argument --env et grâce au fichier knex.js.
*/


exports.up = function(knex, Promise) {
    knex.schema.createTable('things', function(table){
        table.increments();
        table.string('name').notNullable().unique();
        table.string('channel').notNullable();
        table.string('genre').notNullable();
        table.integer('rating').notNullable();
        table.boolean('explicit').notNullable();
    }).then(function(err){
        console.log(err)
    });

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('things');
};
