const cmon = document.querySelector(".p1");
const cmon1 = document.querySelector(".p2");

function flip(){
    cmon.addEventListener('click', () =>{
        cmon.classList.toggle('flipped')
    })
    cmon1.addEventListener('click', () =>{
        cmon1.classList.toggle('flipped')
    })
}

flip()
