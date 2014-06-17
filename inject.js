function inject(){
    function updateFloatingQRcode(content) {
        $("#float-qr-code canvas").remove();
        $("#float-qr-code").qrcode({ width: 128, height: 128, text: content });
        $("#float-qr-code").attr("title", content).attr("src", $("#float-qr-code canvas")[0].toDataURL());
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
        z-index: 2999999999;\
        text-align: right;\
        border: solid 10px white;\
        ");
    document.body.appendChild(div);
    updateFloatingQRcode(QRcodeContent);

    $("#float-qr-code").click(removeFloatingQRcode);
};

inject();

