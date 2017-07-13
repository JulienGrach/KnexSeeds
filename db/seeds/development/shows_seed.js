/*
Ce fichier est crée par la commande : "knex seed:make shows_seed --env development".
On aura un dossier seed par environnement et un fichier par table.

Il s'agit simplement ici de pouvoir entrer des données dans la base au démarrage de notre programme
comme on le ferait à la main pour tester l'activité de ce dernier sur une base de donnée non vide.

 "$: knex seed:run --env development" va ensuite appliquer les functions que l'on aura exporté non pas
  dans 'module' mais dans 'seed'.
*/



exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('things').del() //On del par sécurité
    .then(function () {
      // Inserts seed entries
      return knex('things').insert({
              name: 'star wars iv',
              channel: 'NBC',
              genre: 'sci-fi',
              rating: 9,
              explicit: false
      });
    }).then(function () {
          return knex('things').insert({
              name: 'Game of Thrones',
              channel: 'HBO',
              genre: 'Fantasy',
              rating: 5,
              explicit: true
          });
      }).then(function () {
          return knex('things').insert({
              name: 'South Park',
              channel: 'Comedy Central',
              genre: 'Comedy',
              rating: 4,
              explicit: true
          });
      }).then(function () {
          return knex('things').insert({
              name: 'Mad Men',
              channel: 'AMC',
              genre: 'Drama',
              rating: 3,
              explicit: false
          });
      });

};
