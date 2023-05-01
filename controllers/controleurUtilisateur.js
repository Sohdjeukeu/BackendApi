// il faut importer le shema de données utiisateur dans le fichier controleurUtlisateur
const monShemaUtilisateurImporte = require('../models/shemaModelUtilisateur');

// il va falloir installer le package de cryptage  des mots de passe uilisateurs npm install --save bcrypt
const moduleBcrypt = require('bcrypt');




// cette fonction permet d'enregistrer les nouveaux utilisateurs
exports.signup = async (req,res,next)=>{
    //  va hacher le mot de pass avant de le stocker dans la base de donnée avant l'inscription 
  await moduleBcrypt.hash(req.body.password,10)
  .then((resultathash)=>{
      // on va creer un nouveau tilisateur puis on va l'enregistrer dans la base de donnée avec le nuveau mot de pass
        const nouveauUtilsateur = new monShemaUtilisateurImporte({
        email:req.body.email,
        password: resultathash
        });
      // inserons le nouveau utilisateur dans la base de données
       nouveauUtilsateur.save()
       .then((nouveauUtilsateurSauvegarde)=> res.status(201).json({nouveauUtilsateurSauvegarde}))
       .catch((Error)=> res.status(400).json({Error}));
  })
  .catch((Error)=> res.status(500).json({Error}));
};


// la fonction pour connecter les utilisateurs existants verifiation de l'authentification 
exports.login = async (req,res,next)=>{
   await monShemaUtilisateurImporte.findOne({email:req.body.email})
    .then((resultatTrouve)=>{
        if(resultatTrouve == null)
        {
            res.status(401).json({message:"email/mot de pass incorrecte"});
        }
        else{
            // l'utilisateur est enrgistré dans la base de donnée 
            moduleBcrypt.compare(req.body.password,resultatTrouve.password)
            .then((valide)=>{
                if(!valide)
                {
                    // mot de passe est incorrecte
                    res.status(401).json({Mesage:"email/mot de passe incorrecte"});
                }
                else{
                      // le mot de passe est correcte 
                    res.status(200).json({
                        // information necessaires à l'authentification de l'utilisateur
                        userID: resultatTrouve._id,
                        token : 'Token'
                    });
                }
            })
            .catch((Error)=> res.status(500).json({Error}));
        }
    })
    .catch((Error)=>res.status(500).json({Error}));
};

// suppression d'un utilisateur 
// exportaton de la logique pour supprimer une donnée spécifique dans la bas de données 
exports.deleteUser = async (req,res,next)=>{
    await monShemaUtilisateurImporte.deleteOne({_id:req.params.id}) //findByIdAndDelete
    .exec()
    .then((resultat)=>res.status(200).json({resultat}))
    .catch((Error)=>res.status(400).json({Error}));
}
