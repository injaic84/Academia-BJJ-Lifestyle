console.log("Hello World");

let a = 29
let b = "Harry";

{
    let b = "this";
    let a = 38;
    console.log(b); //output this
    console.log(a); 
}


function addUp(num1,num2){
    return num1+num2;
}

console.log(addUp(2,4));

let music = "Classical";
    if (music == "Classical"){
        console.log("Classical!")
    }
    
    else if (music == "no music"){
        console.log("No music.");
    }
    else{
        console.log("Silence")
    }