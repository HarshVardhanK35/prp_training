const num1 = +process.argv[2];
const isName = "Vardhan";

let d = 0;

for (let i = 0; i < num1; i++) {
    if(i % 2 == 0){
        d = d + i;
    }
}
console.log(`${d}, ${isName}`);