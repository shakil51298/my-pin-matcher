
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
            document.getElementById('submit-input').value = '';
        }
        if (digit === 'B') {
            backspace();

        }
    } else {
        const typedInput = document.getElementById('submit-input');
        typedInput.value = typedInput.value + digit;
    }
});
function backspace() {
    var currentInput = document.getElementById('submit-input').value;
    document.getElementById('submit-input').value = currentInput.substr(0, currentInput.length - 1);
}
const SubmitBtn = document.getElementById('Submit-btn');
SubmitBtn.addEventListener('click', function () {
    VerifyPin();
    tryleft();
    document.getElementById('submit-input').value = '';
    document.getElementById('generate-input').value = '';
})
function VerifyPin() {
    const pin = document.getElementById('generate-input').value;
    const pinNumber = parseInt(pin);
    const typedpin = document.getElementById('submit-input').value;
    const typedpinNumber = parseInt(typedpin)

    if (pinNumber === typedpinNumber) {
        document.getElementById('pinok').style.display = "block";
        document.getElementById('pinWrong').style.display = "none";

    } else {
        document.getElementById('pinWrong').style.display = "block";
        document.getElementById('pinok').style.display = "none";
    }
}

function tryleft() {
    let trying = document.getElementById('tryLeft').innerText;
    let tryingParse = parseInt(trying);
    let totaltried = tryingParse - 1;
    document.getElementById('tryLeft').innerText = totaltried;
   
    if (totaltried < 0) {
        var againTry = document.getElementById('tryLeft').innerText;
        var againTryParse = parseInt(againTry);
        var zero = againTryParse * 0;
        document.getElementById('tryLeft').innerText = zero;
        alert('please Reload the page and \n get more 3 try! {shakil}')
    }

    
}

