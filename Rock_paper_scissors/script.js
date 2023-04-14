get_computer_choice =()=>{
    let choice=["Rock ", "Paper ","Scissor"]
    return choice[Math.floor(Math.random()*3)]
}
const get_answer = (com,user) => {
    console.log(com)
    console.log(user)
    let ans
 
   if(com ==='Rock'&& user ==='Paper'){
    ans= "YOU WIN"
   }
   else if(user ==='Rock'&& com ==='Scissor'){
    ans= "YOU WIN"
   }
   else if(user ==='Scissor'&& com ==='Paper'){
    ans= "YOU WIN"
   }
   else if( com === user){
     ans= " IT IS CLASH "
   }
   else{
     ans= "YOU LOOSE"
   }
   return ans
}
function showresult(answer,players_choice,computer_choice){
       let hands=document.getElementById('hands')
       hands.innerText=`👱‍♂️${players_choice} vs 💻${computer_choice}`
       let score=document.getElementById('result')
       score.innerText=answer
}

function onclickrps(players_choice){
    const computer_choice=get_computer_choice()
    const answer=get_answer(computer_choice,players_choice)
    showresult(answer,players_choice,computer_choice)
}
function play_game(){
    let rpsbuttons=document.querySelectorAll('.rpsbutton')
    rpsbuttons.forEach(rpsbutton=>{
        rpsbutton.onclick=()=>{
            onclickrps(rpsbutton.value)
        }
    })
    let endgamebutton=document.getElementById('endgame')
    endgamebutton.onclick =()=>engame()
}
function engame(){
    let hands=document.getElementById('hands')
    let result=document.getElementById('result')
    hands.innerText=''
    result.innerText=''
}
play_game()
