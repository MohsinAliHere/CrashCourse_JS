// 1.
// function Parent(num1) {
//   return function Child(num2) {
//     return console.log(num1 + num2);
//   };
// }
// const innerFunc = Parent(16);
// innerFunc(10);

// 2
// function findElement(arr, val, idx = 0) {
//     if (arr.length === 0) {
//       return false
//     }
//     if (arr[0]  === val) {
//       return true;
//     }
//     return recursiveArraySearch(arr.slice(1), val, idx + 1); // recursively search the rest of the array with an incremented index
//   }
//   const arr = ["apple", "banana", "orange", "grape", "kiwi"];
//   const searchValue = "orange";
//   console.log(findElement(arr, searchValue))

// 3
// let mainParent = document.getElementById('mainParent');
// function addPara(input) {
//     const createPara = document.createElement('p');
//     createPara.innerText = input
//     mainParent.appendChild(createPara);
// }
// addPara("Hello World");

// 4
// let mainParent = document.getElementById('mainParent');
// function addPara(input) {
//     const createPara = document.createElement('li');
//     createPara.innerText = input
//     mainParent.appendChild(createPara);
// }
// addPara("Hello World");

// 5
// function changeBackground(elementName, colorName) {
//   document.getElementById(elementName).style.backgroundColor = colorName;
// }
// changeBackground("customBg","red");

// 6
// function setData(Key, obj) {
//   localStorage.setItem(Key, JSON.stringify(obj));
// }
// setData("Data", {firstName:"John",lastName:"Doe"});

// 7
// function getData(Key) {
//     console.log(JSON.parse(localStorage.getItem(Key)));
// }
// getData("Data");

// 8
// function setEachKey(obj) {
//   for (const key in obj) {
//     localStorage.setItem(key, obj[key]);
//   }

//   const getObj = {};
//   for (let index = 0; index < localStorage.length; index++) {
//     const key = localStorage.key(index);
//     const value = localStorage.getItem(key);
//     getObj[key] = value;
//   }
//   return console.log(getObj);
// }

// setEachKey({
//   firstname: "John",
//   lastName: "Doe",
// });
