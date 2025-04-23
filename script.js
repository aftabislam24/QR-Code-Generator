let qrCode = document.querySelector(`.qr-code`);
let qrText = document.querySelector(`.qr-text`);
let generateBtn = document.querySelector(`.generate-btn`);
let whatsappBtn = document.querySelector(`#whatsapp`);      

function generateQr(){
    if(qrText.value.length > 0){
        qrCode.src="//api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value ;
        qrCode.classList.add("animate");
    }
    
}

generateBtn.addEventListener(`click`,generateQr)
