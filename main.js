//============================== PART 1 ================================= 
const form = document.querySelector('#form-1');
const inputText = document.querySelector('#input-text');
const inputSubmit = document.querySelector('#input-submit');

// FUNCTION EVENT LISTENER FOR FORM
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // ALERT USER BY DISPLAYING TEXT INPUT
    let str =
        'You added' +
        ' ' + inputText.value +
        ' to Krabby Patty Formula ';
    alert(str);
})


//============================== PART 2 ================================= 
const form2 = document.querySelector('#form-2');
const buns = document.querySelector('#buns');
const cheese = document.querySelector('#cheese');
const sesame = document.querySelector('#sesame');
const tomatoes = document.querySelector('#tomatoes');
const lettuce = document.querySelector('#lettuce');
const ketchup = document.querySelector('#ketchup');
const pickles = document.querySelector('#pickles');
const mayonnaise = document.querySelector('#mayonnaise');
const mustard = document.querySelector('#mustard');
const onions = document.querySelector('#onions');

// FUNCTION EVENT LISTENER FOR INGREDIENTS
form2.addEventListener('submit', function (event) {
    event.preventDefault();

    // READ VALUE OF CHECK BOXES
    console.log('buns:', buns.checked);
    console.log('meat', meat.checked);
    console.log('cheese', cheese.checked);
    console.log('sesame', sesame.checked);
    console.log('tomatoes', tomatoes.checked);
    console.log('lettuce', lettuce.checked);
    console.log('ketchup', ketchup.checked);
    console.log('pickles', pickles.checked);
    console.log('mayonnaise', mayonnaise.checked);
    console.log('mustard', mustard.checked);
    console.log('onions', onions.checked);

    // ALERT USER BY DISPLAYING WHAT INGREDIENTS WERE CHOOSEN
    let str =
        'Your' +
        inputText.value +
        ' Krabby Patty Has:';

    if (buns.checked) {
        str += 'buns, ';
    }
    if (meat.checked) {
        str += 'meat, ';
    }
    if (cheese.checked) {
        str += 'cheese, ';
    }
    if (sesame.checked) {
        str += 'sesame, ';
    }
    if (tomatoes.checked) {
        str += 'tomatoes, ';
    }
    if (lettuce.checked) {
        str += 'lettuce, ';
    }
    if (ketchup.checked) {
        str += 'ketchup, ';
    }
    if (pickles.checked) {
        str += 'pickles, ';
    }
    if (mayonnaise.checked) {
        str += 'mayonnaise, ';
    }
    if (mustard.checked) {
        str += 'mustard, ';
    }
    if (onions.checked) {
        str += 'onions';
    }
    alert(str);


});

//============================== PART 3 ================================= 
const form3 = document.querySelector('#form-3');
const date = document.querySelector('#haircut-date');
const text = document.querySelector('#haircut-text');
const long = document.querySelector('#haircut-long');
const short = document.querySelector('#haircut-short');
const input = document.querySelector('#input-submit');

// FUNCTION EVENT LISTENER 
form3.addEventListener('submit', function (event) {
    event.preventDefault();

    // ALERT USER BY DISPLAYING TEXT INPUT
    let str =
        'You Haircut is scheduled with ' +
        ' ' + text.value 
        ' on date: ' + date.value;
    alert(str);
})

//============================== PART 4 ================================= 
const form4 = document.querySelector('#form-4');
const userName = document.querySelector('#username-text');
const email = document.querySelector('#email-text');
const password = document.querySelector('#password-text');
const confirmPassword = document.querySelector('#confirm-password');

// FUNCTION EVENT LISTENER
form4.addEventListener('submit', function (event) {
    event.preventDefault();

    // ALERT USER BY DISPLAYING TEXT INPUT
    let str = 
    ' Your Username is ' +
    ' ' + userName.value + ' ' + ' and your email is:' 
    + ' ' + email.value; 

    alert(str);
})