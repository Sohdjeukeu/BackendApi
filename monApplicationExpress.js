// le framework express permet de créer  une appicaton express avec la methode 
const ModuleExpress = require('express') // importation du module express
const moduleCors = require('cors'); // imortation du module cors , facilite aux requetes entrantes d'accéder aux ressources du API
const monAppExpress = ModuleExpress(); // création de l'application express grace à la methode ModuleExpress()
monAppExpress.use(moduleCors()/** la methode cors */);  // activation  de toutes les requetes cors, il permet la cmmunication  entre les requetes entrantes 
const mongestionnaireRoute = require('./routes/gestionnaireDeRoutes'); // importation du gestionnaire de route 
const gestonnaireRouteUtilisateur = require('./routes/gestionnaireRouteUtiisateur'); // importation  du estinnaire route utilsateur dans l'application


/** on pouvait aussi utiliser :
 monAppExpress.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
 * 
 */
// Il faut capturer le corps de la requete entrante venant du frontend application/json
monAppExpress.use(ModuleExpress.json()); // il permet de capturer le  corps de la requete qui ont content type json
/*notre application elle recoit les requetes  les traitent et 
renvoient la reponses au serveur* une application express est fondamentalement une serie de middleware
c'est à dire une applicatin qui capture et traite les requetes http et trasnmet la réponse au serveur pour 
pour qu'il le transmette chez le client
Les fonctionnalités ce sont les middlewares
wares */


monAppExpress.use('/api/stuff',mongestionnaireRoute); // l'applcation doit utiliser le gestionnaire de route 
monAppExpress.use('/api/auth',gestonnaireRouteUtilisateur); // l'application express utilise la route utlisateur

const moduleMongoose = require('mongoose'); //  il va permettre l'interaction avec la base de données 
//const monRouter = require('./routes/gestionnaireDeRoutes');

moduleMongoose.connect('mongodb+srv://Merlin:Merlin@bdinsription.yskdsip.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>console.log('Connexion à MongoDB réussie!'))
.catch(()=>console.log('Connexion à mongoDB échouée'));

// connection local 
/*
moduleMongoose.connect('mongodb://localhost:27017/Cours',
{useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>console.log('Connexion à MongoDB réussie!'))
.catch(()=>console.log('Connexion à mongoDB échouée'));
*/



//1ere mddleware 
/*
monAppExpress.use((req,res,next)=>{
    console.log("voila la réponse du serveur");
    next();
});

// 2ème middleware
monAppExpress.use((req,res,next)=>{
    res.status(201);
    next();
});

//3ème middleware
monAppExpress.use((req,res,next)=>{
    res.json({"message":"Votre message est bien reçu merlin valery !"});
    next();
})
/*
// 4ème middleware 
monAppExpress.use((req,res,next)=>{
    console.info("Repose envoée avec succès");    
});
*/
/*monAppExpress.get('/api/stuff',(req,res,next)=>{
   // http://localhost:3000/api/merlin est la route complète encore appélé endpoint
   const monTab =[{
                    "nom":"Sohdjeukeu",
                    "prenom":"Merlin",
                    "age":45,
                    "CodePermanent":"SOHM29017608",
                    "Cours":["LOG430",'MAT210','GTI611']       
                   },{"notes":91}];
    res.status(201).json(monTab);                  
    }); */

 

//exportation de l'aplication vers les autres fichiers de Backend
module.exports = monAppExpress;
