let span = document.querySelector(".mots");
let input = document.querySelector(".text");
let scoreSpan = document.querySelector(".score");
let btn = document.getElementById("btn");
let spanNbMots = document.querySelector(".nbmots");

let score = 0;
let nbmot = 0;

span.innerHTML = `${MotAleatoire()}` // afficher le mots sur la page 
scoreSpan.innerHTML = `${score}` // afficher le score sur la page 
spanNbMots.innerHTML = `${nbmot}`


function MotAleatoire(){
    let motsAl = Math.floor(Math.random() * mots.length);
    return mots[motsAl];
}

function MajDonne(){
    span.innerHTML = `${MotAleatoire()}`
    spanNbMots.innerHTML = `${nbmot}`
    input.value = ""
}

btn.addEventListener("click", (event) => {
    let MotActu = span.textContent
    console.log(MotActu)
    if(input.value === MotActu){
        score++
        nbmot++
        scoreSpan.innerHTML = `${score}`
        MajDonne()
    }
    else{
        nbmot++
        MajDonne()
    }
});
