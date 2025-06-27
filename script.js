const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.clientWidth * 2;
const height = canvas.clientHeight * 2;
canvas.width = width;
canvas.height = height;

const logoImg = new Image();
const heroImg = new Image();
const collineImg = new Image();
const yeeepeeeeee = new Image();

let yeeepeeeeeeLoaded = false;
let collineLoaded = false;
let logoLoaded = false;
let heroLoaded = false;

yeeepeeeeee.src = 'assets//monsters/youpi_bug.png';
collineImg.src = 'assets/colline.png';
logoImg.src = 'assets/logo.png';
heroImg.src = 'assets/heroe_walk.png';

logoImg.onload = () => {
    logoLoaded = true;
    maybeStart();
};

heroImg.onload = () => {
    heroLoaded = true;
    maybeStart();
};

collineImg.onload = () => {
    collineLoaded = true;
    maybeStart();
}
yeeepeeeeee.onload = () => {
    yeeepeeeeeeLoaded = true;
    maybeStart();
}
function maybeStart() {
    if (logoLoaded && heroLoaded) {
        const logoTargetHeight = height * 0.2;
        const logoScale = logoTargetHeight / logoImg.height;
        const logoWidth = logoImg.width * logoScale;
        const logoHeight = logoImg.height * logoScale;
        const logoX = (canvas.width - logoWidth) / 2;
        const logoY = 100;

        const heroTargetHeight = height * 0.35;
        const heroScale = heroTargetHeight / heroImg.height;
        const heroWidth = heroImg.width * heroScale;
        const heroHeight = heroImg.height * heroScale;
        const heroX = (canvas.width - heroWidth) / 2;
        const heroY = canvas.height - heroHeight - 275;

        function drawGlitchFrame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Logo de base
            ctx.drawImage(logoImg, logoX, logoY, logoWidth, logoHeight);

            // Glitch sur logo
            const bandCount = 5 + Math.floor(Math.random() * 5);
            for (let i = 0; i < bandCount; i++) {
                const sliceY = logoY + Math.random() * logoHeight;
                const sliceHeight = 5 + Math.random() * 10;
                const offsetX = (Math.random() - 0.5) * 40;

                ctx.drawImage(
                    canvas,
                    logoX, sliceY, logoWidth, sliceHeight,
                    logoX + offsetX, sliceY, logoWidth, sliceHeight
                );
            }

            // Héros
            ctx.drawImage(heroImg, heroX, heroY, heroWidth, heroHeight);
            //colline
            ctx.drawImage(collineImg, 0, height - collineImg.height * 2 + 200, width, collineImg.height * 2);
            //youpi
            ctx.save();
            ctx.translate(yeeepeeeeee.width * 0.5 + 120, 275);
            ctx.scale(-1, 1);
            ctx.drawImage(
                yeeepeeeeee,
                0,
                height - yeeepeeeeee.height,
                yeeepeeeeee.width * 0.5,
                yeeepeeeeee.height * 0.5
            );
            ctx.restore();
            setTimeout(() => requestAnimationFrame(drawGlitchFrame), 120);
        }

        drawGlitchFrame();
    }
}