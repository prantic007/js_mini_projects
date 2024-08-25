
let pass = "";

let passgen = ()=>{
    const upercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowercase = "qwertyuiopasdfghjklzxcvbnm";
    const number = "1234567890";
    const symbool = "!@#$%^&*(){}][?";
    const all = upercase + lowercase + number + symbool;
    
    let limit = 15;
    
    while(limit != 0){
        pass += all[Math.floor(Math.random() * all.length)];
        limit--;
    }
}



let bt1 = document.querySelector(".gnt");
let input = document.querySelector(".input");
let copy = document.querySelector(".copy");



bt1.addEventListener("click",(evt) =>{
    console.log("button clicked");


    passgen();

    console.log(pass);

    input.innerText = pass;
    pass = "";
});


copy.addEventListener("click",(evt) =>{
    alert("copied password");

});

const copypass = ()=>{
    input.select();
    
}
