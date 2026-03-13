// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log("Числа от 1 до 10");
// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }
// console.log("Чётные числа от 1 до 10");
// for (let i = 1; i < 11; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
// console.log("Сумма чисел от 1 до 10");
// let count = 0;
// for (let i = 1; i < 11; i++) {
//     count += i;
// }
// console.log(count);

// let count2 = 0;
// while (count2 < 3) {
//     console.log("Count:", count2);
//     count2++;
// }

// let number = 5;
// while (number > -1) {
//     console.log(number);
//     number -= 1;
// }

// let doValue = 0;
// do {
//     console.log("Value:", doValue);
//     doValue++;
// } while (doValue < 3);

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i < 11; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
//     if (i == 8) {
//         break;
//     }
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// for (let i = 1; i <= 4; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str += "*"
//     }
//     console.log(str);
// }

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(3, 5));

// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(3, 5));

// function sayHello(name) {
//     console.log(`Hello, ${name}`);
// }
// sayHello("Тимофей");

// function prinInfo(name, age) {
//     console.log(`Имя: ${name}, возраст: ${age}`);
// }
// prinInfo("Helel", 18);

// function greet(name = "Гость") {
//     console.log("Привет, " + name);
// }
// greet();
// greet("Анастасия");

// function calculateDiscount(price, discount = 10) {
//     return price - (price * (discount / 100))
// }
// console.log(calculateDiscount(2000, 15));

// const add = function (a, b) {
//     return a + b;
// };
// console.log(add(2, 3));

// function makeCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     }
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const sumFunc = (a, b) => a + b;
// const double = x => x * 2;
// const sumFunc2 = (a, b) => a + b;
// const sayGreeting = () => console.log("Hello");
// const square = x => x * x;
// const calculate = (a, b) => {
//     let result = a + b;
//     return result * 2;
// }

// let numbersArr = [1, 2, 3, 4, 5];
// console.log(numbersArr);

// console.log(numbersArr[0]);
// console.log(numbersArr[1]);

// let colors = ["red", "green", "blue"];
// console.log(colors[0]);
// console.log(colors[2]);
// colors[1] = "yellow";
// console.log(colors);

// console.log(numbersArr.length);

// numbersArr.push(10);
// console.log(numbersArr);

// numbersArr.pop();
// console.log(numbersArr);

// let students = [];
// students.push("Helel", "Ray", "Kris");
// students.pop();
// console.log(students);

// let numbers2 = [10, 20, 30];
// for (let i = 0; i < numbers2.length; i++) {
//     console.log(numbers2[i]);
// }

// for (let value of numbers2) {
//     console.log(value);
// }

// let mixedArray = [1, "text", true, 3.14];
// console.log(mixedArray);

// console.log(numbersArr.indexOf(1));
// console.log(numbersArr.indexOf(2));

// console.log(numbersArr.includes(1));
// console.log(numbersArr.includes(42));

// let cities = ["Moscow", "Volgograd", "St.Peterburg"];
// let city = "Volgograd";
// if (cities.includes(city)) {
//     console.log(cities.indexOf(city));
// }

let user2 = {
    name: "Helel",
    age: 18,
    isStudent: true,
    sayHello: function() {
        console.log(`Hello, my name is ${user2.name}`);
    },
};
user2.sayHello();
console.log(user2);

console.log(user2.name);
console.log(user2.age);

console.log(user2["name"]);

let book = {
    title: "The King In Yellow",
    author: "Robert W. Chambers",
    year: 1895,
};
console.log(book.title);
console.log(book.author);
console.log(book.year);
book.year = 1985;
console.log(book.year);

user2.age = 30;
user2.name = "Кирилл";
delete user2.isStudent;
console.log(user2);

let car = {
    brand: "",
    year: 0,
    getInfo: function () {
        console.log(`Марка: ${car.brand}, год: ${car.year}`);
    },
}
car.getInfo();

for (let key in user2) {
    console.log(key + ": " + user2[key]);
}

let product = {
    price: 300,
    name: "Cup",
    quality: "Good", 
};
for (let key in product) {
    console.log(key + ": " + product[key]);
}

let student = {
    name: "Григорий",
    skills: ["HTML", "CSS", "JS"],
    address: {
        city: "Волжский",
        street: "Пушкина",
    },
};

console.log(student.skills[0]);
console.log(student.address.city);