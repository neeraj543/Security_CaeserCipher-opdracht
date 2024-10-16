const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ[';
// Offset from the letter 'T'
const letter = 'T'
const offset = alphabet.indexOf(letter) + 1;
const codeword = 'SREERAJ';


function encode(message, codeword, offset){
    let encodedMessage = "";
    message = message.toUpperCase().replace(/ /g, '[');

    for(let i = 0; i < message.length; i++){
        const messageChar = message[i];
        const messageIndex = alphabet.indexOf(messageChar) + 1;


        const codeWord = codeword[i % codeword.length];
        const codeWordIndex = alphabet.indexOf(codeWord) + 1;


        let totalShift = (messageIndex + codeWordIndex + offset) % 27;

        if(messageIndex === 27){
            totalShift = 27;
        }

        encodedMessage += alphabet[totalShift - 1];
    }
    return encodedMessage;
}


const message = "ATTACK AT DAWN";
const encodedMessage = encode(message, codeword, offset);
console.log("Encoded Message:", encodedMessage);
