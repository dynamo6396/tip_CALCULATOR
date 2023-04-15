const tipamount=document.getElementById('tipinput')
const billamount=document.getElementById('billinput')
const perpersontotal= document.getElementById('perpersontotal')
const noofpeople= document.getElementById('no_of_people')
let people=Number(noofpeople.innerText)
function calculateBill(){
    const bill=Number(billamount.value)
    const tippercen=Number(tipamount.value)/100;
    const tip=bill*tippercen

    const total=tip+bill

    const perperson=total/people

    perpersontotal.innerText=`$${perperson.toFixed(2)}`
}
const increasepeople =()=>{
    people+=1;
    noofpeople.innerText=people;
    calculateBill()
}
const decreasepeople=()=>{
    people-=1;
    if(people<=1){
        return ;
    }
    noofpeople.innerText=people;
    calculateBill()
}