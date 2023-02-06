
//style switch
function onClickStyle(style){
    let darkButton = document.getElementById("dark");
    let lightButton = document.getElementById("light");
    let outer = document.getElementById("shell");
    shell.setAttribute("class", style);
    if(style==="indexDark"){
        darkButton.style.display = "none";
        lightButton.style.display = "";
    }
    else{
        darkButton.style.display = "";
        lightButton.style.display = "none";
        
    }
}

//email validation
function onClickFeedback(){
    let mail = document.getElementById("email");
    let text = document.getElementById("text");

    if(mail.value.length===0){
        window.alert("Please enter an email");
    }
    else{
        window.alert("Thank you for your submission!")
    }
}

