var crsr=document.querySelector("#cursor")
var crsrblr=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsrblr.style.left = dets.x - 60+ "px"
    crsrblr.style.top = dets.y -60 + "px"

})

gsap.to("#nav", {
    backgroundColor:"#000",
     duration:0.5,
     delay:1,
    height: "100px",
    scrollTrigger:{
trigger:"#nav",
scroller:"body",
// markers:true,
start:"top -10%",
end:"top -11%",
scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:1
    }

})