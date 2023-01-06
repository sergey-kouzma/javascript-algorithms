/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            for (let o = 0; o < arr2.length; o++) {
                if (arr2[i] === arr1[j] && arr2[i] !== result[o]) {
                    result.push(arr2[i]);
                    break;
                }
            }
        }
    }
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 1, 5, 2], [8, 91, 4, 1, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []