/*Dans ce fichier crée à la main, on va définir notre environement (plutôt on va passer
la variable globale qui défini notre environnement),
on va configurer knex et exporter notre knex déjà configuré.*/

var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];

module.exports = require('knex')(config);
