let  Merry_Lotto = Number(prompt("Welcome to Merry Lotto. \n1. Pick odd numbers \n2. Pick even numbers \n3. Pick Multiples of 3 \n4. Pick muliples of 5"))

switch(Merry_Lotto){

    case 1:
        alert("Pick odd numbers from your chosen range")
        
let starting = Number(prompt("pls enter any odd number"))
let last = Number(prompt("pls enter your stop number"))

let odd_number =" "

for(let n=starting; n<last; n++){
    if(n % 2===1){

     odd_number += n + ", "}

    
    
}
 
alert(odd_number)
break;

case 2:
    alert("Pick even numbers from your chosen range")
    
let startt = Number(prompt("Pls enter your start"))
let stopp = Number(prompt("pls enter stop"))

let even_number = " "

for(let n=startt; n<stopp; n++){
    if(n % 2 === 0){
        even_number += n + ", "
    }
}

alert(even_number)
break;

case 3:
    alert("Pick lucky digit from multiples of 3 from your chosen range")

    let front = Number(prompt("pls enter your start")) 
    let back = Number(prompt("pls enter your stop"))

    let multiples_of_3 = " "

    for(let n=front; n<back; n++){
        if(n % 3 === 0){
            multiples_of_3 += n + ", "
        }
    }

    alert(multiples_of_3)
    break;

    case 4:
        alert("Pick lucky digit from multiples of 5 from your chosen range")

        let begin = Number(prompt("pls enter your start")) 
        let end = Number(prompt("pls enter your stop"))

        let multiples_of_5 = " "

        for(let n=begin; n<end; n++){
           if( n % 5 === 0){
            multiples_of_5 += n + ", "
           }

           alert(multiples_of_5)

        }
        break;

    
        default:
            alert("You have entered an invalid input")
            break;   

}
