

let turn="X"

//Function for changing the turn
let changeTurn=()=>{
   return turn==="X"?"O":"X"
}

//Function for gameover
let gameOver=()=>{
    console.log(turn + " is winner")
    let response=confirm(turn + " is winner" + "\n Do you want to play again")
    console.log(response)
    if(response){
        window.location.href=window.location.href
    }}


// winning logic
let win=()=>{
let textBox1=document.querySelector("#textBox1").innerHTML
let textBox2=document.querySelector("#textBox2").innerHTML
let textBox3=document.querySelector("#textBox3").innerHTML
let textBox4=document.querySelector("#textBox4").innerHTML
let textBox5=document.querySelector("#textBox5").innerHTML
let textBox6=document.querySelector("#textBox6").innerHTML
let textBox7=document.querySelector("#textBox7").innerHTML
let textBox8=document.querySelector("#textBox8").innerHTML
let textBox9=document.querySelector("#textBox9").innerHTML
    
if((textBox1===textBox2) && (textBox2===textBox3) && (textBox1 !=="")){  
    document.querySelector(".line").style.translate= " 0rem 5rem";
    document.querySelector("#box-1").style.background="#f1f159"
    document.querySelector("#box-2").style.background="#f1f159"
    document.querySelector("#box-3").style.background="#f1f159"
    gameOver()
}

else if((textBox4===textBox5) && (textBox5===textBox6) && (textBox4 !==``)){
    document.querySelector(".line").style.translate= " 0rem 14rem";
    document.querySelector("#box-4").style.background="#f1f159"
    document.querySelector("#box-5").style.background="#f1f159"
    document.querySelector("#box-6").style.background="#f1f159"
    gameOver()
    }

else if((textBox7===textBox8) && (textBox8===textBox9) && (textBox7 !==``)){
    document.querySelector(".line").style.translate= " 0rem 23.5rem";
    document.querySelector("#box-7").style.background="#f1f159"
    document.querySelector("#box-8").style.background="#f1f159"
    document.querySelector("#box-9").style.background="#f1f159"
    gameOver()
}

else if((textBox1===textBox4) && (textBox4===textBox7) && (textBox1 !==``)){
    document.querySelector(".line").style.translate= " -10rem 14.3rem";
    document.querySelector(".line").style.rotate= "90deg";
    document.querySelector("#box-1").style.background="#f1f159"
    document.querySelector("#box-4").style.background="#f1f159"
    document.querySelector("#box-7").style.background="#f1f159"
    gameOver()
}
else if((textBox2===textBox5) && (textBox5===textBox8) && (textBox2 !==``)){
    document.querySelector(".line").style.translate= " 0rem 14.3rem";
    document.querySelector(".line").style.rotate= "90deg";
    document.querySelector("#box-2").style.background="#f1f159"
    document.querySelector("#box-5").style.background="#f1f159"
    document.querySelector("#box-8").style.background="#f1f159"
    gameOver()
}

else if((textBox3===textBox6) && (textBox6===textBox9) && (textBox3 !==``)){
    document.querySelector(".line").style.translate= " 10rem 14.3rem";
    document.querySelector(".line").style.rotate= "90deg";
    document.querySelector("#box-3").style.background="#f1f159"
    document.querySelector("#box-6").style.background="#f1f159"
    document.querySelector("#box-9").style.background="#f1f159"
    gameOver()
}

else if((textBox1===textBox5) && (textBox5===textBox9) && (textBox1 !==``)){
    document.querySelector(".line").style.translate= " 0rem 15rem";
    document.querySelector(".line").style.rotate= "45deg";
    document.querySelector(".line").style.width= "50%";
    document.querySelector("#box-1").style.background="#f1f159"
    document.querySelector("#box-5").style.background="#f1f159"
    document.querySelector("#box-9").style.background="#f1f159"
    gameOver()
}

else if((textBox3===textBox5) && (textBox5===textBox7) && (textBox3 !==``)){
    document.querySelector(".line").style.translate= " 0rem 15rem";
    document.querySelector(".line").style.rotate= "135deg";
    document.querySelector(".line").style.width= "50%";
    document.querySelector("#box-3").style.background="#f1f159"
    document.querySelector("#box-5").style.background="#f1f159"
    document.querySelector("#box-7").style.background="#f1f159"
    gameOver()
}
else{
    turn= changeTurn();
    console.log(turn +"'s turn")
}
}

// Game Logic

let boxes=document.querySelectorAll(".box");
Array.from(boxes).forEach(element => {
    let textBox = element.querySelector(".textBox");
    element.addEventListener("click", ()=>{
       if(textBox.innerText===''){
        textBox.innerText=turn
        if(turn==="O"){
           textBox.style.color="red"
        }
        let w=win();
       }
    })
});
