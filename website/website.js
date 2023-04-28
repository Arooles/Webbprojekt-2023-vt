document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

  const blob = document.getElementById("blob");

document.body.onpointermove = event => {
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`, 
    top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });

}