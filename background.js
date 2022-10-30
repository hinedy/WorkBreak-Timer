chrome.action.onClicked.addListener(tab => {
    chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup",
        height: 450,
        width: 320,
        top: 250,
        left: 1100

    });
});
