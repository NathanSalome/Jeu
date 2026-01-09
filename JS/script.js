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

let MotActu = span;

btn.addEventListener("click", (event) => {
    if(input === MotActu){
        score++
        console.log(score)
        scoreSpan.innerHTML = `${score}`
    }
    else{
        score++
        console.log("faux")
    }
});
