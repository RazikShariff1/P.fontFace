let cursor=document.querySelector(".cursor-ball")
document.addEventListener("mousemove",(e)=>{
    cursor.style.left=`${e.x-20}px`
    cursor.style.top=`${e.y-20}px`
})
const enter=document.querySelectorAll(".letters")
enter.forEach((enter0)=>{
    enter0.addEventListener("mouseenter",()=>{
        cursor.style.transform=`scale(${5})`
    })
    enter0.addEventListener("mouseleave",()=>{
        cursor.style.transform=`scale(${1})`
    })
})
let hero=document.querySelector(".hero")
hero.addEventListener("mouseenter",()=>{
    cursor.style.transform=`scale(${5})`
})
hero.addEventListener("mouseleave",()=>{
    cursor.style.transform=`scale(${1})`
})
let display=document.querySelector("#letterdisplay")
display.addEventListener("mouseenter",()=>{
    cursor.style.transform=`scale(${6})`
})
display.addEventListener("mouseleave",()=>{
    cursor.style.transform=`scale(${1})`
})
let letters=document.querySelectorAll(".letters")
letters.forEach((letter)=>{
    letter.addEventListener("mouseenter",()=>{
    let a=letter.getAttribute("data-value")
    document.querySelector("#letterdisplay").innerHTML=`${a}`
    })
})
// let noCursorBall=document.querySelector(".page3")
// noCursorBall.addEventListener("mouseenter",()=>{
//     cursor.style.background="yellow"
// })
// noCursorBall.addEventListener("mouseleave",()=>{

//     cursor.style.background="darkturquoise"
//     // cursor.style.border="none"
// })
