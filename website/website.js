const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

let artWall = document.getElementById("gallery");

if ( artWall !== null ){
  const gallery = document.getElementById("gallery");

  window.onmousemove = e => {
    const mouseX = e.clientX,
          mouseY = e.clientY;
    
    const xDecimal = mouseX / window.innerWidth,
          yDecimal = mouseY / window.innerHeight;
    
    const maxX = gallery.offsetWidth - window.innerWidth,
          maxY = gallery.offsetHeight - window.innerHeight;
    
    const panX = maxX * xDecimal * -1,
          panY = maxY * yDecimal * -1;
    
    gallery.animate({
      transform: `translate(${panX}px, ${panY}px)`
    }, {
      duration: 4000,
      fill: "forwards",
      easing: "ease"
    })
  }
}

let homeWrapper = document.getElementById("wrapper")

if ( homeWrapper !== null ){
  const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 2000);
}

let pxScreen1 = document.getElementsByClassName("screen1");

if ( pxScreen1 !== null ) {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  const screen = document.querySelector(".screen1"),
        name = document.querySelector(".name1");

  screen.onmouseenter = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      name.innerText = name.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return name.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= name.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 40);
  }
}

let pxScreen2 = document.getElementsByClassName("screen2");

if ( pxScreen2 !== null ) {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  const screen = document.querySelector(".screen2"),
        name = document.querySelector(".name2");

  screen.onmouseenter = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      name.innerText = name.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return name.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= name.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 40);
  }
}

let pxScreen3 = document.getElementsByClassName("screen3");

if ( pxScreen3 !== null ) {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  const screen = document.querySelector(".screen3"),
        name = document.querySelector(".name3");

  screen.onmouseenter = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      name.innerText = name.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return name.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= name.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 40);
  }

  
}

