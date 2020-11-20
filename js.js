'use strict';
// //Függvények 1-es feladat
//function handleClick(){
//(onclick= button => console.log('the name of the button'));
//}
//handleClick();

(function handleClick() {
    const buttons = document.querySelectorAll('.button');
    for (let i=0; i< buttons.length; i += 1){
        buttons[i].addEventListener('click', (event) => {
            console.log(event.target.textContent);
            console.log('Clicked', i);
        })
    }
})();

// Függvények 2-es feladat
let a;
let b;
const summation = (a=0,b=0) => { return a+b};
console.log(summation(a,b));

console.log(summation(10,12));
console.log(summation(10));

const subtraction=(a=0,b=0) => a-b;
console.log(subtraction(a,b));

console.log(subtraction(10,12));

// Függvények 3-as feladat
const personDataLog = ({firstname='John', lastname='Doe', age=33}={})=>{
    return 'My name is ' + firstname + ' ' + lastname+ '. '+'I\'m ' + age + ' years old.';
    }
    console.log(personDataLog({firstname:'Nóra', lastname:'KissnéJánosi', age:'31'}));
