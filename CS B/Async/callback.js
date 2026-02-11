// console.log("first");
// console.log("sec");
// ////-----Async
// console.log("3rd");

// function aa(){
//     console.log("first");
// }
// setTimeout(aa, 200);  //callback agr ek function 

// setTimeout(()=>{
//     console.log("first");
// },2000);

// let count=0;
// let id=setTimeout(()=>{
//     console.log("first");
//     count++;
//     if(count===5){
//         clearInterval(id);
//     }
// },2000);


function roll(num,next,sec){
    setTimeout(()=>{
        console.log("Roll. no. is "+num);
        if(next) next();
    },sec)
}
roll(12212,()=>{
    console.log("wait its getting downloaded");
    roll(12312,()=>{
        console.log("wait its getting downloaded");
        roll(12412,()=>
        {
             console.log("wait its getting downloaded");
             roll(12512);
        },1000);
    },2000);
},5000);

