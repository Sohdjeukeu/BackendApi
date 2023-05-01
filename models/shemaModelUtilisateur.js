const module2Mongoose = require('mongoose'); // importation du  module mongoose natif de node 
const moduleUniqueValidateur = require('mongoose-unique-validator'); // importation du module validateur pres l'avoir insaller avec npm install --save mongoose-uniquevalidator

const monShemaUtilisateur = module2Mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});

 // on applique au shema avent d'en faire un modele pour éviter d'avoir les utilsateurs avec la meme adresse mail plusieurs adresses
 monShemaUtilisateur.plugin(moduleUniqueValidateur);
module.exports = module2Mongoose.model('Le modelutilsateur',monShemaUtilisateur);
