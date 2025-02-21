const handleSubmit = (e) => {
    e.preventDefault();
    //    console.log("submitted");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let number = document.getElementById("number").value;
    let city = document.getElementById("city").value;

    console.log(name);
    console.log(email);
    console.log(address);
    console.log(number);
    console.log(city);

};


document.getElementById("form").addEventListener("submit", handleSubmit);
