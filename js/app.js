function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if( pinString.length === 4){
        return pin;
    }else{
        // console.log('pin not 3 digite ', pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    
     const number = event.target.innerText;
     const typedNumberField =document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;

    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }else if(number === '<'){
            const digite = previousTypedNumber.split('');
           digite.pop();
           const remainingDigites = digite.join('');
           typedNumberField.value = remainingDigites;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})


document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const succesElement = document.getElementById('succes');
    const worngElement = document.getElementById('wrong');

    if(typedNumber === currentPin){
        succesElement.style.display= 'block';
        worngElement.style.display = 'none';

    }
    else{
        worngElement.style.display = 'block';
        succesElement.style.display = 'none';
    }
})