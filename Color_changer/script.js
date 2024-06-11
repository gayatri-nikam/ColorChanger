const button=document.querySelectorAll(".button");
const body=document.querySelector("body");
button.forEach(function (btn) {
    btn.addEventListener("click",function (e) {
        if(e.target.id==="red"){
            body.style.backgroundColor="rgb(198, 114, 114)"
            body.style.color="white"
        }
        if(e.target.id==="pink"){
            body.style.backgroundColor="rgb(220, 89, 209)"
            body.style.color="white"
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor="rgb(88, 88, 184)"
            body.style.color="white"
        }
        if(e.target.id==="green"){
            body.style.backgroundColor="rgb(117, 176, 117)"
            body.style.color="white"
        }
    })
})