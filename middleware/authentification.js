/* permet de vérifier les informations d'authentification envoyées envoyées par le client
il prend le token envoyé par le client et verifiera la validité et permettra aux differentes routes d'exploiter les informations
tel que le userId
*/ 
const moduleJsonWebToken = require('jsonwebtoken') // importaion du module jsonWebToken 

module.exports = (req, res,next)=>{
    try{
        const token = req.headers.authorization.split(' ')[1];
        // il  faut décoder le token
        const decodeToken = moduleJsonWebToken.verify(token,'RANDOM_TOKEN_SECRET');
        const userId1 = decodeToken.userID;
        req.auth = {userId1:userId1};
        next();
    }catch(error)
    {
        res.status(401).json({error});
    }
};
   