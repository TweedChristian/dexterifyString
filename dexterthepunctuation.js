const readline = require("readline")
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

input.question("Provide some text to 'dexterify'\n", (answer) => {
     //!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
    const punctuationCharacters = ['!',"\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","\`","{","|","}","~"]
    let punctuationString = ''
    let textString = answer
    console.log("\n")
    punctuationCharacters.forEach((char) => {
        while(textString.indexOf(char) !== -1){
            punctuationString = punctuationString.concat(char)
            textString = textString.replace(char, "")
         }
         punctuationString.concat("\n")
    })
    console.log(textString)
    console.log("Here's some punctuation you can do what you please with")
    console.log(punctuationString)
    input.close()
})
