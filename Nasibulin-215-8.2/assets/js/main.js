//1
// let timeCounter = 0;
// let interval = setInterval(function () {
//   timeCounter += 1;
//   if (timeCounter > 3) {
//     clearInterval(interval);
//   }
// }, 1000);
// window.addEventListener("DOMContentLoaded", interval);
// function func() {
//   if (timeCounter >= 3) {
//     window.scrollTo({
//       top: 500
//     })
//   }
// }
//3
// const getBtn = document.querySelector('.btn');

// getBtn.addEventListener('click', () => {
//     const getForm = document.querySelector('.form');

//     let sum = 0;
//     for (let i = 0; i < getForm.elements.length; i += 1) {
//         sum += Number(getForm.elements[i].value);
//     }
//     alert(sum);
// });

//4
// function func() {
//   let obj = {
//     1: ["Кострома", "Москва", "Санкт-Петербург"],
//     2: ["Берлин", "Гамбург", "Кёльн"],
//     3: ["Стамбул", "Измир", "Бодрум"],
//   };
//   let select = document.getElementById("select");
//   let countryIndex = select.selectedIndex;
//   let newSelect = document.createElement("select");
//   for (city of obj[select[countryIndex].text]) {
//     let option = document.createElement("option");
//     option.text = city;
//     newSelect.appendChild(option);
//   }
//   document.body.appendChild(newSelect);
// }

//5
// let ol = document.getElementById('list');
// let li = document.createElement('li');
// li.innerHTML = 'пункт';
// ol.appendChild(li);

//6
// var elems = document.getElementsByTagName('a');
// for (var i = 0; i < elems.length; i++) {
// 	elems[i].addEventListener('mouseover', func);
// }

// function func() {
// 	this.innerHTML = this.innerHTML + ' (' + this.href + ')';
// 	this.removeEventListener('mouseover', func);
// }

//7
// var elems = document.getElementsByTagName('p');
// for (var i = 0; i < elems.length; i++) {
// 	elems[i].addEventListener('click', func);
// }

//8
// function go(elem){
//     elem.value = parseInt(elem.value) + 1;
// }


// function func() {
// 	this.innerHTML = this.innerHTML + ' (' + this.href + ')';
// }


// function func() {
// 	this.innerHTML = this.innerHTML * this.innerHTML;
// }



// 9
// var ul = document.getElementById("ul");

// ul.addEventListener("click", function func(event) {
// 	var li = event.target.closest("li");
	

// 	if (li) {
// 		li.innerHTML +="!"; 
// 	}
// });


// var but = document.getElementsByTagName("button")[0];

// but.addEventListener("click", function() {

// var liElem = document.createElement("li");
// liElem.innerHTML = "пункт";
// ul.appendChild(liElem);
// });


//10
// const getForm2 = document.querySelector('.form2');
// const getTable2 = document.querySelector('.task');
// getForm2.submit.addEventListener('click', func2);
// getTable2.addEventListener('click', func);
// function func(event) {
//     const newValue = prompt("Исправить " + event.target.innerHTML, '');
//     event.target.innerHTML = newValue;
// };
// function func2(event) {
//     event.preventDefault();
//     const createTdFirst = document.createElement('td');
//     createTdFirst.innerHTML = getForm2.firstname.value;
//     const createTdLast = document.createElement('td');
//     createTdLast.innerHTML = getForm2.lastname.value;
//     const createTr = document.createElement('tr');
//     createTr.appendChild(createTdFirst);
//     createTr.appendChild(createTdLast);
//     getTable2.appendChild(createTr);
// };




