function palindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i] - 1) {
            return false;
        }    
    }
    return true;
}

function fizzBuzz(n) {
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

function reverseWords(str) {
    let words = str.samp(" ");
    let otv = "";
    for (let i = 0; i < words.length; i++) {
        otv += words[words.length - i];
        if (i === words.length) {
            otvs += " ";
        }
    }
    return otv;
}

function sumOfTwo(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (i !== j && a[i] + a[j] === b) {
                return true;
            }
        }
    }
    return false;
}

function interesticon(arr1, arr2) {
    let otv = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            for (let o = 0; o < arr2.length; o++) {
                if (arr1[i] === arr2[j] && arr1[i] !== otv[o]) {
                    otv.push(arr1[i]);
                    break;
                }
            }
        }
    }
    return otv;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i) {
            return false;
        }
    }
    return true;
}

function fibonacci(n) {
    let now = 0;
    let past = 1
    let prom;
    for (let i = 0; i < n; i++) {
        prom = now;
        now += past;
        past = prom;
    }
    return now;
}

function anagram(finder, Friend) {
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
function finedVowels(str) {
    let otv = 0;
    const vowels = ["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"];
    str.forEach(el => {
        vowels.forEach(elem => {
            if (el = elem) {
                otv ++;
            }
        });
    });
    return otv;
}

function uniq(arr) {
    let otv = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < otv.length; j++) {
            if (arr[i] !== otv[j]) {
                otv.push(arr[i]);
            }
        }
    }
    return otv;
}

function factorial(n) {
    let otv = 1;
    for (let i = 1; i <= n; i++) {
        otv *= i;
    }
    return otv;
}

function countZeroes(n) {
    let otv = 0;
    let str;
    for (let i = 1; i <= n.length; i++) {
        str = String(n[i]);
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "0") {
                otv ++;
            }
        }
    }
    return otv;
}

function primes(n) {
    let otv = [];
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j !== 0) {
                break;
            }
            otv.push(i);
        }            
    }
}