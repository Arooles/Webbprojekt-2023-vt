const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

if (!window.matchMedia("(max-width: 768px)").matches) {
  let artWall = document.getElementById("gallery");

  if (artWall !== null) {
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

      gallery.style.transform = `translate(${panX}px, ${panY}px)`;
    }
  }
}



let homeWrapper = document.getElementById("wrapper");

if (homeWrapper !== null) {
  const wrapper = document.getElementById("wrapper");

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const uniqueRand = (min, max, prev1, prev2, prev3) => {
    let next = prev1;

    while (prev1 === next || prev2 === next || prev3 === next) {
      next = rand(min, max);
    }

    return next;
  };

  const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 }
  ];

  let prev1 = -1;
  let prev2 = -1;
  let prev3 = -1;

  setInterval(() => {
    const index = uniqueRand(0, combinations.length - 1, prev1, prev2, prev3);
    const combination = combinations[index];

    wrapper.dataset.configuration = combination.configuration;
    wrapper.dataset.roundness = combination.roundness;

    prev3 = prev2;
    prev2 = prev1;
    prev1 = index;
  }, 2500);
}


let pxScreen1 = document.getElementsByClassName("screen1");

if (pxScreen1 !== null) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const screen = document.querySelector(".screen1"),
    name = document.querySelector(".name1");

  screen.onmouseenter = event => {
    clearInterval(interval);
    
    let iteration = 0;
    
    interval = setInterval(() => {
      name.innerText = name.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return name.dataset.value[index];
          }
          
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      
      if (iteration >= name.dataset.value.length) {
        clearInterval(interval);
      }
      
      iteration++;
    }, 60);
  };

  screen.onmouseleave = event => {
    clearInterval(interval);
    
    let iteration = name.dataset.value.length;
    
    interval = setInterval(() => {
      name.innerText = name.innerText
        .split("")
        .map((letter, index) => {
          if (index >= iteration) {
            return letters[Math.floor(Math.random() * 26)];
          }
          
          return name.dataset.value[index];
        })
        .join("");
      
      if (iteration <= 0) {
        clearInterval(interval);
      }
      
      iteration--;
    }, 60);
  };
}

let pxScreen2 = document.getElementsByClassName("screen2");

if (pxScreen2 !== null) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const screen2 = document.querySelector(".screen2"),
    name2 = document.querySelector(".name2");

  screen2.onmouseenter = event => {
    clearInterval(interval);
    
    let iteration = 0;
    
    interval = setInterval(() => {
      name2.innerText = name2.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return name2.dataset.value[index];
          }
          
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      
      if (iteration >= name2.dataset.value.length) {
        clearInterval(interval);
      }
      
      iteration++;
    }, 60);
  };

  screen2.onmouseleave = event => {
    clearInterval(interval);
    
    let iteration = name2.dataset.value.length;
    
    interval = setInterval(() => {
      name2.innerText = name2.innerText
        .split("")
        .map((letter, index) => {
          if (index >= iteration) {
            return letters[Math.floor(Math.random() * 26)];
          }
          
          return name2.dataset.value[index];
        })
        .join("");
      
      if (iteration <= 0) {
        clearInterval(interval);
      }
      
      iteration--;
    }, 60);
  };
}

let pxScreen3 = document.getElementsByClassName("screen3");

if (pxScreen3 !== null) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const screen3 = document.querySelector(".screen3"),
    name3 = document.querySelector(".name3");

  screen3.onmouseenter = event => {
    clearInterval(interval);
    
    let iteration = 0;
    
    interval = setInterval(() => {
      name3.innerText = name3.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return name3.dataset.value[index];
          }
          
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      
      if (iteration >= name3.dataset.value.length) {
        clearInterval(interval);
      }
      
      iteration++;
    }, 60);
  };

  screen3.onmouseleave = event => {
    clearInterval(interval);
    
    let iteration = name3.dataset.value.length;
    
    interval = setInterval(() => {
      name3.innerText = name3.innerText
        .split("")
        .map((letter, index) => {
          if (index >= iteration) {
            return letters[Math.floor(Math.random() * 26)];
          }
          
          return name3.dataset.value[index];
        })
        .join("");
      
      if (iteration <= 0) {
        clearInterval(interval);
      }
      
      iteration--;
    }, 60);
  };
}

