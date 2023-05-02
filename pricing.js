

const toggle = document.querySelector(".toggle");
const toggleActive = document.querySelector(".toggle-active");
const Monthly = document.querySelector(".Monthly");
const Yearly = document.querySelector(".Yearly");
const toggleButton = document.querySelector(".toggle-button");
const toggleButtonActive = document.querySelector(".toggle-button-active");
const price = document.querySelector(".price");
const priceOne = document.querySelector(".price-one");
const priceTwo = document.querySelector(".price-two");


let activButton = false;

toggleButton.addEventListener("click" ,() =>{
 if(!activButton){
    activButton=!activButton;
    toggleButton.classList.remove ("toggle-button");
    toggle.classList.add ("toggle-active");
    toggleButton.classList.add ("toggle-button-active");
    Monthly.style.color = "#DFDFDF";
    Yearly.style.color = "#000000";
    price.innerHTML = " $390.0";
    priceOne.innerHTML = " $190.0";
    priceTwo.innerHTML = " $990.0";
    }else{
        activButton=!activButton;
        toggleButton.classList.add ("toggle-button");
        toggle.classList.remove ("toggle-active");
        toggleButton.classList.remove ("toggle-button-active");
        Monthly.style.color = "#000000"
        Yearly.style.color = "#DFDFDF"
        price.innerHTML = "$39.00";
        priceOne.innerHTML = " $19.0";
        priceTwo.innerHTML = " $99.0";
 }
})
