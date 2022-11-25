// $("#toggleicon").click(function(){
//     $("#sh_ul").slideToggle();

// });

let btn = document.querySelector("#toggleicon");

let hideUl = document.querySelector("#sh_ul");


btn.addEventListener("click", ()=>{
    hideUl.classList.toggle("showUl");
    console.log("Success")
})

let nav = document.querySelector("nav");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset >= 500){
       nav.classList.add("myNavigation")
    }else{
        nav.classList.remove("myNavigation")
    }
})