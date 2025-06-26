const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.clientWidth * 2;
const height = canvas.clientHeight * 2;
canvas.width = width;
canvas.height = height;

const logoImg = new Image();
const heroImg = new Image();

let logoLoaded = false;
let heroLoaded = false;

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

function maybeStart() {
    if (logoLoaded && heroLoaded) {
        const scaleLogo = 2;
        const logoWidth = logoImg.width * scaleLogo;
        const logoHeight = logoImg.height * scaleLogo;
        const logoX = (canvas.width - logoWidth) / 2;
        const logoY = 100;

        const scaleHero = 0.75;
        const heroWidth = heroImg.width * scaleHero;
        const heroHeight = heroImg.height * scaleHero;
        const heroX = (canvas.width - heroWidth) / 2;
        const heroY = canvas.height - heroHeight + (150*scaleHero);

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

            setTimeout(() => requestAnimationFrame(drawGlitchFrame), 120);
        }

        drawGlitchFrame();
    }
}