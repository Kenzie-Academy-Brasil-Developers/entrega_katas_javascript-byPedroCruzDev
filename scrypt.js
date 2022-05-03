 //Extras 01 numeros
//1- Crie uma função que recebe um array 
//e conta quantos números negativos tem nesse array.
  function amountsNegative(array){

    let negatives = 0;

    for(let index = 0; index < array.length; index++){

        if(array[index] < 0 ){
            negatives++
        }
    } return negatives ++
}

console.log(amountsNegative([-1, -2, -3, -4, -54])) 
 

//Extra 02 numeros
//crie uma função que recebe um array
// e soma todos os números negativos desse array.
 
function sumNegatives(array){

    let negatives = 0;
    for(let value =0; value <= array.length; value++){
        
        if(array[value] < 0){
           //negatives = array[value] + array[value]
           negatives += array[value]
        }
    }
    return negatives

}
console.log(sumNegatives([-1, -2, 3, 4, - 4]))

// Extra 03 numeros
// crie uma função que recebe um numero como parametro
// e retorna um array
// contendo todos os numeros pares existentes
//entre 0 e i número passado no parametro
 
function pairs(array){
    
    let numbersPairs = [];

    for(let index =0; index <= array; index ++){

        if(index % 2 === 0){
            numbersPairs.push(index)
        }
    } return numbersPairs

}


console.log(pairs(20)) 

//extras 4 numeros
//crie uma função que recebe um array
//e retorna todos os números negativos.

function negativeNumbers(array){

    let negativeCounter = [];

    for(let index = 0; index < array.length; index++){

        if(array[index] < 0){
            negativeCounter.push(array[index])
        }
    } return negativeCounter;
}
console.log(negativeNumbers([-1, -2, -8, 4, -44]))

// extra 5 numeros
//crie uma funçao que recebe um array
//e retorna true se a soma dos valores do array 
//for maior que o numero de elementos do array.
//(o array pode receber numeros negativos)
 
function sumLength(array){

    let sumArray = 0;
    let arrayLength = array.length;
    for(let i = 0; i <= array.length; i++){
        sumArray += array[i];
        if(sumArray > arrayLength){
             return true
        }else{
            return false;
        }
    }
}
console.log(sumLength([-2,1,1]))

//Extras 06 numeros
//crie uma função que recebe um array 
//e soma 5 a todos os elementos,
// após isso retorna o array.

function sumArray(array){

    let arrayValue= [];

    for(let index=0; index < array.length; index++){
        let novoArray = array[index] + 5  
        arrayValue.push(array[index] + 5) 
      
    }
   
 return arrayValue
    }
console.log(sumArray([5,5,5,5])) 

//Extra 7- numeros
//crie uma função que retorna todos os valores de um array 
//que sao maiores que a média do array.

function avarege(array){
    let media = 0;
    let maior = [];
    for( let i = 0; i < array.length; i++){
        media += array[i] / array.length
    }
    for( let j = 0; j < array.length; j++){
        if(array[j] > media)
        maior.push(array[j])
    }return maior
}
console.log(avarege([1, 2, 4, 23, 15, 33])) 



//strings

//extras 1- strings
//Crie uma função que recebe uma string 
//e conta quantas letras 'a' existem.

function letras(letrasA){

    let counter = 0;
    

    for(let index = 0; index < letrasA.length; index++){

        if(letrasA[index] === 'a' || letrasA[index] === 'A' ){
            counter ++
        }
    }
    return counter ++
}
console.log(letras('Kenzie Academy Brasil')) 

//extra 2- strings
//crie uma função que recebe um array de strings
// e soma todos comprimentos das palavras.

function stringLength(array){

    let wordLength = 0;

    for(let index =0; index < array.length; index++){
        
      wordLength += array[index].length
    }
    return wordLength
}
console.log(stringLength(['mesa', 'cadeira', 'pc', 'luzz'])) 

//extra 03 strings
//crie uma função que recebe uma frase 
//e retorna um array 
//com as palavras que possuem comprimento impar.

function wordImpar(arrayWord){
    
    let imparWords = [];
    let array2 = arrayWord.split(' ')
    for(let index = 0; index < array2.length; index++){
        if(array2[index].length % 2 !== 0){
            imparWords.push(array2[index])
        }
    }
    return imparWords

}
console.log(wordImpar("Lorem Ipsum is simply aaaaa aaa aa")) 

//Extra 4- strings
//crie uma função que recebe uma string
//e substitui todas as letras 'o' por 0.

function letraO (string){

    

    return string.replace(/o/gi, "0")
}
console.log(letraO("Ola, ola, ola, ola"))


//Extras 5- strings
//crie uma função que recebe uma string
// e substitui todos os 'p' por 'P'.

function stringP (string){

    return string.replace(/p/g, 'P')

}
console.log(stringP('Lorem Ipsum is simply dummy text of the printing and typesetting industry'))











