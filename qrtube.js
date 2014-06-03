var tabUrl;
var qrcode;

chrome.tabs.getSelected(null,function(tab) {
    tabUrl = tab.url;
    $("#url-input-box").val(tabUrl);
    qrcode = new QRCode(document.getElementById("qrcode"), {
        text: tabUrl,
        width: 128,
        height: 128
    });
});


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("generate-btn").addEventListener('click', function(){
    var content = $("#url-input-box").val();
    qrcode.clear();
    qrcode.makeCode(content);
  });
});