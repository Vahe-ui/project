// import a from './script.js';


// a(5, 6);

// let x = 5;

// switch(x) {
//     case 5:
//         console.log("hing a");
//     case 6:
//         console.log("vec a");
//         break;
//     default:
//         console.log("ha lav");
// }

// let age = 18;

// age > 15 ? console.log("meca") : console.log("poqra");


// let name = prompt("what is your browser", "")
// switch(name){
//     case "google":
//     case "mozilla":
//         console.log("eta");
//         break;
//     case "IE":
//         console.log("chexav")
//         break;
//     default:
//         console.log("taza ban chari")
// }

// let x = 5;
// let i = 0;

// while (i < x) {
//     console.log(i);
//     i++;
// }

// do{
//     i++;
//     console.log(i);
// }while(i < x)


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// function foo(a, b) {
//     console;
// }
// function decloration
// console.log(foo(5, 6))

// let foo = function () {
//     console.log("a");
// }
// function expression
// foo();

// let x = () => console.log(a)

// console.log(x(5));

// function foo(n) {
//     if(n === 1) {
//         return n;
//     } else {
//         return foo(n - 1);
//     }
// }
// recursion
// console.log(foo(10));

// function foo(a, b = 2) {

// }
// default value

// (function foo(){
//     console.log("a")
// })();



// let x = new Function();




// function factorial(res, num) {
//     // let res = 1;
//     for(i = 1; i <= num; i++){
//         res=res*i
//     }
//     return res;
// }
// console.log(factorial(1,5))



// function fib(n) {
//     if (n <= 1) {
//         return 1;
//     } else {
//         return fib(n - 1) + fib(n - 2); 
//     }
// } 

// console.log(fib(3));



// let arr = [1, 2, 3, 4];


// arr.pop(); // jnjuma verjic
// arr.push(5);// avelacnuma verjic
// arr.shift(); // jnjuma demic
// arr.unshift(0); // avelacnuma demic

// let [x, y] = [1, 2]; // destructuring

// console.log(y);





// let arr = ["es", "sovorum", "JS"];

// let newArr = arr.slice(0, 2, "lav"); // jnjuma start[0] end[2] avelacnuma
// console.log(newArr);


// let arr = ["es", "sovorum", "JS"];

// let newArr = arr.splice(0, 1,); // jnjuma
// console.log(newArr);

// let matrix = [[1, 2, 3], [4, 5, 6]];

// for(let i = 0; i < matrix.length; i++) {
//     for(let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j])
//     }
// }

// console.table(matrix);

// let lang = ["C++", "PHP", "ADA"];
// let newLang = ["JS", "Java", "C#"];

// let allLang = ["Perl", ...lang, "Scala", ...newLang];
// // operator spread zangvace bacuma lcnuma nnor zangvaci mej 
// console.log(allLang);

/*
* stex graca array 
*/



// let obj = {
//     name: "Vahe",
//     age: 29
// }


// function showMe(...a) {
//     console.log("anuns " + this.name + " tariqs " + this.age + " " + a);
// }

// showMe.call(obj, 1989, 1555);
// showMe.apply(obj, [1989]);

// let newShowMe = showMe.bind(obj, 1989);
// newShowMe();



// let animal = {
//     eat: true,
// }

// let dog = {
//     jump: true,
//     eat: false
// }

// dog.__proto__ = animal;

// console.log(dog.eat);



// let obj = {
//     "x a":1
// }

// obj['x a'] = 10;
// console.log(obj);

// let obj = {
//     x: 1,
//     y: 2
// }

// for(let key in obj) { // object cycle
//     console.log(obj[key]);
// }


// let sum = 0;

// let salary = {
//     "Ani": 1500,
//     "Arman": 200,
//     "Vahe": 450,
// }

// for(let key in salary) {
//     sum += salary[key];
// }

// console.log(sum)




// let maximum = 0;

// let salary = {
//     "Ani": 1500,
//     "Arman": 200,
//     "Vahe": 450,
// }

// for (let key in salary) {
//     if (salary[key] > maximum) {
//         maximum = salary[key]
//     }
// }
// console.log(maximum)
// console.log("mer meji harusty " + maximum + ' e stanum')




// function sayHello(...a) {
//     // console.log("anuns " + this.name + " " + this.age + "stex lnelua a-n " + a);
//     console.log(`anuns ${this.name} ${this.age} stex graca lienlu a-n ${a}`);
// }
// let person = {
//     name: "Arman",
//     age: 22,
// }

// sayHello.call(person, 15);
// sayHello.apply(person, [15]);



// let hello = sayHello.bind(person, 15, 5445);
// hello();


// function Person(name, age) {
//     this.anun = name;
//     this.tariq = age;
//     this.show = function() {
//         console.log(`bari galust ${this.anun}`);
//     }
// }

// let mard = new Person("Arman", 22);
// mard.show();

// let mard2 = new Person("Vahe", 30);
// mard2.show();



// let obj = {
//     x:1,
//     y:10, 
//     b:51,

// }

// let obj2 = {
//     ...obj,
//     x:10    
// };

// // obj2.x = 10;

// console.log(obj);
// console.log(obj2);

// let obj = {

// }


// function isEmpty(obj) {
//     for (let key in obj){
//         if(key){
//             return true
//         } 
//     } 
//     return false
// }



// console.log(isEmpty(obj));



// function MobPhone(model, price, monthly) {
//     this.heraxos = model;
//     this.giny = price;
//     this.amsekan = monthly;
//     this.show = function() {
//         console.log(`es  ${this.heraxos} -ic el chka`);
//     }
// }

// let ayfon = new MobPhone('iphone',400000,20000);
// ayfon.show();

// let samsung = new MobPhone('Galaxy',350000,18000);
// samsung.show();

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     show() {
//         console.log(`barev ${this.name}`)
//     }
// }


// class WebDeveloper extends Person {
//     constructor(name, age, major) {
//         super(name, age);
//         this.major = major;
//     }
//     show() {
//         super.show();/*kanchum enq super klassi metod*/
//         console.log(`tariqe ${this.age}`)
//     }
// }

// let person = new Person("Arman", 22);
// console.log(person);
// person.show();

// let wb = new WebDeveloper("Vahe", 30, "frontEnd");
// console.log(wb);
// wb.show();


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age;
//     }
//     set setAge(age) {
//         if (age > 90) {
//             return console.log("shat mec tariq eq grel")
//         }
//         this.age = age;
//     }
//     get getAge() {
//         return  this.age;
//     }
// }


// let person = new Person("Arman");
// person.setAge = 999;
// console.log(person)


// let id = setInterval(() => {
//     console.log(2);
// }, 1000);

// clearInterval(id);



// let box = document.getElementById("box");
// let box = document.getElementsByClassName("box");
// let box = document.getElementsByTagName("div");
// let box = document.getElementsByName("box");
// let box = document.querySelector("#box");
// let box = document.querySelectorAll(".box");
// console.log(box);


// let box = document.querySelectorAll(".box");



// for (let i = 0; i < box.length; i++) {
//     box[i].addEventListener("click", () => {
//         box[i].style.backgroundColor = "green";
//     });
// }

// box.forEach((elem) => {
//     elem.addEventListener("click", (e) => {
//         elem.classList.toggle("active");
//         console.log(e);
//     })
// })


// box.onclick = () => {
//     alert();
// }




// 10 hat div, inch vor parametrerov, querryselector-ov vercnel, click dnel,vor guyny poxi








// let input = document.querySelector("#input");


// document.querySelector("#btn").addEventListener("click", () => {
//     document.querySelector("#text").innerHTML = input.value;
// });


// inputum grelu jamanak tarery tpi p-i mej
// stexcel input, vori mej ches kara tiv gres


// let box = document.querySelector(".box");
// let childBox = document.querySelector(".childBox");

// box.addEventListener("click", e => {
//     console.log("box");
// });

// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
//     console.log("child Box");
// });

// let input = document.querySelector('.inputToCopy');
// let paragraph = document.querySelector('.paragraph');

// input.addEventListener('keyup', function(){
//     paragraph.innerText = input.value;
// });


// class Phone {
//     constructor(image, name, price, monthly) {
//         this.image = image;
//         this.name = name;
//         this.price = price;
//         this.monthly = monthly;
//     }
//     showPhone() {
//         let box = document.createElement("div");

//         let img = document.createElement("img");

//         img.setAttribute("src", this.image);


//         let phoneName = document.createElement("h2");

//         phoneName.innerHTML = this.name;

//         let phonePrice = document.createElement("p");

//         phonePrice.innerHTML = `<strong>${this.price}</strong>`;

//         let phoneMonthly = document.createElement("p");

//         phoneMonthly.innerHTML = `<i>${this.monthly}</i>`;


//         box.setAttribute("class", "box");

//         box.appendChild(img);
//         box.appendChild(phoneName);
//         box.appendChild(phonePrice);
//         box.appendChild(phoneMonthly);

//         document.querySelector(".contaier").appendChild(box);

//     }
// }

// let apple = new Phone("https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-xr-red-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038669" , "iPhone X", 20000, 1200);
// apple.showPhone();


// document.addEventListener("click", e => {
//     let box = document.querySelector(".container");
//     box.style.left = `${e.clientX}px`
//     box.style.top = `${e.clientY}px`

// })


// document.addEventListener("click", e => {
//     let box = document.querySelector(".container");
//     box.style.left = `${e.clientX - box.offsetWidth / 2}px`
//     box.style.top = `${e.clientY - box.offsetHeight / 2}px`

// })
// dzel Y-y, u click aneluc kubiky beri mishki mejtexov
// kubiky anyndhat 360astichan fra, ur ktcnes ga


// console.log(document.parentNode); // beruma cnox class
// console.log(document.parentElement);
// console.log(document.documentElement.parentElement); // beruma cnox elemente

// console.log(document.body.childNodes); // beruma bolor child-erin daje comment u enternere

// console.log(document.body.children); // beruma henc elem-i erexeqin

// let div = document.querySelector(".container");
// console.log(div.nextSibling); // beruma hajor harevan elem-e

// console.log(div.nextElementSibling); // talisa konkret elem

// console.log(div.previousElementSibling); // naxord harevane

// console.log(div.closest(".box")) // mana gali ira cnoneri mej nshac class || id || tag name

// let x = getComputedStyle(div);

// console.log(x.height);


// div.style.cssText = `
//     margin-top: 20px;
//     margin-left: 50px;
// `

// console.log(div.clientHeight);
// elementneri avelacnele
// div.insertAdjacentHTML("afterbegin", "<strong>Hello World</strong>");
// div.insertAdjacentHTML("afterend", "<strong>Hello World 2</strong>");
// div.insertAdjacentHTML("beforebegin", "<strong>Hello World 3</strong>");
// div.insertAdjacentHTML("beforeend", "<strong>Hello World 4</strong>");

// let x = document.createElement("p");


// document.body.append(x);

// console.log(document.body.firstElementChild);
// inputa linum u btn inputi mej greuc btn-i vra click es anum
// inputi value-n grvuma p-tag-i mej ete inputi mej graca 18+ barer iranc texe dnuma *
// toUpperCase() xxXXXXxx


// let input = document.querySelector('.inputToCopy');
// let paragraph = document.querySelector('.stexaGrvelu');
// let button = document.querySelector('button');

// button.addEventListener('click', function () {
//     if (input.value.toUpperCase() === "RIMA") {
//         paragraph.innerHTML = '***';
//     }
// });


// input.addEventListener("keydown", chekNumber)

// input.onkeydown = chekNumber;


// function chekNumber(event) {
//     return (event.key >= '0' && event.key <= '9');
// }


// let input1 = document.querySelector('.input1');
// let input2 = document.querySelector('.input2')
// let input3 = document.querySelector('.input3')

// let button = document.querySelector('button');
// let text = document.querySelector(".stexaGrvelu");

// button.addEventListener("click", () => {
//     // if(input.value === '') {
//     //     // text.classList.add("error_active");
//     //     input.previousElementSibling.style.display = "block";
//     // }
//     if(input1.value ==='' && input2.value === "" && input3.value === ""){
//         document.querySelector(".opshag").classList.add("error_active");
//     } else if (
//         input1.value !=='' && input2.value === "" && input3.value === ""
//     ) {
//         document.querySelector(".opshag").classList.remove("error_active");
//         input2.previousElementSibling.classList.add("error_active");
//         input3.previousElementSibling.classList.add("error_active");
//     }
// })

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     setTimeout(()=>{
//         alert();
//     }, 2500)
// })

// console.log(1);

// let x = setTimeout(() => {
//     console.log(2)
// }, 1000)


// clearTimeout(x);



// setInterval(() => {
//     alert("lava");
// }, 1000);


// let sec = document.querySelector("section");

// sec.addEventListener("click", e => {

//     if (e.target.tagName === "DIV") {
//         e.target.style.background = '#000';
//    }
// })

// let accordion = document.querySelector('.accordion');
// let submen = document.querySelectorAll('.sub_menu')
// accordion.addEventListener("click", function (e) {

//     if (e.target.tagName ==='P' && e.target.nextElementSibling.hasAttribute("class") !== "clicked"){
//         e.target.nextElementSibling.classList.add('clicked');
//     } 

// })

// amen varkyan console-um tpi 1-ic mijev 20 tvere





// let id = setInterval(ok, 10);

// function ok() {
//     let x = 1;
//     if (x < 20) {
//     x++;    
//     console.log(x);

//     } else {
//         clearInterval(id);
//     }
// }


// console.log(a);
// var a = undefined;
// console.log(a);


// const obj = {
//     x: 10
// }

// obj.x = 20;

// console.log(obj)

// let obj = {
//     name: "JOhn"
// }

// let obj2 = obj;

// obj2.name = "Poxos";

// console.log(obj.name)

// let str = ""; //null, udefined, 0, false

// if(str) {
//     console.log("adasd")
// }


// let age = 20;

// let beer = age > 18 ? "beer" : "no beer";

// let x = ["jhkjk", "asdasd"];

// let y = [true, "str"];


// let t = [...x,...y];

// console.log(t);


// let person = {
//     name: "Gugo",
// }

// function ok() {

//     console.log(this.name)
// }
/////////////////////////////////////////////////   kardal bind call apply
// ok.call(person);
// ok.apply(person);

// let newOk = ok.bind(person);
// newOk()

// let x = function(){ // exprassion
//     console.log("mi ban")
// };

// x();

// function foo() { // declaration
//     console.log("eli mi ban");
// }


// foo();



//////////// incapsulacia setter getter 
// function Person(name, age){ // function constructor
//     this.name = name;
//     let tariq;

//     this.setAge = function(age) {
//         if (typeof age === "number") {
//             tariq = age;
//         }
//     }

//     this.getAge = function() {
//         return tariq;
//     }

// }


// let person = new Person("Gago", 22);

// person.setAge("25");
// console.log(person.getAge())

// function a() {
//     let id = setInterval(vlod, 100);

//     let x = 0;
//     function vlod() {
//         x++;
//         console.log(x);
//         if(x === 20) {
//             clearInterval(id);
//         }
//     }
// }

// a();


//////// scrollintoview
// let box = document.querySelector(".box");
// let box2 = document.querySelector(".box2");

// document.body.addEventListener("wheel", (e) => {
//     let deltaY = e.deltaY;
//     if (deltaY > 0) {
//         goNext();
//     } else {
//         goPrev();
//     }
// })



// function goNext() {
//     box2.scrollIntoView({behavior: "smooth"});
// }

// function goPrev() {
//     box.scrollIntoView({behavior: "smooth"})
// }


// let [x, y] = [1, 2];

// console.log(x);
// console.log(y);


// destrucuring
// let [a, b, ...all] = [1, 2, "Barev", true, {name: "Vzgo"}];



// console.log(a)
// console.log(b)
// console.log(all)




///////////////// objec create
// let obj2 = {
//     name: "Valod"
// }


// let obj = Object.create(obj2, {
//     name: {
//         value: "Vzgo",
//         enumerable: true,
//         writable: true,
//     },
//     age: {
//         value: 20,
//         enumerable: true
//     }
// });

// obj.name = "Arman";

// console.log(obj);



// for (let key in obj) {
//     console.log(obj[key]);
// }


//// ***** async
// const url = "https://jsonplaceholder.typicode.com/users";
// async function getUsers() {
//     let response = await fetch(url);
//     let data = await response.json();
//     data.forEach(element => {
//         console.log(element.name)
//     });
// }

// const url = "https://jsonplaceholder.typicode.com/users";
// async function getUsers() {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         data.forEach(element => {
//             console.log(element.name)
//         });
//     } catch(e) {
//         console.error("sxal e")
//     } finally {
//         console.log("meka ashxatum em")
//     }
    
// }

// document.querySelector("button").addEventListener("click", getUsers);



// fetch(url)
// .then(resp => resp.json())
// .then(data => data.forEach(element => {
//   console.log(element);  
// }))
// .catch(e => console.error("err"))
// .finally(() => console.log("da"))


// let p = new Promise((reslove, reject) => {
//     reslove("ok")
// }) 

// p.then(value => console.log(value))




// class Wallet {
//     constructor(name, money) {
//         this.name = name;
//         this.money = money;
//     }
//     addMoney(money) {
//         this.money += money;
//     }
//     buyProduct(...name) {
//         let phone = 250;
//         let shoes = 200;
//         let sum = 0;
//         name.forEach(item => {
//             if(item === "shoes") {
//                 sum += shoes;
//             }
//             if (item === "phone") {
//                 sum += phone;
//             }
//         });

//         if (!(this.money >= sum)) {
//             console.error("Vata")
//         } else {
//             this.money -= sum;
//         }
//         console.log(this.money)
//     }
// }


// let person = new Wallet("Vahe", 400);

// person.buyProduct("shoes", "phone");

// console.log(person);

//let input = document.querySelector(".input")
//let button = document.querySelector('button')


// class Wallet {
//     constructor(name, money) {
//         this.name = name;
//         this.money = money;
//     }
//     addMoney(pox) {
//         this.money += pox;
//     }
    
//     showMoney() {
//         console.log(this.money);
//     }
//     buyProduct(...name) {
//         let shoes = parseInt(document.querySelector("p").innerHTML);
//         let phone = 250;
//         let sum = 0;
//         name.forEach(item => {
//             // if (item === "shoes"){
//             //     sum += shoes;
//             // } 
//             // if (item === "phone") {
//             //     sum += phone;
//             // }
//             switch(item) {
//                 case "shoes":
//                     sum += shoes;
//                     break;
//                 case "phone":
//                     sum += phone;
//                     break;
//                 default:
//                     return false;
//             }
//         });
//         if (!(this.money >= sum)) {
//             console.log("chka pox");
//         } else {
//             this.money -= sum;
//             console.log(this.money)
//         }
//     }
// }

// let person = new Wallet("Arman", 0);


// button.addEventListener("click", function(){
//     let inpValue = parseInt(input.value);
//     person.addMoney(inpValue);
// })

// document.querySelector(".buy").addEventListener("click", () => {
//     let name = document.querySelector("span").innerHTML;
//     person.buyProduct(name);
// })


// let [x, y] = [1, 2];

// console.log(x);
// console.log(y);


// let { x, y } = {x: 10, y : 20}

// console.log(x, y)


// let x = 10;

// let obj = {
//     "Arman": x
// }

// console.log(obj)
