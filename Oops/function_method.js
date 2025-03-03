class Student{
    constructor(name,email,course,Address,number){
        this.name=name;
        this.email=email;
        this.course=course;
        this.Address=Address;
        this.number=number;
    }
    // Function
    leave(){
        console.log("I am on leave...");
        
    }

    //Method

    PrintDetails(){
        console.log(this.name,this.email,this.course,this.Address,this.number);
    }
}

let std=new Student("yashvi","yashvi@gmail.com","full-stack","abcxyz",1234567890);
let std2=new Student("krisha","krisha@gmail.com","microbilogy","qwertyu",9876543210);
// std2.leave();
std.PrintDetails();
