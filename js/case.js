/* 

1.add event on button
2. get the value of default number
3.convert to number
4.increment
5.set the new number
*/

/* case items */

function upgradeCaseNumber(isincrease){
    const caseNumberFeild = document.getElementById('case-number-feild') ;
    const caseNumberFeildstring = caseNumberFeild.value;
    let previousCaseNumber = parseInt(caseNumberFeildstring);
    let newCaseNumber;

    if(isincrease){
        newCaseNumber = previousCaseNumber +1
    }
        
    else{
         newCaseNumber = -- previousCaseNumber
        }

        caseNumberFeild.value = newCaseNumber;
        return newCaseNumber
} 

/* case item price */

function updateCaseTotal (quantiy){
    
    const caseTotalPrice = quantiy * 59

    const caseTotalElement = document.getElementById('case-total')

    caseTotalElement.innerText = caseTotalPrice
}


/* increment */
document.getElementById('btn-case-plus').addEventListener('click',function(){
 
    const newCaseNumber = upgradeCaseNumber(true)
    
    updateCaseTotal(newCaseNumber)
    calculateSubTotal()
})


/* 
--------decrement--------
*/
document.getElementById('btn-case-minus').addEventListener('click',function(){

    const newCaseNumber = upgradeCaseNumber(false)
  
    updateCaseTotal(newCaseNumber)
    calculateSubTotal()
})
