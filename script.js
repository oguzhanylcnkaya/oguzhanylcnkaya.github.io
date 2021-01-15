function starts(){
    let count = 20;
    let scene = document.getElementsByClassName('scene')[0];

    for(let i = 0; i < count; i++){
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);

        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + 'px'; 
        star.style.width = 1 + 'px';
        star.style.height = 50+  h + 'px';
        star.style.animationDuration = duration + 's';

        scene.appendChild(star);
    }
}

starts();

window.addEventListener("scroll", function(){

    var scroll = document.querySelector(".scrollTop");

    scroll.classList.toggle("active", window.scrollY > 400);
});

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// var icons = document.getElementById("social-icons");
// var iconsLi = icons.querySelectorAll("li");

// var navbarLi = document.getElementsByClassName("navbar-list")[0].querySelectorAll("li");

// function ac(){
//     document.getElementById("header").style.left = "0";
//     document.getElementById("ac").style.display = "none";
//     document.getElementById("kapat").style.display = "block";

//     icons.style.flexDirection = "row";
//     icons.style.paddingLeft = '2rem';
    
//     for (let i = 0; i < iconsLi.length; i++) {
//         iconsLi[i].style.padding = "5px 10px 5px 10px"; 
//     }

//     for(let i = 0; i < navbarLi.length; i++){
//         navbarLi[i].style.borderBottom = "1px solid rgba(0,0,0,0.05)";
//     }
// }

// function kapat(){
//     document.getElementById("header").style.left = "-270px";
//     document.getElementById("kapat").style.display = "none";
//     document.getElementById("ac").style.display = "block";

//     icons.style.flexDirection = "column";
//     icons.style.paddingLeft = "8px";

//     for (let i = 0; i < iconsLi.length; i++) {
//         iconsLi[i].style.padding = "5px 0 5px 0"; 
//     }

//     for(let i = 0; i < navbarLi.length; i++){
//         navbarLi[i].style.borderBottom = "hidden";
//     }
// }

function ac(){
    document.getElementById("header").style.left = "0";
}

function kapat(){
    document.getElementById("header").style.left = "-300px";
}
