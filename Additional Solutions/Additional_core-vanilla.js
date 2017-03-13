function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
//setting Permutations
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100

// // //Buy cell phone
//
const taxRate = 0.09;
const phonePrice = 651.23;
const accessoriesPrice = 30;
const spendingThreshold = 650.54;
let bankAccountBalance = 6000;
let phonesPurchased = 0;
let buyPhone = 0;

function getTax(totalPurchase) {
  return totalPurchase * (1 + taxRate)
}

function canIBuy() {
  for( let index = 0; buyPhone <= bankAccountBalance; index++ ) {
    let buyPhone = phonePrice + accessoriesPrice;
    buyPhone = getTax( buyPhone );
    if( buyPhone >= spendingThreshold ) {
      return "You need to crawl before you can ball. You need $" + (phonePrice - spendingThreshold).toFixed(2) + " more to buy this playa"
    } else if ( buyPhone <= bankAccountBalance ) {
      bankAccountBalance -= buyPhone
      phonesPurchased += 1;
    } else {
      return "insufficient funds, you have purchased " + phonesPurchased +  " phone(s) and now only have " + "$" + bankAccountBalance.toFixed(2)
    }
  }
}

canIBuy();

//Basic Object Manipulation
var user = {
name: "John",
surname:"Smith",
}

user.name = "Pete"
delete user.name

var user = {
    name: "John",
    surname: "Smith",
}

user.name = "Pete"
delete user.name
true

user
Object {
    surname: "Smith"
}


user.middleName = "Jeff"
"Jeff"
user
Object {
    surname: "Smith",
    middleName: "Jeff"
}
user["hobby"] = "shopping"
"shopping"
user
Object {
    surname: "Smith",
    middleName: "Jeff",
    hobby: "shopping"
}
var car = "BMW"
undefined
user['car'] = car "BMW"
user
Object {
    surname: "Smith",
    middleName: "Jeff",
    hobby: "shopping",
    car: "BMW"
}
user.car "BMW"
user['car']
"BMW"
user[car]
undefined

//Is empty function
var test = Object.values(obj)

function isempty(obj) {
    if (test.length == 0) {
        return true
    }
    return false
}
var obj = {};
obj.name = "Jeff"
isempty(obj)
true
obj
Object {
    name: "Jeff"
}
var test = Object.values(obj)

function isempty(obj) {
    if (test.length == 0) {
        return true
    }
    return false
}
var obj = {};

isempty(obj)
false
//salaries
salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

total = Object.values(salaries).reduce(function(holder, b) {
    return holder + b
}, 0)

total
390


// building new object with keys and valuesfor()
//
let arrayOfKeys = ["pug","cat","dog","bell"]
let arrayOfValues=['money','honey','dup','run']
let myNewObj ={}

for(let myIt in arrayOfKeys){
  myNewObj[arrayOfKeys[myIt]] = arrayOfValues[myIt]
}
//Create an new object form two arrays


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let objKeys = Object.keys(menu)
let flatObj = Object.values(menu)
let objValues =[]

let newMenu = {}

for (let index = 0; index < flatObj.length; index++) {
  if( Number.isInteger(flatObj[index] ) ) {
    objValues.push(flatObj[index]*2)
  } else {
    objValues.push(flatObj[index])
    console.log(objValues)
  }
}

// objValues

for (let element in objKeys) {
  menu [objKeys[element]] = objValues[element]
}

console.log("New Object",menu)

// //array
//
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ? = 4

// more array Manipulation
var styles = ['Jazz', 'Blues']
undefined
styles.push('Rock-n-Roll')
3

styles.splice(1, 0, 'Classics')[]
styles
    ["Jazz", "Classics", "Blues", "Rock-n-Roll"]

styles.slice(0, 1)["Jazz"]
styles
    ["Jazz", "Classics", "Blues", "Rock-n-Roll"]

styles.splice(0, 1)["Jazz"]
styles
    ["Classics", "Blues", "Rock-n-Roll"]

styles.unshift('Rap', 'Reggie')
5
styles
    ["Rap", "Reggie", "Classics", "Blues", "Rock-n-Roll"]
    //sum arrays

    function sumInput(){
var newArray = []
var values = prompt('Please input values.')

while(values!== ' ' && !isNaN(values) && values!== null){
newArray.push(parseInt(values))
values= prompt("More input please.")
}
newArray = newArray.reduce(function(a,b){
return a+b
},0)
return "Sum of Inputs that are numbers: "+ newArray
	}

sumInput()
"Sum of Inputs that are numbers: 6"

//Array sort
let arr = ["HTML","JavaScript","CSS"]
arr.slice()
["HTML", "JavaScript", "CSS"]
arr.sort()
["CSS", "HTML", "JavaScript"]

// // Map Array
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];



var names = users.map(function(users){
	return users.name
})


names
["John", "Pete", "Mary"]
