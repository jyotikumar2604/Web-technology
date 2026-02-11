const student={
    name:"Abhishek",
    age:33,
    address:{
        city:"Gzb",
        state:"UP"
    }
}

function displaystu({name,age}){
    console.log(`My name is ${name} and age is ${age}`);
}
displaystu(student);
//const { name: stuname="Amit", age, address:{city} }=student;
//console.log(stuname,age,city);