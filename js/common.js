/* case price and phone frice get */
function getTextElementById(elementID){
    const p_CTotalElement = document.getElementById(elementID)
    const currentP_CTotalString = p_CTotalElement.innerText;
    const currentP_CTotal = parseInt(currentP_CTotalString)
    return currentP_CTotal;

}

/*  */
function calculateSubTotal(){
/* calculate phone total */
const currentPhoneTotal = getTextElementById('phone-total')
const currentCaseTotal = getTextElementById('case-total')

const currentsubTotal = currentCaseTotal + currentPhoneTotal
   const SubTotalElement = document.getElementById('sub-total')
   SubTotalElement.innerText = currentsubTotal


//    tax
    const taxAmountString = (currentsubTotal * 0.1).toFixed(2);

    const taxAmount = parseInt(taxAmountString)
    const taxAmontElement = document.getElementById('tax-amount')
    taxAmontElement.innerText = taxAmount;

    const finalAmount = taxAmount +  currentsubTotal;
    
    const finalAmountElement = document.getElementById('final-total')

    finalAmountElement.innerText = finalAmount;

}