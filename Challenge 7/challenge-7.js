const input = document.getElementById("input-article");
const ajouterbouton = document.getElementById("ajouter-article");
const liste = document.getElementById("liste articles");

ajouterbouton.addEventListener("click", function() {

    const article = document.createElement("li");
    article.className = "flex justify-between border border-gray-200 rounded-lg mb-1";

    const p = document.createElement("p");

    if (input.value == "") {
        return;
    }

    const divBoutons = document.createElement("div");
    divBoutons.style.display = "flex";
    divBoutons.style.gap = "5px";

    const btnDelete = document.createElement("button");

    btnDelete.addEventListener("click", function() {
        article.remove();
    });

    const btnAchete = document.createElement("button");

    btnAchete.addEventListener("click", function() {
        if (p.style.textDecoration == "line-through") {
            p.style.textDecoration = "none";
        } else {
            p.style.textDecoration = "line-through";
        }
    });

    p.textContent = input.value;
    input.value = "";
    p.style.display = "flex";

    btnDelete.textContent = "Supprimer";
    btnDelete.style.backgroundColor = "red";
    btnDelete.style.borderRadius = "4px";
    btnDelete.style.color = "white";

    btnAchete.textContent = "Acheté";
    btnAchete.style.backgroundColor = "green";
    btnAchete.style.borderRadius = "4px";
    btnAchete.style.color = "white";

    article.appendChild(p);

    divBoutons.appendChild(btnDelete);
    divBoutons.appendChild(btnAchete);

    article.appendChild(divBoutons);

    liste.appendChild(article);
});