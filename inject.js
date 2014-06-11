
function updateFloatingQRcode(content) {
    qrcode = new QRCode($("#float-qr-code")[0], {
        text: content,
        width: 128,
        height: 128
    });
};


var qrcode;

var element = document.getElementById("float-qr-code");
if (element) {
    element.parentNode.removeChild(element);
}

var div = document.createElement("div");
div.id = "float-qr-code";
div.setAttribute("style", "\
    background-color: white;\
    width: 128px;\
    height: 128px;\
    position: fixed;\
    top: 20px;\
    right: 20px;\
    z-index: 9999;\
    border: solid 10px white;\
    ");
// div.innerHTML = "dfghjklfghjk";
document.body.appendChild(div);
updateFloatingQRcode(QRcodeContent);