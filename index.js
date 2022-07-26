const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


const meterToFeet = 3.281 
const literTogallons = 0.264 
const kilogramToPounds = 2.204 

convertBtn.addEventListener("click", function(){
    let givenValue = inputEl.value

            
    lengthEl.textContent = `${givenValue} meter = ${givenValue * meterToFeet.toFixed(2)} feet`
    volumeEl.textContent = `${givenValue} liters = ${givenValue * literTogallons.toFixed(2)} gallons`
    massEl.textContent = `${givenValue} kilograms = ${givenValue * kilogramToPounds.toFixed(2)}pounds`
   
})
