const module1Mongoose = require('mongoose'); // importation du module mongoose
// création du schema des données 
const monShemaInscription = module1Mongoose.Schema({
    nom:{type:String,required:true},
    prenom:{type:String,required:true},
    age:{type:Number,required:true},
    codePermanent:{type:String,required:true},
    userID:{type:String,require:true},
});
// il faut exporter le model 
module.exports = module1Mongoose.model('ShemaModelInscription',monShemaInscription);
