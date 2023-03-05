const palindromes = function (word) {
    characters = ["!", ".", ",", " ", "?"]
    word = Array.from(word.toLowerCase())
    console.log("backup word", word)

    // Make a copy of our original word to reverse it 
    var reverse_word = []
    for(letter in word){
        reverse_word.push(word[letter])
    }
    reverse_word.reverse()

    new_word = []
    original_word = []

    original_word = word.filter(element => !characters.includes(element))
    new_word = reverse_word.filter(element => !characters.includes(element))

    console.log("Original word", original_word)
    console.log("New word ", new_word)
    
    const iguales = original_word.length === new_word.length && original_word.every((valor, indice) => valor === new_word[indice]);

    if(iguales){
        return true
    }
    else{
        return false
    }
    
};

// Do not edit below this line
module.exports = palindromes;
