let N = 4;
let numbers = [1, 2, 3, 4]; 
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < N; i++) {
  if (numbers[i] % 2 === 0) {
    evenSum += numbers[i];
  } else {
    oddSum += numbers[i];
  }
}
if (evenSum > oddSum) {
  document.body.innerHTML = "even"; 
} else {
  document.body.innerHTML = "odd";
}