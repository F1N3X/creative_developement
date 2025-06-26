const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.clientWidth * 2;
const height = canvas.clientHeight * 2;

canvas.width = width;
canvas.height = height;

const img = new Image();
img.src = 'assets/logo.png';
img.onload = () => {
    const scale = 2;
    const imgWidth = img.width * scale;
    const imgHeight = img.height * scale;
    const x = (canvas.width - imgWidth) / 2;
    ctx.drawImage(img, x, 100, imgWidth, imgHeight);
};