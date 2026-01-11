let span = document.querySelector(".mots");
let input = document.querySelector(".text");
let scoreSpan = document.querySelector(".score");
let btn = document.getElementById("btn")

let score = 0;

span.innerHTML = `${MotAleatoire()}` // afficher le mots sur la page 
scoreSpan.innerHTML = `${score}` // afficher le score sur la page 

function MotAleatoire(){
    let motsAl = Math.floor(Math.random() * mots.length);
    return mots[motsAl];
}


btn.addEventListener("click", (event) => {
    let MotActu = span.textContent
    console.log(MotActu)
    if(input.value === MotActu){
        score++
        console.log("Vrai")
        scoreSpan.innerHTML = `${score}`
        span.innerHTML = `${MotAleatoire()}`
    }
    else{
        score++
        console.log("faux")
        span.innerHTML = `${MotAleatoire()}`
    }
});
