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
const JesterSkull = new Image();
const giant = new Image();
const bracken = new Image();
const coilHead = new Image();
const butler = new Image();
const spider = new Image();

let spiderLoaded = false;
let butlerLoaded = false;
let coilHeadLoaded = false;
let giantLoaded = false;
let JesterSkullLoaded = false;
let nutCrackerLoaded = false;
let yeeepeeeeeeLoaded = false;
let collineLoaded = false;
let logoLoaded = false;
let heroLoaded = false;
let brackenLoaded = false;

spider.src = 'assets/monsters/spider.webp';
butler.src = 'assets/monsters/butler.png';
coilHead.src = 'assets/monsters/coil_head.png';
bracken.src = 'assets/monsters/bracken.png';
giant.src = 'assets/monsters/giant.webp';
nutCracker.src = 'assets/monsters/nut_cracker.png';
yeeepeeeeee.src = 'assets//monsters/youpi_bug.png';
collineImg.src = 'assets/colline.png';
logoImg.src = 'assets/logo.png';
heroImg.src = 'assets/heroe_walk.png';
JesterSkull.src = 'assets/monsters/jesterSKull.webp';

let spiderScales = [
    0.2,
    0,
    0
]
let butlerScales = [
    0,
    0.25,
    0
]
let coilHeadScales = [
    0, 
    2, // scale for coil head
    0
]
let GiantScales = [
    0.3, // scale for giant
    0,
    1
]
let NutcrackerScales = [
    0.35, // scale for nutcracker
    0,
    0
]
let JesterSkullScales = [
    1.5, // scale for Jester Skull
    2,
    0
]
let brackenScales = [
    1.5, // scale for bracken
    1.5,
    0
]

let spiderSpots = [
    {
        inverted: false,
        x: width - (spider.width * spiderScales[0]),
        y: height / 2 - (spider.height * spiderScales[0]/ 2) +50,
        width: spider.width * spiderScales[0],
        height: spider.height * spiderScales[0]
    },
    {
        inverted: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
        {
        inverted: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
]
let butlerSpots = [
    {
        inverted: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    {
        inverted: false,
        x: 0,
        y : height / 2 - 100,
        width: butler.width * butlerScales[1],
        height: butler.height * butlerScales[1]
    },
        {
        inverted: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
]
let coilHeadSpots = [
    {
        inverted: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    {
        inverted: true,
        x: width - (coilHead.width * coilHeadScales[1]) + 150,
        y: height / 2 - 200,
        width: coilHead.width * coilHeadScales[1],
        height: coilHead.height * coilHeadScales[1],
    },
        {
        inverted: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
]
let GiantSpots = [
    {
        inverted: false,
        x: width / 2 - (giant.width * GiantScales[0] /2),
        y: height / 2 - 185 - (giant.height * GiantScales[0] / 2),
        width: giant.width * GiantScales[0],
        height: giant.height * GiantScales[0]
    }, 
    {
        inverted: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    {
        inverted: false,
        x: width / 2 - (giant.width * GiantScales[2] /2),
        y: height / 2 - (giant.height * GiantScales[2] / 2) + 400,
        width: giant.width * GiantScales[2],
        height: giant.height * GiantScales[2]
    },
    
]
const NutcrackerSpots = [
    {
        inverted: false,
        x: 0,
        y: height / 2 - 300,
        width: nutCracker.width * NutcrackerScales[0],
        height: nutCracker.height * NutcrackerScales[0]
    },
    {
        inverted: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
        {
        inverted: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
]
const JesterSkullSpots = [
    {
        inverted: false,
        x: 0, 
        y: 0 + JesterSkull.height * JesterSkullScales[0] / 2,
        width: JesterSkull.width * JesterSkullScales[0],
        height: JesterSkull.height * JesterSkullScales[0]
    },
    {
        inverted: false,
        x: width / 2 - (JesterSkull.width * JesterSkullScales[0] / 2) - 50,
        y: height / 2 - (JesterSkull.height * JesterSkullScales[0] / 2) - 200,
        width: JesterSkull.width * JesterSkullScales[1],
        height: JesterSkull.height * JesterSkullScales[1]
    },
        {
        inverted: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
]

const BrackenSpots = [
    {  
        inverted: false,
        x: width - bracken.width * brackenScales[0],
        y: height / 2 + 200,
        width: bracken.width * brackenScales[0],
        height: bracken.height * brackenScales[0]
    },
    {
        inverted: true,
        x: 0,
        y: height / 2 - butler.height * butlerScales[1],
        width: bracken.width * brackenScales[1],
        height: bracken.height * brackenScales[1]
    },
        {
        inverted: false,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
]
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
JesterSkull.onload = () => {
    JesterSkullLoaded = true;
    maybeStart();
}
giant.onload = () => {
    giantLoaded = true;
    maybeStart();
}
bracken.onload = () => {
    brackenLoaded = true;
    maybeStart();
}
coilHead.onload = () => {
    coilHeadLoaded = true;
    maybeStart();
}
butler.onload = () => {
    butlerLoaded = true;
    maybeStart();
}
spider.onload = () => {
    spiderLoaded = true;
    maybeStart();
}
const AllMonsters = [
    {
        name: 'nutcracker',
        image: nutCracker,
        spots: NutcrackerSpots,
    },
    {
        name: 'giant',
        image: giant,
        spots: GiantSpots,
    },
    {
        name: 'jesterSkull',
        image: JesterSkull,
        spots: JesterSkullSpots,
    },
    {
        name: 'bracken',
        image: bracken,
        spots: BrackenSpots,
    },
    {
        name: 'coilHead',
        image: coilHead,
        spots: coilHeadSpots,
    },
    {
        name: 'butler',
        image: butler,
        spots: butlerSpots,
    },
    {
        name: 'spider',
        image: spider,
        spots: spiderSpots,
    }
]
function maybeStart() {
    let nutCrackerOpacity = 0;
    let shouldSelect = true;
    if (logoLoaded && heroLoaded && nutCrackerLoaded && collineLoaded && yeeepeeeeeeLoaded && JesterSkullLoaded && giantLoaded && brackenLoaded && coilHeadLoaded && butlerLoaded && spiderLoaded) {
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
            if (shouldSelect) {
                selectedConfig = Math.floor(Math.random() * 3);
            }
            // Définir l'opacité pour 
            if (nutCrackerOpacity <= 0) {
                shouldAppear = true;
                shouldSelect = false;
            } else if (nutCrackerOpacity > 0.15) {
                shouldAppear = false;
            }
            if (shouldAppear) {
                nutCrackerOpacity += 0.01; // Augmente l'opacité progressivement
            } else {
                nutCrackerOpacity = nutCrackerOpacity < 0.01 ? 0 : nutCrackerOpacity - 0.01; 
                if (nutCrackerOpacity <= 0) {
                    shouldSelect = true;
                }
            }

            ctx.save();
            ctx.globalAlpha = nutCrackerOpacity;
            for (let monster of AllMonsters) {
                const spot = monster.spots[selectedConfig];
                if (spot && spot.inverted) {
                    ctx.save();
                    ctx.scale(-1, 1);
                    // Correction du flip horizontal : position X miroir correcte
                    const flippedX = -(spot.x + spot.width);
                    ctx.drawImage(
                        monster.image,
                        flippedX,
                        spot.y,
                        spot.width,
                        spot.height
                    );
                    ctx.restore();
                } else if (spot) {
                    ctx.drawImage(
                        monster.image,
                        spot.x,
                        spot.y,
                        spot.width,
                        spot.height
                    );
                }
            }
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