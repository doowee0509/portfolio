const textDisplay = document.getElementById('text')
const phrases = [' Software Engineer', ' Full Stack Developer', ' Web Developer']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
    isEnd = false
    if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if(isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i === phrases.length) {
                i = 0
            }
        }
    }
    const spedUp = Math.random() * (80 -50) + 25
    const normalSpeed = Math.random() * (300 - 250) + 70
    const time = isEnd ? 1500 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}

setTimeout(loop, 1000)





