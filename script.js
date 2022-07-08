
for(let i=1; i<11; i++){
    console.log(i);
}

for(let i=10; i>0; i--){
    console.log(i);
}

let i=1;

while(i<11){
    console.log(i);
    i++;
}

i--;

while(i>0){
    console.log(i);
    i--;
}

i++;

do{
    console.log(i);
    i++;
}while(i<11)

i--;

do{
    console.log(i);
    i--;
}while(i>0)

let constnumbers= [1,2,3,4,5,6,7,8,9,10];

for(let num of constnumbers){
    console.log(num);
}

let word = prompt("Please give me a word");

for(i=word.length; i<10; i++){
    word = " " + word;
}
console.log(word);