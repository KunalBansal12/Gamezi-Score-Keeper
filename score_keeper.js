let p1button=document.querySelector('#p1button')
let p2button=document.querySelector('#p2button')
let reset1=document.querySelector('#reset')
let p1score=document.querySelector('#p1score')
let p2score=document.querySelector('#p2score')
const playscore=document.querySelector('#play')

let p1count=0;
let p2count=0;
let winningScore=3;
let isGameOver=false;

playscore.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    reset();
})

p1button.addEventListener("click",function(){
    if(!isGameOver){
        p1count+=1;
        if(p1count===winningScore){
            isGameOver=true;
            p1button.disabled=true;
            p2button.disabled=true;
            setTimeout(()=>{alert('Congo, Player 1 wins')},5)
        }
        p1score.textContent=p1count;
    }
})

p2button.addEventListener('click',function(){
    if(!isGameOver){
        p2count+=1;
        if(p2count===winningScore){
            isGameOver=true;
            p1button.disabled=true;
            p2button.disabled=true;
            setTimeout(()=>{alert('Congo, Player 2 wins')},5)
        }
        p2score.textContent=p2count;
    }
})


reset1.addEventListener('click',reset)

function reset(){
    isGameOver=false;
    p1count=0;
    p2count=0;
    p1score.textContent=0;
    p2score.textContent=0;
    p1button.disabled=false;
    p2button.disabled=false;
}