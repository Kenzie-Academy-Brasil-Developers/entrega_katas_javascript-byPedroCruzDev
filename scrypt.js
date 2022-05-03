
 
//Extras 01
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
 

