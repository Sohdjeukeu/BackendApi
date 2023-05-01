const monModuleHttp = require('http')// importation du module http natif de node
const monAppImporte = require('./monApplicationExpress');
// l'application doit tourner sur le port sur lequel le serveur est écouté
monAppImporte.set("Port",process.env.PORT || 3000); // l'application set le port.
const monServeur = monModuleHttp.createServer(monAppImporte);

//le serveur ici est un serveur web qui est logiciel et non matériel. Tout serveur doit  et doit écouté sur le port  ex 3000
monServeur.listen(process.env.PORT || 3000,()=>{
    console.info("J'écoute le serveur au port 3000");
});
