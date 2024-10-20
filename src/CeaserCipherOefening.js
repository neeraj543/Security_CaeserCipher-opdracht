const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ[';
// Offset of the letter 'T'
const letter = 'T'
const offset = alphabet.indexOf(letter) + 1;
const codeword = 'SREERAJ';

//ENCRYPT
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


//DECRYPT
function decode(encodedMessage, codeword, offset) {
    let decodedMessage = "";

    for (let i = 0; i < encodedMessage.length; i++) {
        const encodedChar = encodedMessage[i];
        const encodedIndex = alphabet.indexOf(encodedChar) + 1;

        const codeWord = codeword[i % codeword.length];
        const codeWordIndex = alphabet.indexOf(codeWord) + 1;

        let originalShift = (encodedIndex - codeWordIndex - offset);


        if (originalShift <= 0) {
            while (originalShift <= 0) {
                originalShift += 27;
            }
        }
        // originalShift = ((originalShift % 27) + 27) % 27;

        if (encodedIndex === 27) {
            originalShift = 27;
        }

        decodedMessage += alphabet[originalShift - 1];
    }

    return decodedMessage.replace(/\[/g, ' ');
}


// Example usage:
const message = "ATTACK AT DAWN";
const encodedMessage = encode(message, codeword, offset);
console.log("Encoded Message:", encodedMessage);

const decodedMessage = decode(encodedMessage, codeword, offset);
console.log("Decoded Message:", decodedMessage); // Expected output: "ATTACK AT DAWN"