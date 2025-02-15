let word1 = "red and white";
let vowelCount = 0;
for (let i = 0; i < word1.length; i++) {
    if ('aeiou'.includes(word1[i].toLowerCase())) {
        vowelCount++;
    }
}
console.log(vowelCount);
