//  cette partie constitue la parte route de l'application 
const module2Express = require('express'); // importation du module express natif de node dans le fichier st
const monRouter = module2Express.Router(); /* création de l'objet monRouter qui un gestionnaire de route  modulaire  c'est une mini-application */
/* il faut importer le model du shema des données qu'uon vient de creer 
const shemaArticleImporte = require('../models/ShemaModelInscription');*/

//  nus allons impoter le middleware d'authentification 
const authentificationimporte = require('../middleware/authentification');

const monControleurRoute = require('../controllers/contoleurLogiqueMetier');// il faut importer le controleur dans l'application 
monRouter.post('/', authentificationimporte, monControleurRoute.creatThing); // routes pour inserer une donnée dans la base de données 
monRouter.get('/:id', authentificationimporte, monControleurRoute.getOneThing); // recuperer un objet spécifique dans la base de donnée
monRouter.put('/:id',authentificationimporte,monControleurRoute.modifyThing); // ajouter un middleware pour la mise à jour  d'une donnée dans la base de donnée 
monRouter.delete('/:id',authentificationimporte, monControleurRoute.deleteThing);// ajouter un middleware pour la suppression d'une donnée suivant son id 
monRouter.get('/',authentificationimporte, monControleurRoute.getAllThing); // recuperer toutes les données dans la base de données 


// exportation du gestionnaire de route
module.exports = monRouter; 