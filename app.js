const buttons = document.querySelectorAll(".btn");
let count = 0;
buttons.forEach((b) =>{
 b.addEventListener('click', ()=>{
     if (b.classList.contains("btnprev")){
         count--;
     }
     else if (b.classList.contains("btnnext")){
         count++;
     }

     const counter = document.querySelector("#count");
     counter.textContent = count;
     
     if (count<0){
         counter.style.color = "red";
     }

     else if(count>0){
         counter.style.color = "lightgreen";
     }
     else {
        counter.style.color = "black";
     }
 });
});