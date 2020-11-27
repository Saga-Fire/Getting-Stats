let listInput = [];
let input = null;
let inputInt = null;
let totalInput = 0;
let minInput = null;
let maxInput = null;
let sumInput = null;
let meanInput = null;
let i = null;
let number = null;
let message = 'Vous n\'avez saisi aucun nombre';

input = prompt('Veuillez saisir un nombre\n0 pour terminer la saisie')
inputInt = parseInt(input)

if (inputInt != 0){
    while (inputInt != 0){
        if (inputInt){
            console.log(`Vous venez d'entrer le nombre : ${inputInt}`)
            listInput.push(inputInt)
            sumInput = sumInput + inputInt
            input = prompt('Veuillez saisir un nombre\n0 pour terminer la saisie')
            inputInt = parseInt(input)
        } else {
            input = prompt('Ceci n\'est pas un nombre\nVeuillez saisir un nombre\n0 pour terminer la saisie')
            inputInt = parseInt(input)
        }
    }
    if (listInput.length != 0){
        totalInput = listInput.length
        console.log(listInput)
        minInput = listInput[0]
        maxInput = listInput[0]
        for ( i = 1 ; i <= totalInput ; i++){
            if (minInput > listInput[i]){
                minInput = listInput[i]
            }
            if (maxInput < listInput[i]){
                maxInput = listInput[i]
            }
        }
        meanInput = (sumInput / totalInput)
        if (totalInput == 1){
            number = "nombre"
        } else {
            number = "nombres"
        }
        message = `Vous avez saisi ${totalInput} ${number}\nCompris entre ${minInput} et ${maxInput}\nPour une somme de ${sumInput}\nEt une moyenne de ${meanInput}`
        console.log(message)
        alert(message)
    } else {
        console.log(message)
        alert(message)
    }
} else {
    console.log(message)
    alert(message)
}

