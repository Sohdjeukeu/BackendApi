const nodemon = require("nodemon");

let mavaleur = 2.5;
console.info(mavaleur)
mavaleur = 5;
console.info(mavaleur);

const montab =["Tchakounti","Sohdjeukeu","Djomo","Fongang"]


console.info(montab[0]);
function additionner(a,b){
   return a+b;
}
// valeur de retour 
const resultat = additionner(4,5);
console.log(resultat);
console.log(additionner);

const car =
{
    type:"berline",
    couleur : "jauane",
    nombreRoue: 4,
};

car.couleur = "blanc";
//console.log(car.couleur);

const monTableau = ["yves",2,"Orange","Mangue","Miel"];
//monTableau.push(14);
//console.log(monTableau);

//objet javascript
const Etudiant =
{
    nom:"Sohdjeukeu    M",
    prenom:"Merlin",
    age: 45,
    codePermnent:"SOHM29017608",
};
const mavariable = 4.6666;
/*
console.log(Etudiant.nom.length);
console.log(Etudiant.nom.length);
console.log(Etudiant.nom.toString());
console.log(Etudiant.nom.split());
console.log(Etudiant.nom.split());
            
console.log(Etudiant.nom.toUpperCase());
console.log(Etudiant.nom);
const monNom = Etudiant.nom.trim();
   */
  /*
  console.info(mavariable.toFixed(2));
  console.info(mavariable.toFixed(4));
  console.info(mavariable.toPrecision(1));
  console.info(mavariable.toPrecision(3));
  console.info(mavariable.valueOf());+
  */
  //console.info(montab.toString());
 // console.info(montab.join("; "));
  //console.info(montab.join("; "));

  const monTabNom = ["Merlin","Asael","Bryan","Nohan"];
  // la pop()methode  le dernier élement
  //const leDernierElement = monTabNom.pop();

      /*
  // la push() méthode ajoute un élement à la dernière position  
  console.info(monTabNom.pop());
  console.info(leDernierElement);
  console.info(monTabNom.toString());
  monTabNom.push(15);
  console.info(monTabNom);
  console.info(monTabNom.join("; "));
           */
/*
  monTabNom.shift()// la mthode hyper importante
  console.info(monTabNom);
     */

  monTabNom.sort()// la mthode hyper importante pour classer les élements du tableau par ordr alphabétique
  console.info(monTabNom);
  monTabNom.reverse();
  console.info(monTabNom);

  // creation d'une classe 
  class EtudiantEts
  {
    constructor(nom, prenom, codePermnent,age)
    {
        this.nom =  nom;
        this.prenom =  prenom;
        this.codePermnent =codePermnent;
        this.age =age;
    }
  }

  const etudiant1 = new EtudiantEts("sohdjeukeu","Merlin","SOHM29017608",45);
  const etudiant2 = new EtudiantEts("Tchakounti","Bryan","TchaBry");

  console.info(etudiant2.prenom);
   

  // Les fonctions de rappels 
  function multiplier(a,b)
  {
    console.info(a*b);
  }

function myFirst (a,b,multiplier)
{
    const resultat1 = a+b;
    multiplier(resultat1,resultat1);
}

myFirst(10,5,multiplier);


let monObjetPromise = new Promise((resolve,myRejet)=>
{
    resolve();
    myRejet();
});

 // voci comment accéder à une promise
monObjetPromise.then(()=>{

})

monObjetPromise.catch(()=>{

})

monObjetPromise.finally(()=>{

});

 // Exemple
async function additionner(a,b)
{
    return await a+b;
}

 additionner(4,5) // appe de la foonction asychrone ou de rappel  callback 
 .then((monSucces)=>console.info(monSucces))
 .catch((Error)=>Error);

 let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );
    console.clear();
console.table(monTableau);
console.dir(monTabNom);
console.dir(Etudiant);
console.clear();
console.time(multiplier(4,5));
//console.clear();
//myPromise.then((value)=>)
myPromise.exec()