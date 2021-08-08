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

// const users = [
//     {
//       "_id": "5e36b779dc76fe3db02adc32",
//       "balance": "$1,955.65",
//       "picture": "http://placehold.it/32x32",
//       "age": 33,
//       "name": "Berg Zimmerman",
//       "gender": "male"
//     },
//     {
//       "_id": "5e36b779d117774176f90e0b",
//       "balance": "$3,776.14",
//       "picture": "http://placehold.it/32x32",
//       "age": 37,
//       "name": "Deann Winters",
//       "gender": "female"
//     },
//     {
//       "_id": "5e36b779daf6e455ec54cf45",
//       "balance": "$3,424.84",
//       "picture": "http://placehold.it/32x32",
//       "age": 36,
//       "name": "Kari Waters",
//       "gender": "female"
//     }
//   ]
//   function filterUsers(arr, key, value) {
//     let newArr = [];
//     if(!arr && !key && !value) return new Error('Error message');
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i][key] == value) newArr.push(arr[i]);
//     }
//     return newArr;
//   }
  
//   console.log(filterUsers(users, "age", 36))