/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    let otv = "";
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 3) {
            otv += "fizz";
        }
        if (n[i] % 5) {
            otv += "buzz";
        }
        console.log(i);
        if (otv.length > 0) {
            onsole.log(otv);
        }
        else {
            console.log(i);
        }
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));