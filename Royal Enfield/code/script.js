
var menuButton = document.getElementById('menuButton');
var menuContent = document.getElementById('menuContent');

menuButton.addEventListener('click', function () {

    this.classList.toggle('change');

    menuContent.classList.toggle('show');

});



window.addEventListener('scroll', function () {
    let bar = document.querySelector('.header')
    
        if (window.scrollY > 500) {
            bar.style.backgroundColor = "black"
        }
        else {
            bar.style.backgroundColor = "transparent"
        }
   

});

let items = document.querySelectorAll(".item");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let last = items.length - 1;
let first = 0;
let active = 0;

prev.onclick = () => {
    active--;
    slider();
}

next.onclick = () => {
    active++;
    slider();
}
function slider() {
    let activated = document.querySelector(".item.active")
    if (activated)
         activated.classList.remove("active");
    items[active].classList.add("active");
    prev.classList.remove('btt');
    next.classList.remove('btt');
    if (active == last) next.classList.add('btt')
    if (active == first) prev.classList.add('btt')
}
slider()


gsap.from(".lwr-box-left img",{
    scale:3,
    x:300,
    scrollTrigger:{
        trigger:".ryt-cont",
        scrub:1,
        start:"top 100%",

        end : "top 60%"
    }
}) 

let next_bt = document.querySelector("#hisnext")
let prev_bt = document.querySelector("#hisprev")
let history = document.querySelector('.history')
let listHTML = document.querySelector('.his-list')

next_bt.onclick = function(){
    slides('next')
}
prev_bt.onclick = function(){
    slides('prev')
}

const slides = (e)=>{
    let items = document.querySelectorAll('.history .his-list .his-item')
    if ( e === 'next'){
        listHTML.appendChild(items[0])
        history.classList.add('next')
    }
    else{
        let pos_last = items.length -1;
        listHTML.prepend(items[pos_last]);
    }
}



    let cards = document.querySelectorAll(".card")
    cards.forEach(card=>{
        card.onmousemove = function(e) {
            let x = e.pageX - card.offsetLeft;
            let y = e.pageY - card.offsetTop;

            card.style.setProperty('--x', x + 'px')
            card.style.setProperty('--y', -520+ y + 'px')
        }
    })



 let pager = document.querySelector('.page')
let bt = document.querySelector('#pager')
bt.addEventListener('click',function(e){
    pager.style.top = '-100%';
})
