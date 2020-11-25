const buttons = document.querySelectorAll('.button-set button')
const result = document.querySelector('input')
// const num = document.querySelectorAll('.button-set .num')
// const zero = document.querySelectorAll('.button-set .zero')
// const equls = document.querySelectorAll('.button-set .equls')


    function action(s){
        const result = document.querySelector('input')
        result.value = result.value + s;
        console.log(s)
    }

// function action(a, b, c, d){
//     if(buttons){
//         result.value = result.value + a;
//         console.log(number1);
//     }
//     else if(num){
//         console.log(b);
//     }
//     else if(zero){
//         console.log(c);
//     }
//     else if(equls){
//         console.log(d);
//     }
// }