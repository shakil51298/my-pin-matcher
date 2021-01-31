// RANDOM()
// var NumberToString = split+'';
// for (let i = 0; i < NumberToSting.length; i++) {
//     const string = NumberToSting[i];
    
// }
// if()

// function RANDOM(){
//     var Random = (Math.random()*10000+'');
// var split = Random.split('.')[0];
// console.log(split);
// }

const GeneratePin = document.getElementById('generate-Btn');
GeneratePin.addEventListener('click', function () {
    const geneRateInput = document.getElementById('generate-input').value;
    document.getElementById('generate-input').value = GetPin();
})

function GetPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return GetPin();
    }
}
const AllBtn = document.getElementById('calc-btns');
AllBtn.addEventListener('click', function (event) {
    const digit = event.target.innerText;

    if (isNaN(digit)) {


        if (digit === 'C') {
            document.getElementById('submit-input').value = ' ';
        }
        if (digit === 'B') {
            const typedInput = document.getElementById('submit-input');
            // typedInput.value = typedInput.value - ;
            var shakil = document.getElementById('submit-input');
            const deletDigit = shakil.value -shakil.value;
            document.getElementById('submit-input').value = deletDigit;
        }
        
    } else {
        const typedInput = document.getElementById('submit-input');
        typedInput.value = typedInput.value + digit;
    }
});

const SubmitBtn = document.getElementById('Submit-btn');
SubmitBtn.addEventListener('click', function () {
    VerifyPin();
    // console.log('shakil')
})

function VerifyPin() {
    const pin = document.getElementById('generate-input').value;
    const pinNumber = parseInt(pin);
    const typedpin = document.getElementById('submit-input').value;
    const typedpinNumber = parseInt(typedpin)
    
    if (pinNumber === typedpinNumber) {
        document.getElementById('pinok').style.display = "block";
        document.getElementById('pinWrong').style.display = "none";

    }
    else {
        document.getElementById('pinWrong').style.display = "block";
        document.getElementById('pinok').style.display = "none";
    }
}

// const Btn = document.getElementById('btn-One');
// Btn.addEventListener('click', function () {
//     var BtnOne = 1;
//     document.getElementById('submit-input').value = BtnOne;
// })

// const Btns = document.getElementById('btn-Three');
// Btns.addEventListener('click', function () {
//     var BtnThree = 3;
//     document.getElementById('submit-input').value = BtnThree;
// })