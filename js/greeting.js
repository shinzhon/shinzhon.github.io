function setUser() {
    let userInput = document.getElementById("username");
    let name = "Anonymous";
    if(userInput && userInput.value){
        name = userInput.value;
    }
    let resultLabel = document.getElementById("result");
    if(resultLabel){
        resultLabel.innerText = "Hello " + name;
    }
}