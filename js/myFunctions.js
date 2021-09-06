//Создание списка из передаваемых параметров. Первый параметр (o или u), определяет тип списка
function createList(listType){
    let newList = `<${listType}l><li>`;
    let arr = [].slice.call(arguments, 1);
    newList += arr.join('</li><li>');
    newList += `</li></${listType}l>`;
    return newList;
}
function createHTML(el){
    let newDiv = document.createElement('DIV');
    newDiv.innerHTML = el;
    return document.body.appendChild(newDiv);
}
createHTML(createList('o', 'one', 'two', 'three'));