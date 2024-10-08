const fadeobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
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
        
        if (entry.isIntersecting) {
            entry.target.classList.add('scalelineanim')
        } 

    })
})

const scaleElements = document.querySelectorAll('.scaleline');
scaleElements.forEach((el) => scaleobserver.observe(el)); 

//--------------------------------------------------


const widthobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      
      if (entry.isIntersecting) {
          entry.target.classList.add('widthlineanim')
      } 

  })
})

const widthElements = document.querySelectorAll('.widthline');
widthElements.forEach((el) => widthobserver.observe(el)); 

//--------------------------------------------------

const imgobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      
      if (entry.isIntersecting) {
          entry.target.classList.add('imganim')
      } 

  })
})

const imgElements = document.querySelectorAll('.img');
imgElements.forEach((el) => imgobserver.observe(el)); 

//--------------------------------------------------
window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.innerWidth < 500) {
    var scrollOffset = 120
  }
  if (window.innerWidth > 500) {
    var scrollOffset = 100
  }
  var winScroll = document.getElementById('langbar').scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight + 500;
  var scrolled = (winScroll / height) * 200;
  document.getElementById("langbar").style.transform = "translateX(" + (scrolled - scrollOffset) + "mm)";
}

