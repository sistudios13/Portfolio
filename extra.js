const fadeobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('scrollfadeanim')
        }
    })
})


const fadeElements = document.querySelectorAll('.scrollfade');
fadeElements.forEach((el) => fadeobserver.observe(el)); 

//-------------------------------------------------


const fade2observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('scrollfadeanim2')
        }
    })
})


const fade2Elements = document.querySelectorAll('.scrollfade2');
fade2Elements.forEach((el) => fade2observer.observe(el)); 

//-------------------------------------------------

const leftobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('scrollleftanim')
        } 

    })
})

const leftElements = document.querySelectorAll('.scrollleft');
leftElements.forEach((el) => leftobserver.observe(el)); 

//--------------------------------------------------

const rightobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('scrollrightanim')
        } 

    })
})

const rightElements = document.querySelectorAll('.scrollright');
rightElements.forEach((el) => rightobserver.observe(el)); 

//--------------------------------------------------

const scaleobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('scalelineanim')
        } 

    })
})

const scaleElements = document.querySelectorAll('.scaleline');
scaleElements.forEach((el) => scaleobserver.observe(el)); 

//--------------------------------------------------

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.getElementById('langbar').scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight + 500;
  var scrolled = (winScroll / height) * 200;
  document.getElementById("langbar").style.transform = "translateX(" + (scrolled -190) + "px)";
}