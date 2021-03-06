const circle = document.querySelectorAll('#circle')
const img = document.querySelector('#user')

img.addEventListener('click', ()=>{console.log(circle)})

window.addEventListener('mousemove', eventHandler)


function eventHandler(e){
        let a = e.movementX
        let b = e.movementY
        
        if(a > 0){
            circle[0].style.transform = `translateX(-5px)`
            circle[1].style.transform = `translateX(-10px)`
            circle[2].style.transform = `translateX(-20px)`
            circle[3].style.transform = `translateX(-9px)`
            circle[4].style.transform = `translateX(-11px)`
            circle[5].style.transform = `translateX(-19px)`
            circle[6].style.transform = `translateX(-19px)`
            circle[7].style.transform = `translateX(-11px)`
            circle[8].style.transform = `translateX(-20px)`
        }else if(a < 0){
            circle[0].style.transform = `translateX(5px)`
            circle[1].style.transform = `translateX(10px)`
            circle[2].style.transform = `translateX(20px)`
            circle[3].style.transform = `translateX(9px)`
            circle[4].style.transform = `translateX(11px)`
            circle[5].style.transform = `translateX(19px)`
            circle[6].style.transform = `translateX(19px)`
            circle[7].style.transform = `translateX(11px)`
            circle[8].style.transform = `translateX(20px)`
        }else if(b > 0){
            circle[0].style.transform = `translateY(-5px)`
            circle[1].style.transform = `translateY(-10px)`
            circle[2].style.transform = `translateY(-20px)`
            circle[3].style.transform = `translateY(-9px)`
            circle[4].style.transform = `translateY(-11px)`
            circle[5].style.transform = `translateY(-19px)`
            circle[6].style.transform = `translateY(-19px)`
            circle[7].style.transform = `translateY(-11px)`
            circle[8].style.transform = `translateY(-20px)`
        }else if(b < 0){
            circle[0].style.transform = `translateY(5px)`
            circle[1].style.transform = `translateY(10px)`
            circle[2].style.transform = `translateY(20px)`
            circle[3].style.transform = `translateY(9px)`
            circle[4].style.transform = `translateY(11px)`
            circle[5].style.transform = `translateY(19px)`
            circle[6].style.transform = `translateY(19px)`
            circle[7].style.transform = `translateY(11px)`
            circle[8].style.transform = `translateY(20px)`
        }}
