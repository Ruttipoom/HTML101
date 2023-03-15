//string concatenated

let FirstName = 'Ruttipoom';
let lastName ='Paopinta';

let fullName = FirstName +'  ' +lastName;



console.log(`This is me ${fullName} and I can split my fullname into firstname is ${FirstName} and lastname is ${lastName}.`);




//null คือ ค่าว่างเปล่า user ใส่คำสั่ง


let selectFruit = ['apple', 'orange', 'banana',];
selectFruit[3] = 'pineapple';
selectFruit[4] = 5;
selectFruit[2] = 'kiwi';
console.log(selectFruit);
console.log(selectFruit.length);
//การเพิ่มการนับ array(select fruit คือ array   )



let user = {
    firstname: 'Ruttipoom',
    lastname: 'Paopinta',
    email: 'ruttipoomrtp8@gmail.com',
    age: 21,
    location: 'CR',
    readinglist:['HTML', 'CSS', 'JavaScript',],
    changetypeTest: 555,
    
}

user.changetypeTest= 'TESTTEST';
user.age +=2;
console.log(user);
console.log(user.age);
console.log(user.readinglist[0]);
console.log(user.location);

console.log(typeof user.email);
console.log(typeof user.age);
console.log(typeof user.changetypeTest);
    

// declaration function
/*info('Yeans')


function info(name) {
   console.log('Hello '+ name);
}*/



//express  function

/*const myinfo = function(name){
   console.log('HELLO  ' + name);
}

myinfo('J')*/


const myinfo = (name) => {
    console.log('Hello '+ name);
  };
  myinfo('K')
  
  
  function addNumbers(a, b) {
     return a + b;
  }
  console.log (addNumbers (5,7));
  
  
  const sum = (a,b) => {
    return a+b
  }
  sum(5,19)
  
  
  const kanid = (a ,b) => a-b
  kanid(19,5)


  ///arrayy
 
const queue = ['Sofia','David','Juan'];
console.log(queue);

// *2 people join line and first queue got call*
queue.push('Sara','Augustin');
queue.shift();
console.log(queue);

// *David save spot for his friend behind him and 1 people join the line*

queue.splice(1,0,'Ranata');
queue.push('Elena');
console.log(queue);



  * Loop & Array

const star = (num) =>{
   for(let i=0; i<num; i++){
       let starArr = []
       for(let n=0; n<=i; n++){
           starArr.push('*')
       }
       console.log(starArr.join(' '));
   }
}
star(5);

 แบบสั้นๆ
let Estars ='' 
   for (let i = 1; i<=5; i++){
       Estars += '*'
       console.log(Estars);
}




//3.1
/*    Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.     */
const xValue = (x) =>{
   console.log(`Your number is started from ${x}.`)
   while(x>0){
       x -= 0.5;
       console.log(`Current number is ${x}`);
   }
}
xValue(10)  

//3.2
/*-    Print all the odd numbers between 1 - 100.    */
const oddNumber = (x) => {
   let Find = [];
   for (let i = 1; i <= x; i++) {
     if (i % 2 === 1) Find.push(i);
   }
   return Find.join(' ');
 };
console.log(oddNumber(50));


//3.3
/*-   Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]    */

const thruSQ = n =>{
   console.log(`Number will shown : ${n} number`)
   let i = 0;
   while(i<n){
       i += 1;
       console.log(`[${i}]`);
   }
}

thruSQ(20);


//3.4
/*-   Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190  */

const Sum = num => {
   let i = 0;
   let sumUp = 0;
   while(i<num){
       i++;
       sumUp = sumUp + i;
   }
   console.log(`Your sum is ${sumUp}.`)
}

Sum(100);

