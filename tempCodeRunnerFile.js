const calc=()=>({
     add:(a,b)=>a+b,
     sub:(a,b)=>a-b,
     mul:(a,b)=>a*b,
     div:(a,b)=>a/b,
});
const calculator=calc();
console.log(calculator().add(10,6));
console.log(calculator().sub(10,6));
console.log(calculator().mul(10,6));
console.log(calculator().div(10,6));