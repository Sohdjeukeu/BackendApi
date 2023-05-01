const module1Mongoose = require('mongoose'); // importation du module mongoose
// création du schema des données 
const monShemaInscription = module1Mongoose.Schema({
    nom:{type:String,require:true},
    prenom:{type:String,require:true},
    age:{type:Number,require:true},
    codePermanent:{type:String,require:true},
    userID:{type:String,require:true},
});
// il faut exporter le model 
module.exports = module1Mongoose.model('ShemaModelInscription',monShemaInscription);
