// console.log("Are we there yet?");

// Create variables
const playersCar = document.querySelector("#players-car");
const playButton = document.querySelector("#play-game");
const firstNumber = document.querySelector("#first-number");
const theInput = document.querySelectorAll(".the-input");
const insertButton = document.querySelector(".insert-number");
const theDollar = document.querySelector(".images");
const arrayOfCars = [];
const carInfo = "";
let theNumber = 0;
let theCar;
let numberRevealed;
let counter = 1;
let remain = 7;
let win;
let lose;

// Create an array of objects for a list of 15 cars with each car displaying a property for color, year, make, model, price, and visual.
let cars = [
    {
        color: "Black",
        year: 2022,
        make: "Honda",
        model: "Civic",
        price: 22550,
        visual: "./Assets/2022-honda-civic-black.jpeg"
    },
    {
        color: "Baltic Gray",
        year: 2022,
        make: "Jeep",
        model: "Grand Wagoneer",
        price: 87995,
        visual: "./Assets/2022-Baltic-Gray-Metallic-Clearcoat-PAS-68,68,75-640-en_US.webp"
    },
    {
        color: "Black",
        year: 2022,
        make: "Kia",
        model: "Telluride",
        price: 33390,
        visual: "./Assets/2022-kia-telluride-shoppingtools-buildandprice-telluride-ebonyblack-TL_51N.jpeg"
    },
    {
        color: "Fresh Powder",
        year: 2022,
        make: "Nissan",
        model: "Versa",
        price: 15580,
        visual: "./Assets/2022-nissan-versa-Fresh Powder-QM1-245,245,236-640-en_US.webp"
    },
    {
        color: "Blue",
        year: 2022,
        make: "Hyundai",
        model: "Tucson",
        price: 24950,
        visual: "./Assets/2022_hyundai_tucson_angularfront.jpeg"
    },
    {
        color: "Silver",
        year: 2022,
        make: "Volkswagon",
        model: "Golf GTI",
        price: 29880,
        visual: "./Assets/2022-volkswagon gti.jpeg"
    },
    {
        color: "Barossa Burgundy",
        year: 2022,
        make: "Genesis",
        model: "GV70",
        price: 41500,
        visual: "./Assets/2022-genesis-gv70.png"
    },
    {
        color: "Silver",
        year: 2022,
        make: "Jeep",
        model: "Grand Cherokee",
        price: 38325,
        visual: "./Assets/Jeep_Grand_Cherokee_L_Summit_2022.jpeg"
    },
    {
        color: "Carbonized Gray Metallic",
        year: 2022,
        make: "Ford",
        model: "F-150 Lightning",
        price: 39974,
        visual: "./Assets/2022-ford-f-150-lightning-Carbonized-Gray-Metallic-M7-68,67,65-640-en_US.webp"
    },
    {
        color: "Black",
        year: 2022,
        make: "Porsche",
        model: "Macan",
        price: 54900,
        visual: "./Assets/2022_porsche_macan_angularfront.jpeg"
    },
    {
        color: "White",
        year: 2022,
        make: "Mercedes-Benz",
        model: "C-Class",
        price: 43550,
        visual: "./Assets/2022-mercedes-benz-c-class-myrtle-beach-dealer.jpeg"
    },
    {
        color: "Gray",
        year: 2022,
        make: "Lexus",
        model: "IS 300",
        price: 39125,
        visual: "./Assets/2022_lexus_is-300_sedan_base_fq_oem_1_1600.webp"
    },
    {
        color: "Red",
        year: 2022,
        make: "Tesla",
        model: "Model 3",
        price: 46990,
        visual: "./Assets/2022-Tesla-Model-3-Standard-Range-Plus-sedan-red-1001x565-1.webp"
    },
    {
        color: "Black",
        year: 2022,
        make: "Toyota",
        model: "Camry",
        price: 25845,
        visual: "./Assets/2022-Toyota-Camry-HybridXSE.webp"
    },
    {
        color: "Green",
        year: 2022,
        make: "Ford",
        model: "Mustang",
        price: 27470,
        visual: "./Assets/2022-old_Ford_Mustang_2022_Coupe_60b5c2e9791db.webp"
    }
]

// Create a function for a car to be randomly generated
function GenerateCars(){
    console.log(cars);
    let rng = Math.floor(Math.random() * (cars.length));
    let res = cars[rng];
    cars.splice(rng, 1);
    return res;
}

// Create a function for the image of the car and the color, year, make and model to be generated in the appropriate divs for each random car displayed.
function DisplayCarToUser(){
    theCar = GenerateCars();
    let carImage = document.createElement("img");
    playersCar.append(carImage);
    carImage.src = theCar.visual;
    carImage.width = 500;
    arrayOfCars.push(theCar);
    let carInfo1 = document.createElement("p");
    let carInfo2 = document.createElement("p");
    let carInfo3 = document.createElement("p");
    let carInfo4 = document.createElement("p");
    root.append(carInfo1);
    root.append(carInfo2);
    root.append(carInfo3);
    root.append(carInfo4);
    carInfo1.innerText = `Color: ${theCar.color}`;
    carInfo2.innerText = `Year: ${theCar.year}`;
    carInfo3.innerText = `Make: ${theCar.make}`;
    carInfo4.innerText = `Model: ${theCar.model}`;
}

// Create a function for the first number of each car to be displayed for the randomly generated car.
function TheFirstNumber(){
    numberRevealed = document.createElement("p");
    firstNumber.append(numberRevealed);
    numberRevealed.innerText = theCar.price.toString()[0];
    theNumber += numberRevealed;
}

// Create a function for the user to input a number, console log each number they are off from the actual number and for each number they are off, the image of the dollar will be removed
function UserInput(){
    console.log(theInput[counter-1].value);
    console.log(theCar.price.toString()[counter]);
    remain -= Math.abs(theCar.price.toString()[counter] - theInput[counter-1].value);
    while(remain >= 1){
        alert("Keep Going!");
        if(remain < 1){
            alert("You Lost!");
        }
        break;
    // if(remain > 1){
    //     console.log("Keep Going!");
    // }
    // else if(remain = 1){
    //     console.log("You Won!")
    // }
    // else{
    //     console.log("You Lose!");
    // }
    }
    console.log(Math.abs(theCar.price.toString()[counter] - theInput[counter-1].value));
    counter++;
}

// Create a function to generate 7 dollar bill images.
function UserMoney(){
    for(let i = 0; i < remain; i++){
        let theMoney = document.createElement("img");
        // console.log(theDollar);
        theDollar.append(theMoney);
        theMoney.src = "./Assets/ystallonne-alves-3UnL2WzjvOo-unsplash.jpg";
        theMoney.width = 180;
    }
    console.log(remain);
}

window.addEventListener("DOMContentLoaded", () => {
    // Execute after page load
    playButton.addEventListener("click", function(event){
        DisplayCarToUser();
        TheFirstNumber();
        UserMoney();
        // numberRevealed.disabled = false;
    })
    insertButton.addEventListener("click", function(event){
        while(theDollar.hasChildNodes()){
        theDollar.removeChild(theDollar.firstChild);
        }
        UserInput();
        UserMoney();
        // numberRevealed.disabled = true;
    })
  });

// Create a function to prompt user if they won or lost.

// function RemoveMoney(){
//     if(theInput[counter-1].value != theCar.price.toString()[counter]){
//         theMoney -= Math.abs(theCar.price.toString()[counter] - theInput[counter-1].value);
//     }
// }

// window.onload = function() { document.getElementsByClassName('transition')[0].classList.add('translateAnimationClass'); }
