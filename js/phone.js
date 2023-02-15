/* funtion for items  */
function upgradePhoneNumber(isincrease){
    const phoneNumberFeild = document.getElementById('phone-number-feild') ;
    const phoneNumberFeildstring = phoneNumberFeild.value;
    let previousPhoneNumber = parseInt(phoneNumberFeildstring);
    let newPhoneNumber;

    if(isincrease){
        newPhoneNumber = previousPhoneNumber +1
    }
        
    else{
         newPhoneNumber = -- previousPhoneNumber
        }

        phoneNumberFeild.value = newPhoneNumber;
        return newPhoneNumber
} 
/* funtion for price of items */
function updatePhoneTotal (quantiy){
    
    const phoneTotalPrice = quantiy * 1219

    const phoneTotalElement = document.getElementById('phone-total')

    phoneTotalElement.innerText = phoneTotalPrice
}





/* phone item icrease */
document.getElementById('btn-phone-plus').addEventListener('click',function(){

    const newPhoneNumber = upgradePhoneNumber(true)
    
    updatePhoneTotal(newPhoneNumber)

    calculateSubTotal()

})

/* phone item decrease  */
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber = upgradePhoneNumber(false)
  
    updatePhoneTotal(newPhoneNumber)

   calculateSubTotal()
})