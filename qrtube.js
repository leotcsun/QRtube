(function() {
    var tabUrl;
    var qrcode;
    var contentInputBox = "#content-input-box";
    var generateButton = "#generate-button";

    function updateQRcode(content) {
        $("#qrcode canvas").remove();
        $("#qrcode").qrcode({ width: 128, height: 128, text: content });
        $("#qrcode canvas").attr("title", content).attr("src", $("#qrcode canvas")[0].toDataURL());

        $("#qrcode canvas")[0].addEventListener("click", function() {
            var date = Date().toString().replace(/:/g, "").split(" ");

            chrome.downloads.download({
              url: $("#qrcode canvas").attr("src"),
              filename: "QRtube" + "-" + date[3] + "-" + date[1] + "-" + date[2] + "-" + date[4] + ".png"
            });
        });
    }


    document.addEventListener('DOMContentLoaded', function() {
        chrome.tabs.getSelected(null,function(tab) {
            var tabUrl = tab.url;
            $(contentInputBox).val(tabUrl);
            updateQRcode(tabUrl);
        });

        $(contentInputBox).on("keyup", function() {
            updateQRcode($(this).val());
        });

        $(contentInputBox).on('mouseup', function() { $(this)[0].select(); });
    });

})();