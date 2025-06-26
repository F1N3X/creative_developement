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
    const y = 100;

    function drawGlitchFrame() {
        // Dessine l’image normale
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, imgWidth, imgHeight);

        // Applique l'effet glitch sur quelques bandes
        const bandCount = 5 + Math.floor(Math.random() * 5);
        for (let i = 0; i < bandCount; i++) {
            const sliceY = y + Math.random() * imgHeight;
            const sliceHeight = 5 + Math.random() * 10;
            const offsetX = (Math.random() - 0.5) * 40;

            ctx.drawImage(
                canvas,
                x, sliceY, imgWidth, sliceHeight,
                x + offsetX, sliceY, imgWidth, sliceHeight
            );
        }

        // Reprogrammer la prochaine frame
        setTimeout(() => {
            requestAnimationFrame(drawGlitchFrame);
        }, 120); // vitesse en millisecondes
    }

    drawGlitchFrame();
};