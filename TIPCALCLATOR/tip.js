
//TIPC names
//input-Tipcent
//input-People
//input-Base
// ITIP is Input Tip or TipCent
// OTIP is Output Tip or TIP-AMOUNT
// ITTL is Input Total or Base
// OTTL is Output Total or TOTALED
// PPL is Input People or People
const ITIP = document.querySelector('#TipCent')
const OTIP = document.querySelector('#TIPAMOUNT')
const ITTL = document.querySelector('#Base')
const OTTL = document.querySelector('#TOTALED')
const PPL = document.querySelector('#People')
const button = document.querySelector('#Calculate')


function CalculateTip(){
    const percent = parseInt(ITIP.value)
    const dollars = parseFloat(ITTL.value)
    const Pearsons = parseInt(PPL.value)
    const tip = dollars * (percent / 100)
    const total = tip + dollars
    const finaltotal = total/Pearsons
    OTIP.innerHTML = tip
    OTTL.innerHTML = finaltotal
}