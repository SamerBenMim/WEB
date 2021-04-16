$(document).ready(function(){
    var mouseX, mouseY;
    var ww = $( window ).width();
    var wh = $( window ).height();
    var traX, traY;
    $(document).mousemove(function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
      traX = ((4 * mouseX) / 570) + 40;
      traY = ((4 * mouseY) / 570) + 50;
      console.log(traX);
      $(".title2").css({"background-position": traX + "%" + traY + "%"});
    });
  });
  

var p =document.querySelector(".nav2")
var ok = false;
window.addEventListener("scroll",()=>{ ok = true;
    p.style.transform="translateY(-50%)";
    p.style.position="fixed " ;
    p.style.backgroundColor="black"; })


window.addEventListener("scroll",()=>{
if(ok&& !window.scrollY){
    p.style.backgroundColor="transparent"; 
    p.style.transform="translateY(0%)";
    p.style.position="absolute " ;
}
})

const responsive = document.getElementsByClassName('responsive')[0];
const nave= document.getElementsByClassName('link')[0];
responsive.addEventListener("click",()=>{nave.classList.toggle('active')})


var f =         document.querySelector(".more")
var g =         document.querySelector(".fleche")

setInterval(()=>{    setTimeout(() => {
    g.style.transform="translateY(43%)"
}, 1000);
setTimeout(() => {
    g.style.transform="translateY(-70%)"
}, 2000);},2500)

f.addEventListener("click",()=>{
    scroll({
        top: 645,
        left:0 ,
        behavior: 'smooth'
      });

})
g.addEventListener("click",()=>{
    scroll({
        top: 645,
        left:0 ,
        behavior: 'smooth'
      });

})



date=document.querySelector(".mots")
setInterval(()=>{var d =new Date() ;
    s = d.getSeconds(); if(s<10)s="0"+s;
    m = d.getMinutes();if(m <10)m ="0"+m ;
    h=d.getHours(); if(h<10)h="0"+h;
    day=d.getDate();if(day<10)day="0"+day;
    month=d.getMonth()+1;if(month<10)month="0"+month;
    year =d.getFullYear();
    year=year+"";
    year=year.substring(2,4) ;
date.innerHTML = year+":"+month+":"+day+":"+h+":"+m+":"+s;

},1000)


   c1=document.getElementById("cercle1");
   c2=document.getElementById("cercle2");
   c3=document.getElementById("cercle3");
   c4=document.getElementById("cercle4");
   c5=document.getElementById("cercle5");
   c6=document.getElementById("cercle6");
   c7=document.getElementById("cercle7");
   c8=document.getElementById("cercle8");

   tab = new Array (c1,c2,c3,c4,c5,c6,c7,c8)


function ptr(indice){
tab[indice-1].style.backgroundColor="white";
tab[indice-2].style.backgroundColor="rgb(175, 175, 175)";

}
function ptg(indice){
tab[indice-1].style.backgroundColor="white";
tab[indice].style.backgroundColor="rgb(175, 175, 175)";

}







left=document.querySelector(".left");
left.addEventListener("mouseover",()=>{left.style.opacity="initial"})
left.addEventListener("mouseout",()=>{left.style.opacity="0"})
right=document.querySelector(".right");
right.addEventListener("mouseover",()=>{right.style.opacity="initial"})
right.addEventListener("mouseout",()=>{right.style.opacity="0"})

t=document.querySelector(".image")
var z = 0;
var indice=1;
right.addEventListener("click",()=>{ if(z<(screen.width-17)*7){z+=(screen.width-17)
 t.style.right=z+"px";indice++;    ptr(indice) }});
left.addEventListener("click",()=>{ if(z>0){z-=(screen.width-17)
    t.style.right=z+"px";indice--; ptg(indice) }});
   


    var chemain = true;
    setInterval(() => {
        if(chemain){
        if(z<1519*7-1){z+=1519;indice++;ptr(indice);
            t.style.right=z+"px" }else{chemain = false}}
        else{
            if(z>0){z-=1519;indice--; ptg(indice);
                t.style.right=z+"px" }else{chemain = true}
        }    
    }, 25000);
 

    var pl=1 ;

    var v =document.querySelector(".planete");
    
 
    planets=["EARTH","MOON","JUPITER","MARS","MERCURY","SATURN","URANUS","VENUS","NEPTUNE"]
    setInterval(() => {
        v.firstElementChild.nextElementSibling.textContent=planets[pl%9]
        v.firstElementChild.style.backgroundImage="url(assets/planets/"+planets[pl%9]+".png)";pl++;
       

    }, 5500);
 