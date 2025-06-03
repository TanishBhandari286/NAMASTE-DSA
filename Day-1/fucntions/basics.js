function printhello(){
    console.log("hello world");
    
}

let a = 10;

printhello()

function greet (name){
    console.log("Namaste ,"+name);
    
}
greet("Tanish")

function sum(a,b){
let sum = a+b;
console.log(sum);

}

sum(3,90)

function square(a){
    squares = a*a
    return squares
}

console.log(square(2))

// create a func that accepts the age and tells whether the person is eligible to vote or not

function voteelig(age){
    if(age<1){
        return "error 404"
    }
    if(age>=18)
        return "u can vote"
    else{
return "u cant vote"
    }
}

let age = 9;
console.log(voteelig(age));

// create a func if number is even or odd

function evenodd(num){

    if(num%2==0){
        return "even number"
    }
    else{
        return "odd number"
    }
}

console.log(evenodd(45));




