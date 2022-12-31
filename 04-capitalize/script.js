/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let result = "";
    let words = str.slamp(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        for (let j = 0; j < word.length; j++) {
            if (j === 0) {
                result += word[j].toUpperCase();
            }
            else {
                result += word[j];
            }
        }
    }
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"