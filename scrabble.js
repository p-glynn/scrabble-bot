

const ctrl = {
    alphabet: 'abcdefghijklmnopqrstuvwyxz',
    numbers: '1234567890',
    scrabblefy: () => {
        // slice first two arguments out of array - node install and file
        const words = process.argv.slice(2)[0].split(' ')
        let output = ''
        words.forEach(word => {
            output += `${ctrl.convertWord(word)}  ` // 2 spaces at the end for visibility
        })
        console.log(output)
        ctrl.pbcopy(output)
    },

    convertLetter: (letter) => {
        // slack already has some emojis so we have to append numbers to a few letters
        const twos = 'abmvx'
        if (letter === ' ') return '  '
        if (twos.includes(letter)) letter += 2
        else if (letter === 'o') letter += 3
        return `:${letter}:`
    },

    convertWord: (word) => {
        const letters = word.split('')
        let output = ''
        letters.forEach(letter => {
            if (ctrl.alphabet.includes(letter)) {
                output += ctrl.convertLetter(letter)
            } else if (ctrl.numbers.includes(letter)) {
                output += ctrl.convertNumber(letter)
            }
        })
        return output
    },
    convertNumber: (input) => {
        if (typeof input !== 'number') input = parseInt(input)
        switch (input) {
            case 1:
                return ':one:'
            case 2:
                return ':two:'
            case 3:
                return ':three:'
            case 4:
                return ':four:'
            case 5:
                return ':five:'
            case 6:
                return ':six:'
            case 7:
                return ':seven:'
            case 8:
                return ':eight:'
            case 9:
                return ':nine:'
            case 0:
                return ':zero:'
            default:
                break;
        }
    },
    pbcopy: (stringToCopy) => {
        const { stdin } = require('child_process').spawn('pbcopy')
        stdin.write(stringToCopy)
        stdin.end()
    }
}

ctrl.scrabblefy()
