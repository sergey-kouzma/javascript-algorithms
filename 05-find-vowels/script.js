/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
    function finedVowels(str) {
        const vowels = ["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"];
        let otv = 0;
        str.forEach(el => {
            vowels.forEach(elem => {
                if (el = elem) {
                    otv ++;
                }
            });
        });
        return otv;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3