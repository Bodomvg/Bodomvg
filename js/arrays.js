// let value;
// const numbers = [1, 232, 13, 5, 45, 66];

// value = numbers.length;
// // numbers.length = 0;             // Можно стереть массив, создать пустой массив...
// // numbers.length = 10;
// value = Array.isArray(numbers);     // Проверяет массив или нет
// value = numbers[3];                 // Присваивание переменной значение массива под определенным индексом
// value = numbers.indexOf(232);       // Вернет индекс на комтором встречается элемент этого массива

// value = numbers.push(23234);        // Добавляет в конец массива элемент и возвращает общую длинну массива
// value = numbers.pop();              // Удаляет последний элемент массива и возвращает его значение

// value = numbers.unshift(23234);     // Добавляет в начало массива элемент и возвращает общую длинну массива
// value = numbers.shift();            // Удаляет первый элемент массива и возвращает его значение

// value = numbers.slice(0, 3);        // Вырезает и возвращает элементы массива. Принмает параметрами от какого и до какого. НЕ ИЗМЕНЯЕТ ИСХОДНЫЙ МАССИВ
// value = numbers.splice(2, 3, 4, 5)  // Вырезает и добавляет элементы в массив, возвращает массив из вырезанных элементов. Что добавления без удаления ВТОРОЙ пкараметр ставится как 0. Изменяет массив
// value = numbers.reverse();          // Переворачивает массив и возвращает измененной значение, меняет массив
// value = numbers.concat(value, 33);  // Конкатенирует массив добавляя новые значения в конец. Может принимать значения и другмие массивы. Не изменяет исходный массив.
// value = value.join(' -> ');         // ПРеобразует массив в строку, передавая разделитель
// value = value.split(' -> ');        //ПРеобразет строку в массив. Использует разделитель, если не указать, сделает всю строку отдельным элементом массива

// console.log(`Целый массив ${numbers}`);
// console.log(`Значение переменной value - ${value}`)

// function changeCollection() {          // Функция получает любое колличество массивов, в цикле идет проверка на массивы иначе 0, после собирается новый массив из каждого массива без 0-го элемента
//     let arg = arguments;
//     let sum = [];
//     for(let i = 0; i < arg.length; i++){
//         if(!Array.isArray(arg[i])) return 0;
//         arg[i].shift();
//         sum.push(arg[i]);
//     }
//     return sum;
// }

// console.log(changeCollection([1,2,3], [5, 6, 7]))

const users = [
    {
        _id: "5cdce6ce338171bb473d2855",
        index: 0,
        isActive: false,
        balance: 2397.64,
        age: 39,
        name: "Lucile Finley",
        gender: "female",
        company: "ZOXY",
        email: "lucilefinley@zoxy.com",
        phone: "+1 (842) 566-3328",
        registered: "2015-07-12T09:39:03 -03:00"
    },
    {
        _id: "5cdce6ce0aa8d071fa4f4cc5",
        index: 1,
        isActive: true,
        balance: 2608.48,
        age: 33,
        name: "Woodward Grimes",
        gender: "male",
        company: "FORTEAN",
        email: "woodwardgrimes@fortean.com",
        phone: "+1 (960) 436-3138",
        registered: "2014-09-08T03:24:39 -03:00"
    },
    {
        _id: "5cdce6ce103de120d32d6fe4",
        index: 2,
        isActive: true,
        balance: 1699.99,
        age: 25,
        name: "Robinson Coleman",
        gender: "male",
        company: "GENMOM",
        email: "robinsoncoleman@genmom.com",
        phone: "+1 (852) 543-3171",
        registered: "2019-04-23T08:24:58 -03:00"
    },
    {
        _id: "5cdce6cebada7a418d8ccb3d",
        index: 3,
        isActive: true,
        balance: 2621.84,
        age: 25,
        name: "Austin Benton",
        gender: "male",
        company: "ZILIDIUM",
        email: "austinbenton@zilidium.com",
        phone: "+1 (977) 573-2627",
        registered: "2016-08-02T10:08:24 -03:00"
    },
    {
        _id: "5cdce6ced81fe99596d9cef5",
        index: 4,
        isActive: true,
        balance: 1297.31,
        age: 37,
        name: "Casandra Stout",
        gender: "female",
        company: "ANACHO",
        email: "casandrastout@anacho.com",
        phone: "+1 (929) 465-3804",
        registered: "2018-04-14T11:27:26 -03:00"
    },
    {
        _id: "5cdce6ce6c3ae6c4d6f39e88",
        index: 5,
        isActive: false,
        balance: 2165.49,
        age: 20,
        name: "Valencia Carrillo",
        gender: "male",
        company: "XEREX",
        email: "valenciacarrillo@xerex.com",
        phone: "+1 (977) 522-3378",
        registered: "2014-02-14T11:45:27 -02:00"
    }
];
//   function filterUsers(arr, key, value) {
//     let newArr = [];
//     if(!arr && !key && !value) return new Error('Error message');
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i][key] == value) newArr.push(arr[i]);
//     }
//     return newArr;
//   }
  
//   console.log(filterUsers(users, "age", 36))


// users.forEach((user, i, users) => {
//     console.log(user, i, users)
// })

//FILTER
// const userAge = users.filter(user => user.age < 30);
// console.log(userAge);
// const userActive = users.filter(user => user.isActive)
// console.log(userActive);
//
// //MAP   Создает новый массив из того что передает caLLback
// const myMap = users.map(user => ({ name: user.name, age: user.age}))
// console.log(myMap)

//REDUCE позволяет преобразховать массив в другую сущность или просто посчитать
// const myRed = users.reduce((prev, user) => {
//     return prev += user.balance
// }, 0)
// console.log(myRed)
// const newMyObj = users.reduce((acc, user) => {
//     acc[user._id] = user;
//     return acc;
// }, {})
// console.log(newMyObj);

//SOME Возвращает true если хоть одно верно /EVERY  возвращает true если все равно условию
// const isMale = users.some(user => user.gender === "male");
// console.log(isMale);
//
// const isAge = users.every(user => user.age > 18);
// console.log(isAge);

//FIND находит элемент массива по заданномуц параметру
// const isFind = users.find(user => user.name === "Casandra Stout");
// console.log(isFind);

//SORT Изменяет массив и сортирует по лексическому значению, как строку
// const mArr = users.sort((prev, next) => prev.age - next.age)  //Делитна пары, отнимает из одного жлемента другой и тот что меньше (-1, 0, 1) ставит в начале
// console.log(mArr);

//Homework
// const myArr = [1,2,3,5,8,9,10]
// const newMap = myArr.map(item => ({ digit: item, odd: Boolean(item % 2 === 0)}))
// console.log(newMap)
//
// const twoArr = [12, 4, 50, 1, 0, 18, 40]
// const newSome = twoArr.some(item => item === 0)
// console.log(newSome)
//
// const threeArr = ['yes', 'hello', 'no', 'easycode', 'what']
// const newEvery = threeArr.every(item => item.length > 3)
// console.log(newEvery)
//
// const fourArr = [
//     {char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
//     {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
//     {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}
// ]
// const newSort = fourArr.sort((prevItem, nextItem) => prevItem.index - nextItem.index)
// console.log(newSort)
//
// const fiveArr = [ [14, 45], [1], ['a', 'c', 'd'] ]
// const newMySort = fiveArr.sort()
// console.log(newMySort)
//
// const sixArr = [{cpu: 'intel', info: {cores:2, сache: 3}},
//     {cpu: 'intel', info: {cores:4, сache: 4}},
//     {cpu: 'amd', info: {cores:1, сache: 1}},
//     {cpu: 'intel', info: {cores:3, сache: 2}},
//     {cpu: 'amd', info: {cores:4, сache: 2}}
// ]
// const newTwoSort = sixArr.sort((prevItem, nextItem) => prevItem.info.cores - nextItem.info.cores )
// console.log(newTwoSort)
//
//
// let products = [
//     {title: 'prod1', price: 5.2},
//     {title: 'prod2', price: 0.18},
//     {title: 'prod3', price: 15},
//     {title: 'prod4', price: 25},
//     {title: 'prod5', price: 18.9},
//     {title: 'prod6', price: 8},
//     {title: 'prod7', price: 19},
//     {title: 'prod8', price: 63}
// ];
// function filterCollection(products, firstPrice, secondPrice){
//     const minMax = products.filter(item => item.price >= firstPrice && item.price < secondPrice)
//     return minMax.sort((prevItem, nextItem) => prevItem.price - nextItem.price)
// }
// console.log(filterCollection(products, 15, 30))