

const toggle = document.querySelector(".toggle");
const Monthly = document.querySelector(".Monthly");
const Yearly = document.querySelector(".Yearly");
const toggleButton = document.querySelector(".toggle-button");
const active1 = document.querySelector(".toggle-button-active");


let buttonActiv = false;


toggleButton.addEventListener("click" ,() =>{
 if(!buttonActiv){
    buttonActiv=!buttonActiv;
    textBar.style.display = "flex";
    Yearly.classList,add.color = "red";
    cross.style.display = "flex";
    }else{
        hidden=!hidden;
        textBar.style.display = "none";
        bar.style.display = "flex";
        cross.style.display = "none";
 }
})

let togbut = false;

toggleButton.addEventListener("click",()=>{
  
})