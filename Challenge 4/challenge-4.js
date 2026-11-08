let produits = [
  { id: 1, nom: "PC", prix: 5000, categorie: "Informatique" },
  { id: 2, nom: "Phone", prix: 3000, categorie: "Electronique" },
  { id: 3, nom: "Mouse", prix: 150, categorie: "Informatique" },
  { id: 4, nom: "Keyboard", prix: 250, categorie: "Informatique" },
  { id: 5, nom: "TV", prix: 4000, categorie: "Electronique" },
  { id: 6, nom: "Headphones", prix: 500, categorie: "Audio" },
];

// TODO: Récupérer les produits à moins de 200 DH.
function produitsMoinsDe200() {
  let result = produits.filter((produit) => produit.prix < 200);
//   console.table(result);
}
produitsMoinsDe200();

//TODO: Rechercher un produit par son ID.
function rechercherProduitParId(id) 
{
  let result = produits.find(produit => produit.id == id)
//   console.log(result)
}
rechercherProduitParId(6)

// TODO: Générer un tableau contenant uniquement les noms.
function genererTableauDesNoms()
{
    let result = produits.map(produit => produit.nom)
    // console.log(result)
}
genererTableauDesNoms()

// TODO: Calculer la somme des prix de tous les produits.
function calculerPrixTotalProduits()
{
    let result = produits.reduce((accumulator,produit)=>
    {
        return acc + produit.prix
    },0)
    console.log(result)
}
calculerPrixTotalProduits()