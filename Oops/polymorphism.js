// Method overloading in Polymorphism
class student {
    constructor() { }
    sum(a, b) {
        console.log(a + b);
    }
    sum(a, b, c) {
        console.log(a + b + c);
    }
}

// let std2=new student();
// std2.sum(10,23);

// let sum1=new student();
// sum1.sum(10,20);

let sum2 = new student();
sum2.sum(12, 23, 34);