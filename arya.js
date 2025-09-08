/*let arjun = 5;

 for(let i = 0; i<arjun ; i++){
    console.log("arjun" ,);
 }

console.log("arya arjun gupta"); */
let args = process.argv; 
for(let i=2; i<args.length; i++){
 console.log("welcome to" , args[i]);
}
