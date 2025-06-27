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
const nutCracker = new Image();

let nutCrackerLoaded = false;
let yeeepeeeeeeLoaded = false;
let collineLoaded = false;
let logoLoaded = false;
let heroLoaded = false;

nutCracker.src = 'assets/monsters/nut_cracker.png';
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
nutCracker.onload = () => {
    nutCrackerLoaded = true;
    maybeStart();
} 
collineImg.onload = () => {
    collineLoaded = true;
    maybeStart();
}
yeeepeeeeee.onload = () => {
    yeeepeeeeeeLoaded = true;
    maybeStart();
}
function maybeStart() {
    let nutCrackerOpacity = 0;
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
            // monsters
            // Définir l'opacité pour nutCracker (modifiable dynamiquement)
            if (nutCrackerOpacity <= 0) {
                shouldAppear = true;
            } else if (nutCrackerOpacity > 0.3) {
                shouldAppear = false;
            }
            if (shouldAppear) {
                nutCrackerOpacity += 0.01; // Augmente l'opacité progressivement
            } else {
                nutCrackerOpacity = nutCrackerOpacity < 0.01 ? 0 : nutCrackerOpacity - 0.01; 
            }

            ctx.save();
            ctx.globalAlpha = nutCrackerOpacity;
            ctx.drawImage(
                nutCracker,
                0,
                height - nutCracker.height * 0.5 - 200,
                nutCracker.width * 0.35,
                nutCracker.height * 0.35
            );
            ctx.restore();
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

            // === Création d'un buffer temporaire ===
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = canvas.width;
            tempCanvas.height = canvas.height;
            const tempCtx = tempCanvas.getContext('2d');
            tempCtx.putImageData(imageData, 0, 0);

            // === Distorsion CRT sinusoïdale ===
            for (let y = 0; y < canvas.height; y++) {
                const amplitude = 1 + Math.random() * 2; // variation légère
                const offset = Math.sin(y * 0.02 + performance.now() * 0.01) * amplitude;
                ctx.drawImage(tempCanvas, 0, y, canvas.width, 1, offset, y, canvas.width, 1);
            }

            // === Déchirements VHS (horizontal tearing) ===
            for (let i = 0; i < 3; i++) {
                const tearY = Math.random() * canvas.height;
                const tearHeight = 5 + Math.random() * 50;
                const tearOffset = (Math.random() - 0.5) * 100;
                ctx.drawImage(tempCanvas, 0, tearY, canvas.width, tearHeight, tearOffset, tearY, canvas.width, tearHeight);
            }

            // === Scanlines animées ===
            const scanOffset = performance.now() / 10 % canvas.height;
            ctx.fillStyle = 'rgba(255, 0, 0, 0.03)';
            for (let y = -scanOffset; y < canvas.height; y += 2) {
                ctx.fillRect(0, y, canvas.width, 1);
            }

            // === Bandes rouges VHS ===
            const stripeHeight = 20;
            for (let y = 0; y < height; y += stripeHeight * 1.5) {
                ctx.fillStyle = `rgba(150, 0, 0, 0.07)`; // plus marqué et foncé
                ctx.fillRect(0, y, width, stripeHeight);
            }

            // === Bruit vidéo (grain) ===
            const noiseDensity = 0.02;
            const noisePixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < noisePixels.data.length; i += 4) {
                if (Math.random() < noiseDensity) {
                    const val = 50 + Math.random() * 50;
                    noisePixels.data[i] = val;
                    noisePixels.data[i + 1] = val;
                    noisePixels.data[i + 2] = val;
                    noisePixels.data[i + 3] = 50;
                }
            }
            ctx.putImageData(noisePixels, 0, 0);

            setTimeout(() => requestAnimationFrame(drawGlitchFrame), 80);
        }

        drawGlitchFrame();
    }
}