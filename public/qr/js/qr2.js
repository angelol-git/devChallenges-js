const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url = urlParams.get('url');

const downloadButton = document.getElementById("download-button");
const shareButton = document.getElementById("share-button");
const qrCodeEl = document.getElementById("qr-code");
const modal = document.getElementById("modal");
downloadButton.addEventListener("click", handleDownload);
shareButton.addEventListener("click", handleShare);

let qrCode = new QRCode(qrCodeEl, {
    text: url,
    width: 256,
    height: 256
});

function handleDownload() {
    const imageSrc = qrCodeEl.lastChild.src;
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `QR-Code:${url}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function handleShare() {
    navigator.clipboard.writeText(window.location.href);

    modal.classList.add('show');
    setTimeout(() => {
        modal.classList.remove('show');
    }, 1500); // Modal will be shown for 1 second 
}