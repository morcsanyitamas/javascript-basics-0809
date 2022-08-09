// let numbers = [10, 20, 30, 40, 50];


// numbers[2.5] = 999;
// console.log(numbers);

// for(let index = 0; index < numbers.length; index++){
//     console.log(numbers[index]);

// }

// console.log(numbers.length);

// for(let number in numbers){
//     console.log(number);
// }


window.addEventListener('keydown', function (event){
    event.preventDefault();
    let button = document.getElementById(event.key);
    button.classList.add('keypressed');
})