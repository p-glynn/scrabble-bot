

const ctrl = {
    alphabet: 'abcdefghijklmnopqrstuvwyxz',
    numbers: '1234567890',
    scrabblefy: () => {
        // slice first two arguments out of array - node install and file
        const words = process.argv.slice(2)
        console.log(words)
        let output = ''
        words.forEach(word => {
            output += `${ctrl.convertWord(word)}`
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
            if (alphabet.includes(letter)) {
                output += ctrl.convertLetter(letter)
            }
        })
        return output
    }
    ,
    pbcopy: (stringToCopy) => {
        const { stdin } = require('child_process').spawn('pbcopy')
        stdin.write(stringToCopy)
        stdin.end()
    }
}

const { scrabblefy, alphabet } = ctrl
scrabblefy(alphabet)
