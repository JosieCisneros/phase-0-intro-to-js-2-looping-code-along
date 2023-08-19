const names = ["Guadalupe", "Ollie", "Aki"]
const event = ["surprise"]

function writeCards(names) {
    let message = [] 
    for( let i = 0; i < names.length; i++) {
        message.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return message
}
console.log (writeCards(names))


const number = "10"

function countDown(number) {
    let integer = 10
    while (integer >= 0) {
        console.log (integer--)
    }
    return integer
}
console.log (countDown(number))
