/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    finder = finder.toLowerCase();
    Friend = Friend.toLowerCase();
    let otvs = [];
    for (let i = 0; i < finder.length; i++) {
        atThese:for (let j = 0; j < Friend.length; j++) {
            for (let o = 0; o < otvs.length; o++) {
                if (Friend[j] !== otvs[o]) {
                    if (finder[i] === Friend[j]) {
                        otvs.push(Friend);
                        break atThese;
                    }
                    else{
                        if (j === Friend.length) {
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false