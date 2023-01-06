/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    let result = [2];
    for (let i = 1; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                break;
            }
            result.push(i);
            break;
        }            
    }
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]