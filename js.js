const cursorDot = document.querySelector("[data-cursor-dot]")
const cursorOutline = document.querySelector("[data-cursor-outline]")
const cursorOutline2 = document.querySelector("[data-cursor-outline2]")

window.addEventListener("mousemove",(e)=>{
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top =`${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left : `${posX}px`,
        top:`${posY}px`
    },{
        duration:250,
        fill:"forwards"
    })

    cursorOutline2.animate({
        left : `${posX}px`,
        top:`${posY}px`
    },{
        duration:500,
        fill:"forwards"
    })

})