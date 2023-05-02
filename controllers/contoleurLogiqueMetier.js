/*Ce fichier contient la logique métier appliqueé à toutes les middlwares routes 
cette logique doit être exportée)
*/
// il faut importer le shema de données 
const shemaArticleImporte = require('../models/ShemaModelInscription');

// On exporte la logique métier qui traitent les midlewares et qu étaien dans les routes 

// exportaton de la logique pour insertion des données dans la base de données.
    exports.creatThing = async (req,res,next)=>{
        delete req.body._id;    // id envoyée par le frontend on doit eliminé pour reter avec cleui de la bsa de donnée 
        const Inscription1 = new shemaArticleImporte({
        ...req.body // il copie les champs de la requete 
        });
        console.log(req.body); // affiche à la console du terminal la requete 
        await Inscription1.save() //updateOne() // Model.findOneAndUpdate()la methode save() retourne une promise ou findOneAndUpdate()
        
        .then((InscriptionASauvegarde)=>res.status(201).json({InscriptionASauvegarde}))
        .catch((Error)=>res.status(400).json({Error}));
    }; 

// exportaton de la logique pour recuperer toutes les données dans la base de données.
    exports.getAllThing = async (req,res,next)=>{
        await shemaArticleImporte.find() // ou findById()
        // .then((resultat)=>res.status(200).json({resultat}))
        .then((resultat)=>res.status(200).json({resultat}))
        .catch((Error)=>res.status(400).json({Error}));
    };

// exportaton de la logique pour recuperer une donnée spécifique dans la bas de données 
    exports.getOneThing = async (req,res,next)=>{
        await shemaArticleImporte.findOne({_id: req.params.id}) //ou findById()
        .exec() // se postionner en attente d'une promise.
        .then((resultat)=>res.status(200).json({resultat}))
        .catch((Error)=>res.status(404).json({Error}));
    };

// exportaton de la logique pour mettre à jour une donnée spécifique dans la bas de données 
    exports.modifyThing = async (req, res,next)=>{
        // const idRecupererCorpsRequete = req.params.id;
        // mettre à jour les données 
        await shemaArticleImporte.updateOne({_id:req.params.id},{...req.body,_id:req.params.id})
        .exec()
        .then((nouveauresultat)=>res.status(200).json({nouveauresultat}))
        .catch((Error)=>res.status(400).json({Error}));
    };

// exportaton de la logique pour supprimer une donnée spécifique dans la bas de données 
    exports.deleteThing = async (req,res,next)=>{
        await shemaArticleImporte.deleteOne({_id:req.params.id}) //findByIdAndDelete
        .exec()
        .then((resultat)=>res.status(200).json({resultat}))
        .catch((Error)=>res.status(400).json({Error}));
    }

        