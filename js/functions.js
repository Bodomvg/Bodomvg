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

/*
function getInfo(currency = '$') {
    console.log(currency + this.price);
    console.log(this.model)
}
const getIn = {             //This в контексте вызова равен самому объекту
    model: 'intel',
    price: 100,
    getInfo
}

const getAmd = {             //This в контексте вызова равен самому объекту
    model: 'Amd',
    price: 200,
    getInfo
}
getIn.getInfo();
getAmd.getInfo();
getInfo.call(getAmd, 'RUB');
getInfo.apply(getIn, ['Byn']);

setTimeout(getIn.getInfo, 1000) //setTimeout работает в window у которго нету метода getin

const getInfoChange = getIn.getInfo.bind(getIn, 'Byr: ')    // bind - передает контекст в котором будет вызываться метод, так же передает параметры
setTimeout(getInfoChange, 1000)*/

// //1
// const rectangle = {
//     width: 100,
//     height: 50,
//     getSquare() {console.log(this.width * this.height)}
// };
// rectangle.getSquare();
//
// //2
// const price = {
//     price: 10,
//     discount: '15%',
//     getPrice() {console.log(this.price)},
//     getPriceWithDiscount() {
//         console.log(this.price - (this.price / 100 * parseInt(this.discount)))
//     }
// };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5
//
// //3
// const object = {
//     height: 10,
//     numberPlus(){
//         console.log(++this.height)
//         return(this.height)
//     }
// }
// object.height = 10;
// object.numberPlus(); // придумать свое название для метода
// console.log(object); // 11;
//
// //4
// const numerator = {
//     value: 1,
//     double: function () {
//         this.value = this.value * 2
//         return this
//     },
//     plusOne: function () {
//         this.value = this.value + 1
//         return this
//     },
//     minusOne: function () {
//         this.value = this.value - 1
//         return this
//     }
// }
// numerator.double().plusOne().plusOne().minusOne();
// console.log(numerator.value);
//
// //5
// const sale = {
//     price: 15,
//     quantity: 5,
//     sum(){
//         return this.price * this.quantity;
//     }
// }
// console.log(sale.sum());
//
// //6
// const saleNew = {
//     price: 13,
//     quantity: 8
// }
// saleNew.sum = sale.sum;
// console.log(saleNew.sum());
//
// //7
// let sizes = {
//     width: 5,
//     height: 10
// },
// getSquare = function () {
//     return this.width * this.height;
// };
// console.log(getSquare.call(sizes));
//
// //8
// let element = {
//     height: 25,
//     getHeight: function () {
//         return this.height;
//     }
// };
// let getElementHeight = element.getHeight.bind(element);
//
// getElementHeight(); // undefined

/*Arrow Function*/
// const arr = () => {     //Вариант возвращения объекта в стрелочной функции
//     return {
//         name: 'One',
//         lastName: 'two'
//     }
// }
// const arrow = () => ({   //Вариант возвращения объекта в стрелочной функции
//     name: 'One',
//     lastName: 'two'
// })

// const arrowObj = {      //this равен window
//     name: 'One',
//     age: 31,
//     nameStr: () => {
//         return console.log(this);
//     }
// }

// const arrowObj = {      //this равен window
//     name: 'One',
//     age: 31,
//     nameTest: null,
//     nameStr: () => {
//         //return console.log(this.nameStr = ()  => this);     //this равен этой функции
//         setTimeout(() => console.log(this));        //??????????????
//     }
// }
// arrowObj.nameStr();

//HOMEWORK
// const sum = (...args) => {
//     if (!args.length) return 0;
//     return args.reduce((prev, next) => prev + next);
// }
// sum(1, 2, 3, 4); // 10
// sum(); // 0
//
// const convertToObject = (num) => ({
//         value: num,
//         isOdd: Boolean(num % 2)
// })

function minus(num = 0){
    return function (number = 0){
        return console.log(num - number);
    }
}
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0





