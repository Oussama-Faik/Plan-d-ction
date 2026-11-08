// Fonction pour Calculer la moyenne.
function calculerLaMoyenne(notes)
{
    let moyenne = 0;
    for(let i=0; i<notes.length; i++)
    {   
        
        moyenne += notes[i]
    }
    return moyenne/notes.length
}

let moyenneClasse =calculerLaMoyenne([12,9,18,20,13])
console.log("La moyenne de la classe est")
console.log(moyenneClasse)

// Fonction pour identifier la meilleure note.
function identifierLaMeilleureNote(notes)
{
    let max = notes[0];
    for (let i= 0; i<notes.length; i++) 
    {
        if(notes[i]> max)
        {
            max = notes[i]
        }
    }
    return max
}
let meilleureNote = identifierLaMeilleureNote([12,9,18,20,19])
console.log(meilleureNote)

// Fonction pour compter les notes supérieures ou égales à 10.
function notesSupérieuresOuEgalesàDix(notes)
{
    let compteur = 0;
    for(let i=0; i<notes.length; i++)
    {
        if(notes[i] >= 10)
        {
            compteur++ ;
        }
    }
    return compteur;
}
let notesSuperieuresOuEgalesDix = notesSupérieuresOuEgalesàDix([12,9,18,20,19])
console.log(notesSuperieuresOuEgalesDix)

// Fonction pour déterminer si la moyenne de la classe est supérieure ou égale à 10.
function silaMoyenneDeClasseSuperieureOuEgaleDix(notes)
{
    let moyenne =0;
    for(let i=0; i<notes.length; i++)
    {
        moyenne += notes[i]
        
    }
    if(moyenne/notes.length == 10)
        {
            console.log("La moyenne de la classe égale 10")
            return
        }
        else if(moyenne/notes.length > 10)
        {
            console.log("La moyenne de la classe est supérieure à 10")
            return
        }
        
        {
            console.log("La moyenne se la classe est inférieur à 10 ")
            return
        }
}
silaMoyenneDeClasseSuperieureOuEgaleDix([10,10,10,10,10])