let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let btns=["red","green","blue","purple"];
let h2=document.querySelector("p");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
})
function levelup(){
    userseq=[];
    level++;
    h2.innerHTML=`level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randbtns=document.querySelector(`.${randColor}`);
     gameseq.push(randColor);
    btnslash(randbtns);
       
}

function btnslash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },500)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },500)
}
function checkanswer(idx){
  if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
       setTimeout(levelup,1000);
    }
  }
  else{
    h2.innerHTML=`Game Over ! your score was ${level}Press Any Key To Restart`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
 document.querySelector("body").style.backgroundColor="white";
    }, 1000)
    reset();
  }
}

function btnpress(){

let btn=this;
let usercolor=btn.getAttribute("id");
userseq.push(usercolor);

userflash (btn);

checkanswer(userseq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
      gameseq=[];
 userseq=[];
 level=0;
 started=false;
}