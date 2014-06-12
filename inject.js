function inject(){
    function updateFloatingQRcode(content) {
        var qrcode = new QRCode($("#float-qr-code")[0], {
            text: content,
            width: 128,
            height: 128
        });
    };

    function removeFloatingQRcode() {
        var element = document.getElementById("float-qr-code");
        if (element) {
            element.parentNode.removeChild(element);
        }
    }

    removeFloatingQRcode();
    var div = document.createElement("div");
    div.id = "float-qr-code";
    div.setAttribute("style", "\
        background-color: white;\
        width: 128px;\
        height: 128;\
        position: fixed;\
        top: 20px;\
        right: 20px;\
        z-index: 9999;\
        text-align: right;\
        border: solid 10px white;\
        ");
    document.body.appendChild(div);
    updateFloatingQRcode(QRcodeContent);

    $("#float-qr-code").click(removeFloatingQRcode);
};

inject();

