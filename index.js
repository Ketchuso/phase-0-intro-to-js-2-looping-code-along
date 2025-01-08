// Code your solutions in this file

const thanks = [];

function writeCards(nameArray, message){
    
    for(let i = 0; i < nameArray.length; i++){
        const messages = `Thank you, ${nameArray[i]}, for the wonderful ${message} gift!`;
        thanks.push(messages);
    } 
    return thanks;
}

writeCards(nameArray, message);

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}