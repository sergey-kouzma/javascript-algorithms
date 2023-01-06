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
    str = str.toLowerCase();
    const vowels = ["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"];
    let result = 0;
    for(i = 0; i < str.length; i++) {
        for(j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                result ++;
                break;
            }
        };
    };
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3