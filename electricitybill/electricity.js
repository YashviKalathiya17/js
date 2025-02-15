function Bill() {
    let units = document.getElementById("unit").value;

    let amount1 = 0;
    let fees = 100;
    if (units <= 50) {
        amount1 = units * 5;
    }
    else if (units > 50 && units <= 100) {
        amount1 = 50 * 5 + (units - 50) * 10;
    }
    else if (units > 100 && units <= 150) {
        amount1 = 50 * 5 + 50 * 10 + (units - 100) * 15;
    }
    else if (units > 150) {
        amount1 = 50 * 5 + 50 * 10 + 50 * 15 + (units - 150) * 20;
    }
    lastAmount = amount1 + fees;
    console.log(lastAmount);

    document.getElementById("result").innerHTML = "amount:" + lastAmount;
}