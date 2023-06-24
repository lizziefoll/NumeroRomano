//criar referencias ao elementos da pagina 
const frm = document.querySelector("form"); 
const resp1 = document.querySelector("pre"); 
const resp2 = document.querySelector("h3"); 


frm.addEventListener("submit", (e) => {
    //evita o envio do formulário 
    e.preventDefault(); 

    const num = String(frm.inDecimal.value); 

    const frase = ["I", "II", "III", "IV", "V", "IV", "IIV", "IIIV", "IX", "X", "L", "C", "D", "M"]; 

    if(num == frase[0]){
        resp2.innerText = `1`;
    }else if(num == frase[1]){
        resp2.innerText = `2`;
    }else if(num == frase[2]){
        resp2.innerText = `3`;
    }else if(num == frase[3]){
        resp2.innerText = `4`;
    } else if(num == frase[4]){
        resp2.innerText = `5`;
    } else if(num == frase[5]){
        resp2.innerText = `6`;
    } else if(num == frase[6]){
        resp2.innerText = `7`;
    } else if(num == frase[7]){
        resp2.innerText = `8`;
    } else if(num == frase[8]){
        resp2.innerText = `9`;
    } else if(num == frase[9]){
        resp2.innerText = `10`;
    } else if(num == frase[10]){
        resp2.innerText = `50`;
    } else if(num == frase[11]){
        resp2.innerText = `100`;
    } else if(num == frase[12]){
        resp2.innerText = `500`;
    } else if(num == frase[13]){
        resp2.innerText = `1000`;
    } 

})