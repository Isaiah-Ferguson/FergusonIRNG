let nameGeneratoryBtn = document.getElementById("nameGeneratoryBtn");
let injectName = document.getElementById("injectName");
let nameList = document.getElementById("nameList");
let lastStudentNames = document.getElementById("lastStudentNames");
const toggleBar = document.getElementById("toggle-bar");
const popOutBar = document.getElementById("pop-out-bar");
const closeBtn = document.getElementById("closeBtn");
let changeBg = document.getElementById("changeBg");
let body = document.getElementById("body");
let studentNames = [];
let randomIndex;
const arr = [];


function getJson() {
    fetch("./data/data.json")
        .then(response => response.json())
        .then(data => {
            studentNames = data.studentNames;
        })
}

getJson();

nameGeneratoryBtn.addEventListener("click", function () {
    randomIndex = Math.floor(Math.random() * studentNames.length);
    injectName.innerText = studentNames[randomIndex].firstName;

    if (arr.length < 5) {
        arr.push(injectName.innerText);
    } else {
        arr.shift();
        arr.push(injectName.innerText);
    };
    nameList.textContent = arr.join(', ');


    if (injectName.classList.contains('fadeIn')){
        injectName.classList.remove('fadeIn');
        injectName.classList.add('zoomer');
    }else if (injectName.classList.contains('zoomer')){
        injectName.classList.remove('zoomer');
        injectName.classList.add('fadeIn');}

    

});


toggleBar.addEventListener("click", function () {
    if (popOutBar.classList.contains("hide")) {
        popOutBar.classList.remove("hide");
        popOutBar.classList.toggle("open");
    }
    console.log("hi")
});



closeBtn.addEventListener("click", function () {
    setTimeout(() => {
        popOutBar.classList.add("hide");
    }, 450);
    popOutBar.classList.toggle("open");
});

changeBg.addEventListener('click', function () {
   
    if (body.classList.contains('bgSunny')) {
        body.classList.remove('bgSunny');
        body.classList.add('bgCloudy');
    } else if (body.classList.contains('bgCloudy')) {
        body.classList.remove('bgCloudy');
        body.classList.add('bgNight');
    } else if (body.classList.contains('bgNight')) {
        body.classList.remove('bgNight');
        body.classList.add('bgRain');
    }
    else {
        body.classList.remove('bgRain');
        body.classList.add('bgSunny');
    }
}
);