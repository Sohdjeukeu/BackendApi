const module3Express = require('express');
const  routerUtilisateur = module3Express.Router();  

// il faut impoter le controleur 
const controleurUtilisateur =require('../controllers/controleurUtilisateur');

routerUtilisateur.post('/signup',controleurUtilisateur.signup); // route pour s'incrire
routerUtilisateur.post('/login',controleurUtilisateur.login) ; // route pour authentifier
routerUtilisateur.delete('/deleteUser/:id',controleurUtilisateur.deleteUser); // supprimer un utilisateur de la base de données
// exporter le router 

module.exports = routerUtilisateur;