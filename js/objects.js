const user = {
    name: 'Your name',
    age:  32,
    isAdmin: true,
    emails: 'info@alpairya.by',
    'my-adress': {
        city: 'Minsk'
    },
    skills: ['html', 'css', 'js', 'scss', 'react']
}
let value;
let name = 'Aleksander';
let skill = 'skills';
value = user;
value = user["my-adress"].city;
value = user[skill];                        //Выводит ключ объекта по значению в переменной
value = user[skill][3];
user['first-name'] = name;

console.log(user);
console.log(value);

/*Home Work*/
const catalog = {
    product: 'iphone'
}
catalog.price = 1000;
catalog['currency'] = 'dollar';
catalog.details = {
    model: '',
    color: ''
}
console.log(catalog);