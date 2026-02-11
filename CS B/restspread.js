// function add(...numbers){  //restoperator catch multiple values and convert into array
//     let total=0;
//     // for(let i=0;i<numbers.length;i++){
//     //     total=total+numbers[i];
//     // }

//     for(let i of numbers){
//         total=total+i;
//     }
//     return total
// }
// console.log(add(1,2,3,4,5));   //console.log(add([1,2,3,4,5]));   if we take function add(numbers)



// let a=[1,2,3,14,15,22];
// let [first,sec,...last]=a;
// console.log(first,sec,...last);

// let arr1=[10,11,12];
// let arr2=[...arr1];
// console.log(arr2);

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr=[...arr1,...arr2];
// console.log(arr);


// function test(...args){
//     console.log(args);

// }
// let arr=[1,2,3];
// test(...arr);

// const isEven = (nums) => {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             console.log(nums[i] + " Even");
//         } else {
//             console.log(nums[i] + " Odd");
//         }
//     }
// };

// isEven([1, 2, 3, 4, 5]);


// reverse=(str)=>{
//     let rev="";
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i];
//     }
//     return  rev;
// }
// console.log(reverse("Jyoti"));



// const aver=[20,40,55,66,35];
//     aver.forEach(avg=>{
//         if(avg>=40){
//             console.log("Pass");
//         }else{
//             console.log("Fail");
//         }
//     });

let uITeam=[10,20,30];
let flutterTeam=[40,50,60];
let showAll=[...uITeam,...flutterTeam];
//console.log(showMenu);
function display(teamType,option){
    switch(teamType){
    case 1:
        console.log(uITeam);
        console.log(flutterTeam);
        break;
        case 2:
            console.log(flutterTeam);
            console.log(uITeam);
            break;
            case 3:
                console.log(showAll);
                break;
                default:
                    console.log("Invalid option");
}}




