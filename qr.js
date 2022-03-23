let qrData = document.getElementById('qr-data');

let qr = document.getElementById('qrcode');

let qrcode = new QRCode(qr);

function generateQR(){

    let data = qrData.value;

  let v =  qrcode.makeCode(data);

}
