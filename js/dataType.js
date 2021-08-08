/**
 *Data Type
 *  1. Primitive Data Type
 *      Numbers:    2021, 1.5, NaN(not a number), infinity
 *      BigInt:     The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers
 *      Strings:    'Hello', "Hello", `Hello`
 *      Boolean:    true, false
 *      Null:       Null   //In JavaScript, null is not a "reference to a nonexistent object" or a "null pointer", as in some other languages. "nothing", "empty", or "value unknown".
 *      Undefined: undefined
 *      Symbol()
 */

//console.log(2021) //Integer number
//console.log(1.5)  //Float Number
// console.log(1 * 'asdads'); //Not a Number
// console.log(1 / 0) //Infinity

// console.log(true, false);

// console.log(null);      //The value of the property or variable is not known
// console.log(undefined); //The value of variable is not equal to anything

// console.log(Symbol());  //Unique identifier
/**
 *  2. Object, Reference type
 *      Object:   {name: 'one', age: 15}
 *      Array:    [1, '2', {2: 'three'}]           //subtype of object
 *      Function: function foo() {}, () => {}      //subtype of object
 *      Date:     new Date                         //subtype of object
 *
 *      ......
 */

// const firstObject = {
//     name : 'Aliaksandr',
//     age  : 31
// }
// const arr = [
//     1,
//     '2',
//     {
//         number: 3
//     }
// ]
// const numb = 1233;
// const str = 'Test String';

// // console.log(firstObject);
// // console.table(firstObject); //It is displayed on the screen as a table
// console.clear()              //Clear the console


//     /*Variables*/
// /**
//  * var    - Переменные var существуют и до объявления. Они равны undefined. Переменная, объявленная через var, видна везде в функции. Переменная var – одна на все итерации цикла и видна даже после цикла.
//  * let    - Переменная let видна только после объявления. Не может быть объявлено несколько переменных с одним именем. Переменная, объявленная через let, видна только в рамках блока {...}, в котором объявлена. При использовании в цикле, для каждой итерации создаётся своя переменная.
//  * const  - Нельзя изменить, можно переопределять отдельные свойства массивов и объектов
//  */

// firstObject.name = 'Iryna';
// console.table(firstObject);
// console.clear();


//     /*Type Conversions*/
// /**
//  * typeof() - The typeof operator returns a string indicating the type of the unevaluated operand.
//  * String() - Number to string
//  * .toString() - Method returns a string
//  *
//  * Number() - String to Number
//  * parseInt() - function String to Number Int
//  * parseFloat() - function String to Number Float
//  *
//  * Boolean() - to Number Float
//  * NaN != NaN
//  */
// //console.log(typeof(firstObject));

// //Number to string
// console.log(typeof(String(10)));
// console.log(String([1, 2, {name: 'one'}]));   //Array to string
// console.log(typeof(numb.toString()));
// console.log(30 + ' one');                   //String - Неявное преобразование путем конкатенации строк
// console.log(30 - 'asd');                    //NaN - С пустой строкой, знакчение не изменится, в противном случае NaN
// console.log(30 - '5');                      //25 - СТрока будет преобразована к числу
// console.log(30 * '5');                      //150 - String to Number
// console.log(30 + true);                     //31 - Boolean to number, NaN === 0, false === 0
// console.log(false + undefined);             //NaN
// console.clear();

// //String to Number
// console.log(typeof(Number('1434')));
// console.log(Number(true));                     //Return 1, false, null === 0, 'sdfsdf' === NaN, array === NaN
// console.log(parseInt(' 123123sdfsdfsdf'));        //Return 123123
// console.log(parseInt('sds123123sdfsdfsdf'));      //Return NaN
// console.log(parseFloat(' 123.123sdfsdfsdf'));  //Return 123.123

// //To Boolean
// console.log(Boolean(' '));      //- or 'string'- true
// console.log(Boolean(''));       //False
// console.log(Boolean(-123));     //any number - true, 0 - false, null, undefined - false
// console.log(Boolean({}));      //true
// console.log(Boolean([]));       //true
// console.clear();


//     //Numbers
// /**
//  * @type {number}
//  * value++ - Изменения после(на следующей строке)
//  * ++value - Изменения сразу(на этой же строке)
//  *
//  * Math - Object
//  * Math.random() - Random Number (0.1 - 1)
//  * Math.round() - Округляет по правилам математики
//  * Math.ceil() - Округляет всегда в большую сторону
//  * Math.floor() - Округляет всегда в меньшую сторону
//  * Math.min() - передает минимальное число из переданных
//  * Math.max() - передает максимальное число из переданных
//  */
// const num1 = 12;
// const num2 = 23;
// let value;

// value = 0.6 + 0.7;

// console.log(value.toFixed(1));             //String
// console.log(+value.toFixed(1));            //Number
// console.log(parseFloat(value.toFixed(1))); //Number
// console.log((0.6 *10 + 0.7 *10)/10);                  //1.3

// value = Math.PI;                               //Свойство объекта
// //value = Math.random();                         //Метод объекта.
// console.log(value);
// console.log(Math.round(2.5));               // 2.5 - 3, 2.4 - 2
// console.log(Math.ceil(2.1));                // 3
// console.log(Math.floor(2.9));               // 2
// console.log(Math.min(454,23, 5, 32));    //5
// console.log(Math.max(454,23, 5, 32));    //454
// console.log(Math.floor(Math.random() * 10 + 1));    //Рандомное число от 1, до 10
// console.clear();

// //Change background body
// //const arr2 = ['black', 'red', 'white', 'green', 'pink', 'blue', 'yellow', 'gray', 'brown'];
// //value = Math.floor((Math.random()) * arr2.length);
// //let body = document.getElementById('body');
// //y
// // 3 body.style.background = arr2[value];


// //Home work
// console.log(parseFloat(value.toFixed(2)));
// console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));
// console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
// console.log(parseFloat((Math.random()) * 10 +1).toFixed(2));
// console.log(Math.floor((Math.random()) * 10 +1).toFixed());
// console.log(parseFloat((0.7 + 0.6).toFixed(1)));
// console.log(parseInt('100$'));
// console.clear();

// //Strings
// const firstName = 'Sasha';
// const lastName = 'Pasheda';
// const age = '32';
// const strOne = 'Hello my little friend';
// value = firstName + lastName;
// value = firstName.length;                   //Выводит количество символов в строке
// value = lastName[3];                        //Выводит определенный симвл строки Начинается с 0
// value = lastName[lastName.length - 1];      //Последний символ строки
// value = firstName.toUpperCase();            //Пробразовывает символы в верхний регистр
// value = firstName.toLowerCase();            //Пробразовывает символы в нижний регистр
// value = firstName.concat(' ', lastName);    //Конкатенация строк
// value = strOne.indexOf('little');           //Находит индекс вхождения символа или наборы символов
// value = strOne.lastIndexOf('little');       //Находит индекс вхождения символа или наборы символов
// value = strOne.includes('my');              //Проверяет существует ли символ или набор символов, выводит булиевое значение

// value = strOne.slice(0, -7);                 //Вырезает из строки символы начиная с 0 индекса включая 6, можно передать одно значение с какого вырезать и значение вида (0 - 3), будет вырезано с 0 до -3 с конца
// value = strOne.replace('little', 'big');  //Заменяет одно строкове значение на другое
// console.log(value);
// console.clear();

// /*Home Work 2*/
// let string = "some test string";
// console.log(string[0], string[string.length - 1]);
// console.log(`${string[0].toUpperCase()}${string.slice(1, -1)}${string[string.length - 1].toUpperCase()}`);
// console.log(string.indexOf('string'));
// console.log(string.indexOf(' ', string.indexOf(' ') + 1));
// console.log(string.substr(5, 4));
// console.log(string.slice(0, -6));
// let a = 20;
// let b = 16;
// string = `${a}${b}`;
// console.log(string);
// console.clear();

// /*Операторы сравнения и логические*/
// value = 'a'.charCodeAt();                       //Возвращает значение в unicode

// value = [];
// if(value.length){                               //Проверка на пустой массив
//     console.log(true)
// }else{
//     console.log(false)
// }
// if(Array.isArray(value)){                       //Проверка на массив
//     console.log(true)
// }else{
//     console.log(false)
// }

// if(firstObject.hasOwnProperty('name')){      //Проверка на наличие свойств в объекте
//     console.log(true)
// }else{
//     console.log(false)
// }

// value = 1 || 0;                                 //Оператор или останавливается на правде
// value = 3 && 0 && 2;                            //Оператор или останавливается на дже
// console.log(value);
// console.clear();

// console.log(null + 5);

// /*Тернарный оператор*/
// let ab = a > b ? b = a : b++;                   //Возвращает значение которое соответствует        
// //HomeWork

// switch(a){
//     case 'block':
//         console.log('block');
//         break
//     case 'none':
//         console.log('none');
//         break
//     case 'inline':
//         console.log('inline');
//         break
//     default:
//          console.log('other');
// }

// let bb = 'hidden';
// switch(bb){
//     case bb === 'hidden':
//         bb = 'visible';
//         break
//     default:
//         bb = 'hidden';
// }
// console.log(bb);

// let cc = 0;
// switch(cc){
//     case 'hidden':
//         cc = 'visible';
//         break
//     case cc < 0:
//         cc = 'less then zero';
//         break
//     default:
//         cc *= 10;
// }
// console.log(cc);
// console.clear();

/*Loop*/
// let i = 10;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

/*while(i++ <= 10){       //Короткая запись (++ начинает выполняться на следующей  строчке)
    console.log(i);
}*/

// while(i--){                 //Любая запись, которая приведет к FALCE
//     console.log(i);
// }
// for(let i = 0; i < 10; i++){
//     if(i === 5){
//         continue;           //Исключает 5
//     } else if(i === 7){
//         break               //Прерывает после 7
//     }
//     console.log(i);
// }

//Перебор массивов объектов

// const users = [
//     {
//         name : 'Aleks',
//         lastName : 'Pasheda'
//     }, 
//     {
//         name : 'Irina',
//         lastName : 'Pasheda'
//     },
//     {
//         name : 'Oleg',
//         lastName : 'Pasheda'
//     }
// ]
// const objUsers = {};
// for (let i = 0; i <= users.length; i++){
//     objUsers[users[i.name]] = users[i];
// }
// const objUsers = {};
// for (let i = 0; i < users.length; i++){
//     objUsers[users[i].name] = users[i];
// }
// console.table(objUsers);

// for (const key of users) {       //Перебирает массив и выводит данные ключей
//     for (const oKey in key){     //Перебирает объект и выводит ключи
//         console.log(oKey); 
//     }
//     //console.log(key);
// }

// let homeString = 'i am in the easycode';
// let newString = '';
// for (let i = 0; i < homeString.length; i++){
//     if(i === 0){
//         newString += homeString[i].toUpperCase();
//     }else if(homeString[i] === ' '){
//         newString += ' ' + homeString[++i].toUpperCase();
//     }else{
//         newString += homeString[i];
//     }
// }
// console.log(newString);


// let str = 'i am in the easycode';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   if (i === 0 || str[i - 1] === ' ') {
//     res += str[i].toUpperCase();
//   } else {
//     res += str[i];
//   }
// }
// console.log(res);

// let homeString = 'tseb eht ma i';
// let newString = '';
// for (let i = 0; i < homeString.length; i++){
//     newString += homeString[(homeString.length - 1) - i]
// }
// console.log(newString);

// let newNumber = 10;
// let factorial = 1;
// for(let i = 0; i < newNumber; i++){
//     factorial *= newNumber - i;
// }
// console.log(factorial);

// let number = 1;

// for (let i = 1; i <= 10; i++) {
//   number *= i;
// }

// let homeString = 'JavaScript is a pretty good language';
// let newString = '';
// for (let i = 0; i < homeString.length; i++){
//     if(i === 0){
//         newString += homeString[i].toUpperCase();
//     }else if(homeString[i] === ' '){
//         newString += homeString[++i].toUpperCase();
//     }else{
//         newString += homeString[i].toLowerCase();
//     }
// }
// console.log(newString);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// for (key of arr){
//     if(key%2){
//         console.log(key);
//     }
// }

// let list = {
//     name: 'denis',
//     work: 'easycode',
//     age: 29
// }
// for(key in list){
//     typeof list[key] === 'string' ? console.log(list[key].toUpperCase()) : console.log(list[key]);
// }


//Functions
// (function(smg){         //Самовызывающиеся функции
//     return alert(smg);
// })('hello world')

// function foo(){
//     console.log(arguments);
// }
// foo(2, 3);

// function multiply() {
//     let res = 1;
//     if(arguments.length !== 0){
//         for(let i = 0; i < arguments.length; i++){
//             res *= arguments[i];
//         }
//     }else{
//         res = 0;
//     }
//     console.log(Number(res));
// }
// multiply(2, 4, 5, 6);
// multiply();

// function reverseString(str) {
//     let res='';
//     let newStr = String(str);
//     for(let i = newStr.length; i--;){
//         res += newStr[i];
//     }
//     console.log(res);
// }
// reverseString('test');
// reverseString('');
// reverseString(null);
// reverseString(undefined);
// reverseString();

// function getCodeStringFromText(str) {           //Функция преобразования символов в юникод
//     let newString = String(str);
//     newString = newString.trim();
//     let sbstr = "";
//     for (let i = 0; i < newString.length; i++) {
//         if(i === 0){
//             sbstr += newString[i].charCodeAt();
//         }else{
//             sbstr += ' ' + newString[i].charCodeAt();
//         }
//     }
//     console.log(sbstr);
// }
// getCodeStringFromText("hello");
// getCodeStringFromText(null);

// function guessTheNumber(num) {
//     if(num > 10 || num < 0)  return console.log(new Error('Please provide number in range 0 - 10'));
//     if(isNaN(num)) return console.log(new Error('Please provide a valid number'));
//     let myNum = Number(num)
//     let random = Math.floor(Math.random() *10 + 1);
//     if(myNum === random) console.log('You win!')
//     console.log(`You are lose, your number is ${myNum}, the random number is ${random}`);
    
// }
// guessTheNumber(11);
