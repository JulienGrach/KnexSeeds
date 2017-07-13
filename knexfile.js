/*
 On définit des "états", 3 objets différents contenant:
 1.Client de database
 2.Données de connexion
 3.Un chemin migration pour cibler le schéma des databases, on l'utilisera pour les migrations
            au début du projet.
 4.Un chemin seeds pour cibler les premières informations à entrer dans la DB au début du projet

*/


module.exports = {
    test: {
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user : 'testData',
            password : 'testData123',
            database : 'database_test'
        }
        ,
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/test'
        }
    },
    development: {
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user : 'testData',
            password : 'testData123',
            database : 'database_dev'
        },
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/development'
        }
    },
    production: {
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user : 'testData',
            password : 'testData123',
            database : 'database_dev'
        },
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds/production'
        }
    }
};


