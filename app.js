const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')
const carsLeft = document.querySelectorAll('.car-left')
const carsRight = document.querySelectorAll('.car-right')

const reloadButton = document.querySelector('#reload')

let currentIndex = 76
const width = 9
let timerId
let currentTime = 10
let outcomeTimerId

function moveFrog(e) {
    squares[currentIndex].classList.remove('frog') // this simply looks for 76th div and removes the class

    switch (e.key) {
        case 'ArrowLeft':
            if (currentIndex % width !== 0) currentIndex -= 1// console.log('left 16 years old bruh')
            break

        case 'ArrowRight':
            if (currentIndex % width < width - 1) currentIndex += 1 //console.log('hes got it right, if he aint deluding me')
            break

        case 'ArrowUp':
            if (currentIndex - width >= 0) currentIndex -= width   //console.log('i look up to the Heavens')
            break

        case 'ArrowDown':
            if (currentIndex + width < width * width) currentIndex += width     //console.log('looking down to see how much ground ')
            break
    }
    squares[currentIndex].classList.add('frog')
}

function autoMoveElements() {
    currentTime--
    timeLeftDisplay.textContent = currentTime
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
    carsRight.forEach(carRight => moveCarRight(carRight))
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))

}

function checkOutcomes () {
    lose()
    win()
}

function moveLogLeft(logLeft) {
    switch(true) {
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')

            break

            case logLeft.classList.contains('l2'): 
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')

            break

            case logLeft.classList.contains('l3'): 
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')

            break

            case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')

            break

            case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')

            break
    }
}