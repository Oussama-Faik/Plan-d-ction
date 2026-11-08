const apprenants = [
    { id: 1, nom: "Ahmed", age: 20, note: 15 },
    { id: 2, nom: "Sara", age: 22, note: 17 },
    { id: 3, nom: "Youssef", age: 19, note: 14 },
    { id: 4, nom: "Lina", age: 21, note: 18 },
    { id: 5, nom: "Karim", age: 23, note: 12 }
];

// TODO:Ajouter un apprenant.
function ajouterUnApprenant(id,nom,age,note)
{
    apprenants.push({id,nom,age,note})
}
ajouterUnApprenant(6,"Oussama",24,20)


// TODO:Modifier sa note à partir de son ID.
function modifierSaNoteàPartirDeSonID(id, nouvelleNote)
{
    apprenants.forEach(apprenant => {
        if(apprenant.id == id)
        {
            apprenant.note = nouvelleNote
        }
    })
}
modifierSaNoteàPartirDeSonID(6,9)

// TODO:Supprimer un apprenant.
function supprimerUnApprenant(id)
{
    apprenants.forEach((apprenant,index) => {
        if(apprenant.id == id)
        {
            apprenants.splice(index,1)
        }
    })
}
supprimerUnApprenant(2)

// TODO:Rechercher un apprenant par son nom.
function rechercherUnApprenantParSonNom(nom)
{
    apprenants.forEach(apprenant => {
        if(apprenant.nom ==nom)
        {
            console.table(apprenant)
        }
    })
}
rechercherUnApprenantParSonNom("Sara")

