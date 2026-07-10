particlesJS("particles-js",{

particles:{

number:{value:60},

color:{value:"#3b82f6"},

shape:{type:"circle"},

opacity:{value:.4},

size:{value:3},

move:{

enable:true,

speed:1

},

line_linked:{

enable:true,

distance:160,

color:"#3b82f6",

opacity:.15

}

}

});

document.querySelectorAll(".links a").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

btn.style.background=`radial-gradient(circle at ${x}px ${y}px,rgba(59,130,246,.25),rgba(17,24,39,.8))`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.background="rgba(17,24,39,.6)";

});

});