// Javascript pour la réalisation du slider de la page 3 LifeStyle Studio

let slide = ["woman-1.png", "woman-2.png", "woman-3.png"];
let number = 0;
let timer = null;

function next() {
    number++
    if (number === slide.length)
        number = 0;
     
     
    document.getElementById("slide").style = `background-image: url(ressources/img/slider/${slide[number]})`;
    
}

function prev(){
    number--
    if (number < 0)
        number = slide.length - 1;
        
    document.getElementById("slide").style = `background-image: url(ressources/img/slider/${slide[number]})`;
}



// PERMET DE FAIRE UN BOUTON QUI DEMARRE LE SLIDER AUTOMATIQUE OU LE STOP

// function playPause(){
    
//     if (timer === null){
//         document.querySelector("#auto").innerHTML="pause"
//      timer = setInterval(()=>{
//          next()
//      },2000)   
//     }else { 
//         document.querySelector("#auto").innerHTML="play"
//         clearInterval(timer)
//         timer=null
//     }
    
// }

// PERMET DE METTRE UNE IMAGE RANDOM AVEC UN BOUTON

// function random(){
//     let chiffre = Math.random()
//     console.log(chiffre)
    
//     if (chiffre < 1/3){
//         chiffre = 0
        
//     } else if (chiffre < 2/3) {
//         chiffre = 1
        
//     }else {
//         chiffre = 2
//     }
    
//     if (chiffre === number){
//         random()
//         return
//     } 
    
//     number = chiffre
//     document.getElementById("slide").src = "ressources/img/slider/" + slide[number];
// }

