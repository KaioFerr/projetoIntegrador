//sprites
import platform from '../img/platform.png'
import miniPlatform from '../img/miniPlatform.png'
import background from '../img/background.png'


import spriteStandRight from '../img/spriteStandRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'


import spriteRunRight from '../img/spriteRunRight.png'
import spriteRunLeft from '../img/spriteRunLeft.png'


import spriteJumpRight from '../img/spriteJumpRight.png'
import spriteJumpLeft from '../img/spriteJumpLeft.png'


import banner from '../img/banner.png'



//Tela
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')


canvas.width = 1024
canvas.height = 576



const gravity = 1.5

//class de Objetos
class Player {

    constructor() {
        this.points = 0
        this.callCalculator
        this.speedX = 8
        this.speedY = -24
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 100
        this.height = 100
        this.image = creatImage(spriteStandRight)
        this.frame = 0
        this.sprite = {
            stand: {
                right: creatImage(spriteStandRight),
                left: creatImage(spriteStandLeft),
                cropWidth: 80,
                range: 99
            },
            run: {
                right: creatImage(spriteRunRight),
                left: creatImage(spriteRunLeft),
                cropWidth: 80,
                range: 79
            },
            jump: {
                right: creatImage(spriteJumpRight),
                left: creatImage(spriteJumpLeft),
                cropWidth: 80,
                range: 34
            }
        }

        this.currentSprite = this.sprite.stand.right
        this.currentCropWidth = 80
        this.doubleJump;

    }


    draw() {
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frame,
            0,
            80,
            80,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    update() {
        this.frame++
        if (this.frame > this.sprite.stand.range && (this.currentSprite === this.sprite.stand.right || this.currentSprite === this.sprite.stand.left)) {
            this.frame = 0
        }
        else if (this.frame > this.sprite.run.range && (this.currentSprite === this.sprite.run.right || this.currentSprite === this.sprite.run.left)) {
            this.frame = 0
        }
        else if (this.frame > this.sprite.jump.range && (this.currentSprite === this.sprite.jump.right || this.currentSprite === this.sprite.jump.left)) {
            this.frame = 0
        }
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
        }

        if (this.callCalculator == true && keys.select.pressed == true) {
            calculator()
        }

        if (player.points == 8) {
            console.log("You win")
            showElapsedTime()
            player.points = 9
        }
    }
}

class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class GenericObject {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}


//função que cria imagens
function creatImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image
}
//criando imagens
let platformImage = creatImage(platform)
let miniPlatformImage = creatImage(miniPlatform)
let backgroundImage = creatImage(background)
let bannerImage = creatImage(banner)

//criando player
let player = new Player()


//criando plataformas
const numPlatforms = 3;
const numMiniPlatforms = 4;
const numBanner = 1
let initialX = -1;
let platforms = [];
let miniPlatforms = []
let bannerList = []


function createPlatforms(listObject, x, numObject) {
    for (let i = 0; i < numObject; i++) {
        listObject.push(new Platform({
            x: x + i * (platformImage.width - 3),
            y: 452,
            image: platformImage
        }));
    }
}


function createMiniPlatforms(listObject, x, y, numObject) {
    for (let i = 0; i < numObject; i++) {
        listObject.push(new GenericObject({
            x: x + i * (miniPlatformImage.width - 16),
            y: y,
            image: miniPlatformImage
        }));
    }
}

function createBanners(listObject, x, y) {
    for (let i = 0; i < 1; i++) {
        listObject.push(new GenericObject({
            x: x,
            y: y,
            image: bannerImage
        }));
    }
}


//plataformas
createPlatforms(platforms, -1, 3)
createPlatforms(platforms, 2000, 2)
createPlatforms(platforms, 3800, 2)
createPlatforms(platforms, 5600, 2)
createPlatforms(platforms, 7700, 2)
createPlatforms(platforms, 10230, 2)


//mini plataformas
createMiniPlatforms(miniPlatforms, 500, 300, 4)
createMiniPlatforms(miniPlatforms, 800, 400, 4)
createMiniPlatforms(miniPlatforms, 1000, 300, 4)
createMiniPlatforms(miniPlatforms, 1300, 200, 4)
createMiniPlatforms(miniPlatforms, 2000, 80, 4)
createMiniPlatforms(miniPlatforms, 2300, 160, 4)
createMiniPlatforms(miniPlatforms, 2300, 400, 4)
createMiniPlatforms(miniPlatforms, 2600, 300, 4)
createMiniPlatforms(miniPlatforms, 3500, 300, 4)
createMiniPlatforms(miniPlatforms, 4200, 300, 4)
createMiniPlatforms(miniPlatforms, 4200, 100, 4)
createMiniPlatforms(miniPlatforms, 5050, 400, 2)
createMiniPlatforms(miniPlatforms, 5200, 300, 2)
createMiniPlatforms(miniPlatforms, 5350, 200, 2)
createMiniPlatforms(miniPlatforms, 5350, 200, 2)
createMiniPlatforms(miniPlatforms, 5550, 100, 3)
createMiniPlatforms(miniPlatforms, 5800, 200, 1)
createMiniPlatforms(miniPlatforms, 6000, 200, 1)
createMiniPlatforms(miniPlatforms, 6200, 200, 1)
createMiniPlatforms(miniPlatforms, 6650, 200, 4)
createMiniPlatforms(miniPlatforms, 7100, 200, 2)
createMiniPlatforms(miniPlatforms, 7300, 200, 2)
createMiniPlatforms(miniPlatforms, 7500, 200, 2)
createMiniPlatforms(miniPlatforms, 8600, 400, 2)
createMiniPlatforms(miniPlatforms, 8800, 300, 2)
createMiniPlatforms(miniPlatforms, 9000, 200, 2)
createMiniPlatforms(miniPlatforms, 8800, 100, 2)
createMiniPlatforms(miniPlatforms, 8600, 80, 3)
createMiniPlatforms(miniPlatforms, 9300, 200, 2)
createMiniPlatforms(miniPlatforms, 9600, 200, 2)
createMiniPlatforms(miniPlatforms, 9900, 200, 2)
createMiniPlatforms(miniPlatforms, 10150, 200, 4)


//banners
createBanners(bannerList, 580, 240)
createBanners(bannerList, 1380, 144)
createBanners(bannerList, 2024, 15)
createBanners(bannerList, 4280, 42)
createBanners(bannerList, 5580, 44)
createBanners(bannerList, 6730, 146)
createBanners(bannerList, 8640, 20)
createBanners(bannerList, 10230, 144)

//criando o objeto
let genericObject = [
    new GenericObject({
        x: 0,
        y: 0,
        image: backgroundImage
    })
]

let scrollOffSet = 0

let lastKey
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    jump: {
        pressed: false
    },
    select: {
        pressed: false
    }
}

let lifePoint = 5

//função que recomeça o jogo
function init() {
    lifePoint -= 1
    platformImage = creatImage(platform)
    miniPlatformImage = creatImage(miniPlatform)
    backgroundImage = creatImage(background)
    bannerImage = creatImage(banner)

    //criando player
    player = new Player()


    //criando plataformas
    const numPlatforms = 3;
    const numMiniPlatforms = 4;
    const numBanner = 1
    initialX = -1;
    platforms = [];
    miniPlatforms = []
    bannerList = []


    function createPlatforms(listObject, x, numObject) {
        for (let i = 0; i < numObject; i++) {
            listObject.push(new Platform({
                x: x + i * (platformImage.width - 3),
                y: 452,
                image: platformImage
            }));
        }
    }


    function createMiniPlatforms(listObject, x, y, numObject) {
        for (let i = 0; i < numObject; i++) {
            listObject.push(new GenericObject({
                x: x + i * (miniPlatformImage.width - 16),
                y: y,
                image: miniPlatformImage
            }));
        }
    }

    function createBanners(listObject, x, y) {
        for (let i = 0; i < 1; i++) {
            listObject.push(new GenericObject({
                x: x,
                y: y,
                image: bannerImage
            }));
        }
    }


    //plataformas
    createPlatforms(platforms, -1, 3)
    createPlatforms(platforms, 2000, 2)
    createPlatforms(platforms, 3800, 2)
    createPlatforms(platforms, 5600, 2)
    createPlatforms(platforms, 7700, 2)
    createPlatforms(platforms, 10230, 2)


    //mini plataformas
    createMiniPlatforms(miniPlatforms, 500, 300, 4)
    createMiniPlatforms(miniPlatforms, 800, 400, 4)
    createMiniPlatforms(miniPlatforms, 1000, 300, 4)
    createMiniPlatforms(miniPlatforms, 1300, 200, 4)
    createMiniPlatforms(miniPlatforms, 2000, 80, 4)
    createMiniPlatforms(miniPlatforms, 2300, 160, 4)
    createMiniPlatforms(miniPlatforms, 2300, 400, 4)
    createMiniPlatforms(miniPlatforms, 2600, 300, 4)
    createMiniPlatforms(miniPlatforms, 3500, 300, 4)
    createMiniPlatforms(miniPlatforms, 4200, 300, 4)
    createMiniPlatforms(miniPlatforms, 4200, 100, 4)
    createMiniPlatforms(miniPlatforms, 5050, 400, 2)
    createMiniPlatforms(miniPlatforms, 5200, 300, 2)
    createMiniPlatforms(miniPlatforms, 5350, 200, 2)
    createMiniPlatforms(miniPlatforms, 5350, 200, 2)
    createMiniPlatforms(miniPlatforms, 5550, 100, 3)
    createMiniPlatforms(miniPlatforms, 5800, 200, 1)
    createMiniPlatforms(miniPlatforms, 6000, 200, 1)
    createMiniPlatforms(miniPlatforms, 6200, 200, 1)
    createMiniPlatforms(miniPlatforms, 6650, 200, 4)
    createMiniPlatforms(miniPlatforms, 7100, 200, 2)
    createMiniPlatforms(miniPlatforms, 7300, 200, 2)
    createMiniPlatforms(miniPlatforms, 7500, 200, 2)
    createMiniPlatforms(miniPlatforms, 8600, 400, 2)
    createMiniPlatforms(miniPlatforms, 8800, 300, 2)
    createMiniPlatforms(miniPlatforms, 9000, 200, 2)
    createMiniPlatforms(miniPlatforms, 8800, 100, 2)
    createMiniPlatforms(miniPlatforms, 8600, 80, 3)
    createMiniPlatforms(miniPlatforms, 9300, 200, 2)
    createMiniPlatforms(miniPlatforms, 9600, 200, 2)
    createMiniPlatforms(miniPlatforms, 9900, 200, 2)
    createMiniPlatforms(miniPlatforms, 10150, 200, 4)


    //banners
    createBanners(bannerList, 580, 240)
    createBanners(bannerList, 1380, 144)
    createBanners(bannerList, 2024, 15)
    createBanners(bannerList, 4280, 42)
    createBanners(bannerList, 5580, 44)
    createBanners(bannerList, 6730, 146)
    createBanners(bannerList, 8640, 20)
    createBanners(bannerList, 10230, 144)

    //criando o objeto
    genericObject = [
        new GenericObject({
            x: 0,
            y: 0,
            image: backgroundImage
        })
    ]

    scrollOffSet = 0

}
startTimer()
//animação
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    genericObject.forEach((genericObject) => {
        genericObject.draw()
    })

    bannerList.forEach((bannerObject) => {
        bannerObject.draw()
    })

    miniPlatforms.forEach((mPlatform) => {
        mPlatform.draw()
    })

    platforms.forEach((platform) => {
        platform.draw()
    })
    player.update()
    if (keys.right.pressed && player.position.x < 600) {
        player.velocity.x = player.speedX;
    }


    else if ((keys.left.pressed && player.position.x > 100) || keys.left.pressed && scrollOffSet == 0 && player.position.x > 0) {
        player.velocity.x = -player.speedX

    }

    else if ((keys.right.pressed && player.position.x < 600) || keys.right.pressed && scrollOffSet == 10200 && player.position.x < 10200) {
        player.velocity.x = 0

    }


    else {
        player.velocity.x = 0


        if (keys.right.pressed) {
            scrollOffSet += player.speedX
            platforms.forEach(platform => {
                platform.position.x -= player.speedX
            })
            genericObject.forEach((genericObject) => {
                genericObject.position.x -= player.speedX * 0.40
            })
            miniPlatforms.forEach((mPlatform) => {
                mPlatform.position.x -= player.speedX
            })
            bannerList.forEach((bannerObject) => {
                bannerObject.position.x -= player.speedX
            })
        } else if (keys.left.pressed && scrollOffSet > 0) {
            scrollOffSet -= player.speedX
            platforms.forEach(platform => {
                platform.position.x += player.speedX
            })
            genericObject.forEach((genericObject) => {
                genericObject.position.x += player.speedX * 0.40
            })
            miniPlatforms.forEach((miniPlatform) => {
                miniPlatform.position.x += player.speedX
            })
            bannerList.forEach((bannerObject) => {
                bannerObject.position.x += player.speedX
            })

        }

    }


    //verificar colisão
    platforms.forEach((platform) => {
        const inFloor = player.position.y + player.height <= platform.position.y && player.position.y
            + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width

        if (inFloor) {
            player.velocity.y = 0
            player.callCalculator = false
        }
    })
    miniPlatforms.forEach((miniPlatform) => {
        if (player.position.y + player.height <= miniPlatform.position.y && player.position.y
            + player.height + player.velocity.y >= miniPlatform.position.y &&
            player.position.x + player.width >= miniPlatform.position.x &&
            player.position.x <= miniPlatform.position.x + miniPlatform.width) {
            player.velocity.y = 0
            player.callCalculator = true
        }
    })

    //movimentos das sprites

    if (keys.right.pressed &&
        lastKey === 'right' &&
        player.currentSprite !== player.sprite.run.right) {
        player.frame = 1
        player.currentSprite = player.sprite.run.right
        player.range = player.sprite.run.range
        player.currentSprite = player.sprite.run.right
    }

    else if (keys.left.pressed &&
        lastKey === 'left' &&
        player.currentSprite !== player.sprite.run.left) {
        player.currentSprite = player.sprite.run.left
        player.currentCropWidth = player.sprite.run.cropWidth
        player.range = player.sprite.run.range
    }


    else if (!keys.right.pressed &&
        lastKey === 'right' &&
        player.currentSprite !== player.sprite.stand.right) {
        player.currentSprite = player.sprite.stand.right
        player.currentCropWidth = player.sprite.stand.cropWidth

    }
    else if (!keys.left.pressed &&
        lastKey === 'left' &&
        player.currentSprite !== player.sprite.stand.left) {
        player.currentSprite = player.sprite.stand.left
        player.currentCropWidth = player.sprite.stand.cropWidth
        player.range = player.sprite.stand.range
    }


    if (scrollOffSet == 500 && keys.right.pressed) {
        console.log("Condição atendida. scrollOffSet:", scrollOffSet);
        keys.right.pressed = false;
        console.log("Chamando principal()");
        calculator();
    }

    //condição perdeu
    if (player.position.y > canvas.height) {
        init()
        console.log(lifePoint)
        if (lifePoint == 0) {
            player.speedX = 0
        }
    }
}



animate()
var jumpCont = 1
//verificar tecla
addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = true
            lastKey = 'left'
            break
        case 83:
            console.log('down')
            break
        case 68:
            console.log('right')
            keys.right.pressed = true
            lastKey = 'right'
            break
        case 87:
            console.log('up')
            player.velocity.y += player.speedY
            break
        case 69:
            keys.select.pressed = true
            break
    }
})


addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = false
            lastKey = 'left'
            break
        case 83:
            console.log('down')
            break
        case 68:
            console.log('right')
            keys.right.pressed = false
            lastKey = 'right'
            break
        case 87:
            console.log('up')
            player.velocity.y = 0
            break
        case 69:
            keys.select.pressed = false
            break


    }
})



var res = 0;
var fator1 = []
var fator2 = []
var operador = []
var operacao = []

function createOperation() {

    randomNumber()

    if (operador == "+") {
        res = parseInt(fator1) + parseInt(fator2)
    } else {
        const teste = fator1 - fator2
        if (teste < 0) {
            var apoio = fator1
            fator1 = fator2
            fator2 = apoio
        }
        res = parseInt(fator1) - parseInt(fator2)
    }
    operacao = fator1 + operador + fator2
}

function randomNumber() {
    const numbers1 = "0123"
    const numbers2 = "123456789"
    const operator = "+-"
    var i = 0

    var randomNumber1 = Math.floor(Math.random() * numbers1.length)
    fator1 += numbers1.substring(randomNumber1, randomNumber1 + 1)
    randomNumber1 = Math.floor(Math.random() * numbers2.length)
    fator1 += numbers2.substring(randomNumber1, randomNumber1 + 1)

    const randomNumberO = Math.floor(Math.random() * operator.length)
    operador += operator.substring(randomNumberO, randomNumberO + 1)

    var randomNumber2 = Math.floor(Math.random() * numbers1.length)
    fator2 += numbers1.substring(randomNumber2, randomNumber2 + 1)
    randomNumber2 = Math.floor(Math.random() * numbers2.length)
    fator2 += numbers2.substring(randomNumber2, randomNumber2 + 1)

    console.log(fator1, fator2, operador)
}

function alertFunction() {
    var resposta = prompt(`Digite o resultado da operação: ${operacao}`);

    if (resposta == res) {
        fator1 = []
        fator2 = []
        operador = []
        operacao = []
        player.callCalculator = false
        keys.select.pressed = false
        player.points++
        console.log(player.points)
        return 0;
    } else {
        alertFunction()
    }
}

function calculator() {
    createOperation()
    alertFunction()
}

let startTime; // Variável para armazenar o tempo de início do jogo

// Função para iniciar o tempo
function startTimer() {
    startTime = Date.now(); // Armazena o tempo atual
}

// Função para calcular e mostrar o tempo decorrido no console
function showElapsedTime() {
    const elapsedTime = Date.now() - startTime; // Calcula o tempo decorrido
    const seconds = Math.floor(elapsedTime / 1000); // Converte milissegundos para segundos

    console.log(`Tempo decorrido: ${seconds} segundos`);
}

