let x = document.querySelector("#bt1");
let y = document.querySelector("#bt2");
let z = document.querySelector("#bt3");
let text = document.querySelector("#txt");

x.onclick = () =>{
    
    text.innerText --;
}

y.onclick = () =>{
    
    text.innerText = 0;
}
z.onclick = () =>{
    
    text.innerText ++;
}