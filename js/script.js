const btn = document.getElementById('menu-button');
const overlay = document.getElementById('overlay');
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter")

btn.addEventListener('click',navToggle);
document.addEventListener("scroll",scrollPage)

function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling') //Add a CSS class that stops scrolling
    menu.classList.toggle('show-menu');
} 

let countDone=false;
function scrollPage(){
    const scrollPos = window.scrollY;
    if(scrollY>100 && !countDone){
        countDone=true;
        countUp();
    }
    else if(scrollY<100 && countDone){
        countDone = false;
        reset();
    }
}

function countUp(){
    counters.forEach((counter)=>{
        counter.innerText= "0";
        const updateCounter = ()=>{
            // Get Count Target
            const target = +counter.getAttribute("data-target"); //+ sign converts targ value to number from string
            // Get Current Counter Value
            const c = +counter.innerText;

            const increment = target/100;
            // If counter is lesst than target,add Increment
            if(c<target){
                counter.innerText = `${Math.ceil(c+increment)}`
                setTimeout(updateCounter,20);
            }
        } 
        updateCounter();
    });
}
 
function reset(){
    counters.forEach((counter)=>{
        counter.innerText='0';
    })
}
