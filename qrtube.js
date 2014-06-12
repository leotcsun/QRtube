
function main() {
    var tabUrl;
    var qrcode;
    var contentInputBox = "#content-input-box";
    var generateButton = "#generate-button";

    function updateQRcode(content) {
        if (qrcode == null) {
            qrcode = new QRCode($("#qrcode")[0], {
                text: content,
                width: 128,
                height: 128
            });

        } else {
            qrcode.clear();
            qrcode.makeCode(content);
        }

        $("#qrcode img")[0].addEventListener("click", function() {
            var date = Date().toString().replace(/:/g, "").split(" ");

            chrome.downloads.download({
              url: $("#qrcode img").attr("src"),
              filename: "QRtube" + "-" + date[3] + "-" + date[1] + "-" + date[2] + "-" + date[4] + ".png"
            });
        });
    }


    document.addEventListener('DOMContentLoaded', function() {
        updateQRcode("QRtube");

        chrome.tabs.getSelected(null,function(tab) {
            var tabUrl = tab.url;
            $(contentInputBox).val(tabUrl);
            updateQRcode(tabUrl);
        });

        $(contentInputBox).keyup(function() {
            updateQRcode($(this).val());
        });

        $(contentInputBox).on('mouseup', function() { $(this)[0].select(); });
    });

};
main();