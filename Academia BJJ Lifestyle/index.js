console.log("Hello World")

//prompt("What's your name?");



function writeToConsole(){
    console.log("This is my function");
}

function helloName(name){
    alert("Hello" + name);
}

writeToConsole();
helloName();

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
        console.log("Silence");
    }

    let coffeOrder = [
        "Alex - Cortado",
        "Ben - Cortado",
        "Charlie - Whatever's new"
        ]; 
        
        coffeOrder[1] = "Ann - Vanilla Latte";
        
        console.log(coffeOrder[1]);
        console.log(coffeOrder.length)
        coffeOrder.push("Bob - Milk")
        console.log(coffeOrder);
        coffeOrder.pop();
        coffeOrder.unshift("Teresa - Water")
        confirm.log(coffeOrder);


