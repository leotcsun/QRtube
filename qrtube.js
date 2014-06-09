
function main() {
    var tabUrl;
    var qrcode;
    var contentInputBox = "#content-input-box";
    var generateButton = "#generate-button";

    function updateQRcode(content) {
        if (qrcode == null) {
            qrcode = new QRCode($("#qrcode")[0], {
                text: "QRtube",
                width: 128,
                height: 128
            });

        } else {
            qrcode.clear();
            qrcode.makeCode(content);
        }
    }


    document.addEventListener('DOMContentLoaded', function() {
        chrome.tabs.getSelected(null,function(tab) {
            var tabUrl = tab.url;
            $(contentInputBox).val(tabUrl);
            updateQRcode(tabUrl);
        });

        $(contentInputBox).keyup(function() {
            updateQRcode($(this).val());
        });

        // $(generateButton)[0].addEventListener('click', function() {
        //     var content = $(contentInputBox).val();
        //     qrcode.clear();
        //     qrcode.makeCode(content);
        // });

        $(contentInputBox).on('mouseup', function() { $(this)[0].select(); });
    });


};
main();