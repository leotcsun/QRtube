
function main() {
    var tabUrl;
    var qrcode;
    var contentInputBox = "#content-input-box";
    var generateButton = "#generate-button";

    document.addEventListener('DOMContentLoaded', function() {
        chrome.tabs.getSelected(null,function(tab) {
            tabUrl = tab.url;
            $(contentInputBox).val(tabUrl);
            qrcode = new QRCode($("#qrcode")[0], {
                text: tabUrl,
                width: 128,
                height: 128
            });
        });

        $(generateButton)[0].addEventListener('click', function() {
            var content = $(contentInputBox).val();
            qrcode.clear();
            qrcode.makeCode(content);
        });

        $(contentInputBox).on('mouseup', function() { $(this)[0].select(); });
    });


};
main();