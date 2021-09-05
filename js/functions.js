// function question(job){
//     const jobObj = {
//         developer: 'text number one',
//         teacher: 'number two text'
//     }
//     return function(name){
//         return `${name}, ${jobObj[job]}`
//     }
// }
// console.log(question('developer')('Sasha'));


// function firstFunc(arr, fn) {
//     let newString = 'New value: ';
//     for(let i = 0; i < arr.length; i++){
//         newString += fn(arr[i]);
//     }
//     return newString.trim();
// }

// function handler1(el) {
//     return el[0].toUpperCase() + el.slice(1);
// }

// console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

// function handler2(el) {
//     return Number(el *10) + ', ';
// }

// console.log(firstFunc([10, 20, 30], handler2) )

// function handler3(el) {
//     return `${el.name} is ${el.age}, `;
// }

// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

// function handler4(el) {
//     return el.split('').reverse().join('') + ', ';
// }

// console.log(firstFunc(['abs', '123'], handler4));




// function every(arr, fn) {
//     if(!Array.isArray(arr)) return new Error("Ошибка не массив");
//     if(!fn || typeof fn !== 'function') return new Error("Ошибка не функция");
//     for(let i = 0; i < arr.length; i++){
//         if (!fn(arr[i], i, arr)) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(every([1, 2], function(el){
//     return typeof el === 'number';
// }));

/*THIS*/

// function getThis(){     //This равен предыдущему объекту в контексте - Window
//     console.log(this);
// }
// getThis();

// const getTh = {             //This в контексте вызова равен самому объекту
//     model: 'intel',
//     price: 100,
//     getInfo: function (){
//         console.log(this)
//     }
// }
// getTh.getInfo();