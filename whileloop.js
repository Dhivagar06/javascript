
// while loop
let i=10;
while (i<=16){
    console.log(i);
    i++
}

// do loop
let tamil=5;i=5;english=3
do{
  console.log(tamil +"x"+i+"="+english);
  i++
}while(i<10)

// for loop
let array=[];
for(d=0;d<=100;d++){
    array.push(d)
}
console.log(array);
 
// nexted for loop

let dhiva = [];

for (let i = 0; i <= 3; i++) {
  dhiva.push([]);
  for (let d = 0; d < 3; d++) {
    dhiva[i].push(d);
  }
}

console.log(dhiva);

// for of loop

for( let dhivagar of dhiva){
    console.log(dhivagar);
}

// for in loop

let inloop={
    name:"dhivagar",
    age:20
}
for(let forin in inloop){
    console.log(forin +":"+inloop[forin]);
}

// looping over objects by convering array

let arr=Object.keys(inloop);
console.table(arr)

let ar=Object.values(inloop);
console.table(ar)

// label locking

let names=[
    ["arun" , "sam" , "dhiva"],
    ["kanagaral" , "dhiva" , "dhivagar"]
]
for(let name of names){
    for(let members of name){
    
        if(members.startsWith("d")){
            console.log("found the name :",members);
        }
    }
}