// // // 1. length method:: It is used to count the number of characters in a string 
// // // Example:

// // // const len = "Hello Javascript";
// // // const result = len.length;
// // // console.log(result);
// // // result = 16;


// // //2. toLocaleLowerCase() method :: The javascript toLocaleLowerCase() method is used to
// // //changed the string into Lower Case.

// // //Example:

// // // const str = "Hello Javascript"
// // // const result = str.toLocaleLowerCase();
// // // console.log(result);
// // // //result = "hello javascript"

// // //3. indexOf() method:: The indexOf() method returns the first position of a specified
// // // value in a string.

// // //Example:

// // // const txt = "Lets find where 'pen' occurs!";
// // // const result = txt.indexOf("pen");
// // // console.log(result)

// // //result = 17

// // //4. slice() method:: The slice method removes the part of a string and return 
// // // the extracted parts of a new string.

// // //Example:

// // // const txt = "Hello Javascript"
// // // const result = txt.slice(0, 5);
// // // console.log(result)
// // // // result = Hello

// // //5. replace() method:: The javascript replace method changes the defined value
// // // to another value

// // //Example:

// // // const txt = "Hello Javascript"
// // // const result = txt.replace("Javascript", "Imran");
// // // console.log(result)
// //  //result = Hello Imran
 

// //  6. includes method() :: The includes() method is used to determine whether 
// //  a string contains the characters of a specified string or not. If it exists
// //  then return true if does not exist returns false.

// //  Example:

// //  console.log(result)
// //  result = true


// 7. concat() method: The javascript concat method is used for joining two or 
// more strings

// Example:

// const txt1 = "Hello Javascript"
// const txt2 = " How are you"
// const result = txt1.concat(txt2);
// console.log(result)
// result = Hello Javascript How are you
// const txt = "Hello Javascript"
//  const result = txt.includes("Hello")
 


// const students = [
//     {
//         id   : 104,
//         name : "imran",
//         GPA : 3.56
//     },

//     {
//         id   : 105,
//         name : "ramisa",
//         GPA : 3.88
//     },
//     {
//         id   : 106,
//         name : "evana",
//         GPA : 3.95
//     },

//     {
//         id : 107,
//         name : "milli",
//         GPA : 2.95
//     },
    
//     {
//         id : 108,
//         name : "tikli",
//          GPA: 2.00
//     },
// ]

// function studentsName(){
//     return students.filter(function(x){
//         return x.GPA > 3.5;
//     }).map(function(y){
//         return y.name;
//     })
// }

// console.log(studentsName());

// // const studentsName2 = () => students.filter((x) => x.cgpa > 3.5).map((y) => y.id);

// // console.log(studentsName2());




//All in One concept:::::::::::::

const companies = [
{name: "Company One", category: "Finance", start: 1981, end: 2003},
{name: "Company Two", category: "Retail", start: 1992, end: 2008},
{name: "Company Three", category: "Auto", start: 1999, end: 2007},
{name: "Company Four", category: "Retail", start: 1989, end: 2010},
{name: "Company Five", category: "Technology", start: 2009, end: 2014},
{name: "Company Six", category: "Finance", start: 1987, end: 2010},
{name: "Company Seven", category: "Auto", start: 1986, end: 1996},
{name: "Company Eight", category: "Technology", start: 2011, end: 2016},
{name: "Company Nine", category: "Retail", start: 1981, end: 1989}

];


// //forEach:

// companies.forEach(function(company){
//     console.log(company.name);
// });




// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// let canNotDrink = [];

// for (let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21){
//         canNotDrink.push(ages[i]);
//     }
    
// };

// console.log(canNotDrink)

// result = [33, 54, 21, 44, 61, 45, 25, 64, 32]


//Using filter:

// const canNotDrink = ages.filter(age => age >= 21)
// console.log(canNotDrink)
// result = [33, 54, 21, 44, 61, 45, 25, 64, 32]


// Retail companies filter:

// const retailCompanies = companies.filter(company => company.category === 'Retail')
// console.log(retailCompanies)

// result = { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
// { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
// { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }


// Get 80s Companies:

// // const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// // console.log(eightiesCompanies);


// // result:

// // { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
// // { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
// // { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
// // { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
// // { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }

// // Get companies lasted 10 years or more:


// const lastedTenYears = companies.filter(company => (company.end - company.start > 10));
// console.log(lastedTenYears) 

// result = 
// { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
// { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
// { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
// { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 }



// Map::

// const companyNames = companies.map(company => company.name)
// console.log(companyNames)

// result = 
// 'Company One',
// 'Company Two',
// 'Company Three',
// 'Company Four',
// 'Company Five',
// 'Company Six',
// 'Company Seven',
// 'Company Eight',
// 'Company Nine'

