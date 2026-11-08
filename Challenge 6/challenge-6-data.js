
const livres = [
    {
        titre: "العادات الذرية",
        auteur: "جيمس كلير",
        prix: 120
    },
    {
        titre: "الأب الغني والأب الفقير",
        auteur: "روبرت كيوساكي",
        prix: 100
    },
    {
        titre: "قوة الآن",
        auteur: "إيكهارت تول",
        prix: 90
    },
    {
        titre: "نظرية الفستق",
        auteur: "فهد عامر الأحمدي",
        prix: 85
    },
    {
        titre: "لا تحزن",
        auteur: "عائض القرني",
        prix: 75
    },
    {
        titre: "لأنك الله",
        auteur: "علي بن جابر الفيفي",
        prix: 65
    },
    {
        titre: "فاتتني صلاة",
        auteur: "إسلام جمال",
        prix: 70
    },
    {
        titre: "استمتع بحياتك",
        auteur: "محمد العريفي",
        prix: 80
    },
    {
        titre: "الرحيق المختوم",
        auteur: "صفي الرحمن المباركفوري",
        prix: 110
    },
    {
        titre: "الداء والدواء",
        auteur: "ابن قيم الجوزية",
        prix: 95
    }
];


const desLivres = document.getElementById("Livres-container")
const nombreDeLivre= document.getElementById("nombre de livre")
let compteur = 0
livres.forEach(livre=>{
    desLivres.innerHTML+=`<div class="bg-white p-6 rounded-xl shadow-md">

            <h3 class="text-2xl font-bold mb-3 ">
                ${livre.titre}
            </h3>

            <p class="text-gray-600 mb-2">
               ${livre.auteur}
            </p>

            <p class="text-gray-600 mb-4">
                ${livre.prix}
            </p>

        </div>`
    compteur++
    nombreDeLivre.textContent= "Nombre de livres : " +compteur

})
console.log(desLivres)