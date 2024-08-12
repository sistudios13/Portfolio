console.clear();

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin)
    gsap.defaults({ease: "none"});



const pulses = gsap.timeline({
  defaults: {
    duration: 0.05, 
    autoAlpha: 1, 
    scale: 2, 
    transformOrigin: 'center', 
    ease: "elastic(2.5, 1)"
  }})
.to(".ball02, .text01, .h01, .t01", {}, 0.07) 
.to(".ball03, .text02, .h02, .t02", {}, 0.21)
.to(".ball04, .text03, .h03, .t03", {}, 0.36)
.to(".ball05, .text04, .h04, .t04", {}, 0.50)

const main = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }})
.to(".ball01", {duration: 0.01, autoAlpha: 1})
.from(".theLine", {drawSVG: 0}, 0)
.to(".ball01", {motionPath: {
  path: ".theLine", 
  align:".theLine",
  alignOrigin: [0.5, 0.5],
}}, 0)
.add(pulses, 0);

   });
