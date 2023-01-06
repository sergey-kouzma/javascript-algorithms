/*
 * Задача 6: «Уникальные числа»
 *
 * Напишите функцию uniq(arr), принимающую на вход массив целых чисел.
 * Функция должна возвращать массив уникальных чисел, которые содержатся
 * в переданном массиве. То есть, дубликаты должны быть удалены.
 * 
*/

function uniq(arr) {
    let result = [];
    let chek = true;
    for (let i = 0; i < arr.length; i++) {
        if (result .length > 0) {
            for (let j = 0; j < result.length; j++) {
                if (arr[i] === result[j]) {
                    chek = false;
                    break;
                }
            }
            if (chek) {
                result.push(arr[i]);
            }
            chek = true;
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(uniq([1, 2, 5, 4, 2])); // [1, 2, 5, 4]
console.log(uniq([3, 3, 3, 5])); // [3, 5]
console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]