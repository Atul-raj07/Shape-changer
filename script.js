let chng = ["circle", "oval", "rect"]
let btn = document.querySelector('button')
let box = document.querySelector('#box')

btn.addEventListener("click",function () {

    let a =Math.floor(Math.random() * chng.length)
    console.log(chng[a])
    box.classList.toggle(chng[a])
})