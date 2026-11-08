const background = document.querySelector(".background")
const bleuBouton = document.getElementById("Bleu bouton")
const vertBouton = document.getElementById("Vert bouton")
const violetBouton = document.getElementById("Violet bouton")
const masquerBouton = document.getElementById("Masquer bouton")

bleuBouton.addEventListener("click",function(){
    background.classList.remove("bg-green-200");
    background.classList.remove("bg-violet-200");
    background.classList.add("bg-blue-200")
})

vertBouton.addEventListener("click",function(){
    background.classList.remove("bg-blue-200");
    background.classList.remove("bg-violet-200");
    background.classList.add("bg-green-200")
})

violetBouton.addEventListener("click",function(){
    background.classList.remove("bg-blue-200");
    background.classList.remove("bg-green-200");
    background.classList.add("bg-violet-200")
})

masquerBouton.addEventListener("click", function() {

    const isHidden = background.classList.toggle("hidden");

    if (isHidden) {
        masquerBouton.textContent = "Afficher les informations";
    } else {
        masquerBouton.textContent = "Masquer les informations";
    }

});