// selecting elements

let mainContainer = document.querySelector(".main-container");
let thankYouContainer = document.querySelector(".thnk-you-container");
let sumbitBtn = document.getElementById("submit");
let returnBtn = document.getElementById("return");
let ratingBtn = document.querySelectorAll(".btn");
let ratingSpan = document.getElementsByTagName("span")[0];

// adding functions

sumbitBtn.addEventListener("click", function () {
    mainContainer.style.display = "none";
    thankYouContainer.style.display = "block";
})

returnBtn.addEventListener("click", function () {
    thankYouContainer.style.display = "none";
    mainContainer.style.display = "block";
})

ratingBtn.forEach(function (ele) {
    ele.addEventListener("click", function () {
        ratingSpan.textContent = this.textContent
    })
})


