//ref to dom elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");

//event listener
prevBtn.addEventListener("click", prevPage);
nextBtn.addEventListener("click", nextPage);

let currentLocation = 1;
let numOfPapers = 8;
let maxLocation = numOfPapers + 1;

//next page 
function nextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                console.log(currentLocation)
                paper1.classList.add("flipped");
                break;
            case 2:
                console.log(currentLocation)
                paper2.classList.add("flipped");
                paper1.style.zIndex = 0;
                break;
            case 3:
                console.log(currentLocation)
                paper3.classList.add("flipped");
                paper2.style.zIndex = 1;
                break;
            case 4:
                console.log(currentLocation)
                paper4.classList.add("flipped");
                paper3.style.zIndex = 2;
                break;
            case 5:
                console.log(currentLocation)
                paper5.classList.add("flipped");
                paper4.style.zIndex = 3;
                break;
            case 6:
                console.log(currentLocation)
                paper6.classList.add("flipped");
                paper6.style.zIndex = 5;
                break;
            case 7:
                console.log(currentLocation)
                paper7.classList.add("flipped");
                paper7.style.zIndex = 6;
                break;
            case 8:
                console.log(currentLocation)
                paper8.classList.add("flipped");
                paper8.style.zIndex = 7;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }

}

//prev page
function prevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2: {
                console.log(currentLocation)
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 7;
                break;
            }
            case 3: {
                console.log(currentLocation)
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 6;
                break;
            }
            case 4: {
                console.log(currentLocation)
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 5;
                break;
            }
            case 5: {
                console.log(currentLocation)
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 4;
                break;
            }
            case 6: {
                console.log(currentLocation)
                paper5.classList.remove("flipped");
                paper6.style.zIndex = 2;
                break;
            }
            case 7: {
                console.log(currentLocation)
                paper6.classList.remove("flipped");
                paper7.style.zIndex = 1;
                break;
            }
            case 8: {
                console.log(currentLocation)
                paper7.classList.remove("flipped");
                paper8.style.zIndex = 0;
                break;
            }
            case 9: {
                console.log(currentLocation)
                paper8.classList.remove("flipped");
                break;
            }
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}