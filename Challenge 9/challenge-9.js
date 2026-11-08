const tasks =[]

const input = document.getElementById("task-input")
const ajouterBouton = document.getElementById("add-btn")
const tasksContainer = document.getElementById("tasks-container")

ajouterBouton.addEventListener("click",function(){
    const p = document.createElement("p")
    p.textContent=input.value
    const task={
        id:tasks.length+1,
        titre:input.value,
        status:"on progress"

    }
    tasks.push(task)
    const supprimerBouton=document.createElement("button")
    supprimerBouton.style.backgroundColor="red"
    supprimerBouton.style.color="white"
    supprimerBouton.textContent ="supprimer"
    supprimerBouton.addEventListener('click',(e)=>{
        
    })
    const modifierBouton=document.createElement("button")
    modifierBouton.style="gray"
    modifierBouton.textContent="modifier"
    tasksContainer.append(p,supprimerBouton,modifierBouton)
    

})