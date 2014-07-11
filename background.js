(function() {
    var qrcode;

    chrome.contextMenus.create({
        "id": "QRtubeContextMenu",
        "title": "QRtube",
        "contexts": ["page", "selection", "link", "image"]
    });

    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        if (tab) {

            var content;
            if (info.linkUrl) {
                content = info.linkUrl;
            } else if (info.selectionText) {
                content = info.selectionText;
            } else if (info.mediaType === "image") {
                content = info.srcUrl;
            } else {
                content = tab.url;
            }

            /* Inject the code into the current tab */
            chrome.tabs.executeScript(tab.id, { code: 'QRtubeContent = "' + content + '";' });
            chrome.tabs.executeScript(tab.id, { file: "inject.js" });
        }
    });

    function updateQRcode(content) {
        content = unescape(encodeURIComponent(content));

        if (qrcode == null) {
            qrcode = new QRCode($("#floater")[0], {
                text: content,
                width: 128,
                height: 128
            });

        } else {
            qrcode.clear();
            qrcode.makeCode(content);
        }
    };
})();
