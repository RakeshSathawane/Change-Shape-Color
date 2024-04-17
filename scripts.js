const outerdiv=document.querySelector("#outer-div");
const innerdiv=document.querySelector("#inner-div");
const shape=document.querySelector("#shape");
const color=document.querySelector("#color");

const arr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
function randomcolor(){
    let gencolor="";
    for(let i=1;i<=6;i++){
    gencolor += arr[Math.floor(Math.random() * arr.length)];
    }
    return "#"+gencolor; 
}

color.addEventListener("click", () => {
    const randomColor = randomcolor();
    outerdiv.style.backgroundColor = randomColor;
});

const arr2=['circle' , 'square', 'hexagon', 'pentagon',"trepoid","triangle","cross"];
function randomshape(){
    let genrandom=arr2[Math.floor(Math.random()*arr2.length)];
    return genrandom;
};
shape.addEventListener("click",()=>{
    const genShape=randomshape();
    switch(genShape){
        case "circle":innerdiv.style.clipPath="circle(50% at 50% 50%)";
        break;
        case "square":innerdiv.style.clipPath="inset(5% 12% 15% 10%);";
        break;
        case "hexagon":innerdiv.style.clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
        break;
        case "pentagon":innerdiv.style.clipPath="polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
        break;
        case "trepoid":innerdiv.style.clipPath="polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)";
        break;
        case "triangle":innerdiv.style.clipPath="polygon(50% 0%, 0% 100%, 100% 100%)";
        break;
        case "cross":innerdiv.style.clipPath="polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)";
        break;
        
        
    } 
    
});