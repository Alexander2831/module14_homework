/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
const xmlList = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
// console.log('xmlString', xmlString);

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlList, "text/xml");


// Получение всех DOM-нод
const list = xmlDOM.querySelector("list");

const student = list.querySelectorAll("student").forEach((elem) => {
  const name = elem.querySelector("name");
  const firstName = name.querySelector("first").textContent;
  const secondName = name.querySelector("second").textContent;
  const fullName = firstName + " " + secondName;
  const age = elem.querySelector("age");
  const prof = elem.querySelector("prof").textContent;
// console.log('bookNode', bookNode);
// console.log('titleNode', titleNode);
// console.log('authorNode', authorNode);
// console.log('yearNode', yearNode);
// console.log('priceNode', priceNode);

// Получение данных из атрибутов
const lang = name.getAttribute("lang");
// console.log('categoryAttr', categoryAttr);
// console.log('langAttr', langAttr);

/* Этап 3. Запись данных в результирующий объект */
const person = {
    name: fullName,
    age: Number(age.textContent),
    prof: prof,
    lang: lang,
  };

  console.log(person);