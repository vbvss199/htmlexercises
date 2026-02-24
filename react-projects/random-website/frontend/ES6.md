key words : let, const these r the latest keyowrds in the es6 
previous versions used to have var (it can be used anywhere in the programme just like global declaration so any variable defined with the same name gets overided in the programm)
let (blocking level scope) if we defined the variable using let the scope is still isnide the funciton not outside 
CONST -> if we defined any variable using the const then we canot reassign the variable again so the value is final so const api_key="sjcnjdcndjcp';
{
    var num=10;
}
console.log(num);  //this can be qccessed in tge outside block as well 
but if we use let then console.log(num) //we cannot print this value (error: number is not defined !!!!! OUTSIDE OF THE SCOPE )
if we want to restrict the variable inside the block level we use the let keyword 
const num=10
num=20 (error ! so we cannot reintiate the num again TYPE ERROR assignment to constant varriable )
if we want to limit scope => let
global level=> var
const value=> const 

<!-- Arrow Functions -->
in older functions we used the keyword function 
function test(){
  curley braces defines the block !!!!   
  console.log("hey")
}
test() // prints hey 

<!-- same functionality with ES6 we use const keyword as dont reassign or change the functions -->
const test= (n1,n2) =>{ //arrow function
    console.log("hey); //block of the code 
    console.log("sum":num1+num2)
}
test(10,20) //prints hey 

<!-- classes in ES6  -->
we can define using function or clases in the react the componenets mostly in the functions 
classes defined using the keyword class 
//when class is cerated we need to have a constructor 
//special member function
//similar to the values we passed to the function to initialise the values 
//to the class or initiante them we should have the constructor 
we will have multiple METHODS the functions inside the classes are called as methods as they dont have any special keyword function so they are called as methods 
class test{
    constructor(){
        console.log("im from the constructor" );
    }
    method1(){

    }
    method2(){

    }
}
as always if we create a object by default the constructor is going to get called ! as its already part of the class
object in the js is created by anew keyword 
new test(); //outputs im from the constructor 
if we send the values to the constructor new test(20,20);
constructor(number1,number2){
    this.number1=number1;  //this.number 1 is the local variable !
    this.number2=number2 ;// to store the variables locally just like self 
    console.log(number1+number2);
}
self keyword in python refers to the current object or instance , same like python "this " keyword refers to the current object!!!

if we use an extra method inside the class using those two variables 
class test{
    constructor(){
        console.log("im from the constructor" );
    }
    sum(){
        console.log(this.number1+this.numer2);
    }
}
new test(10,20).sum() //console the output as 30 
using the object refernce we called using (.) operator  

<!-- async and await  -->
as we get some delay to handle them properly we use async and await 
in the previous versions we used .then(response=>response.data).then().catch((error)=>console.log(error))

<!-- newer version of the above using async and await  -->
these are used to handle the http promises requests 
async function getData(){
    try{
        const response =await fetch("api url);
        const data=response.json()
        console.log(data);

    }catch(error){
        console.log(error)
    }
}
we use axios for better handelling and parsing instead of fetch 
axios.get("/api/users")
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
has additional features like time out
axios.get("/api", { timeout: 3000 });

const App=()=>{
    <!-- here comes the pichi hooks again  useEffect() ? side effects  -->
    useEffect(
        ()=>{
            axios.get(url).then(response=>{

            })
        }
    )
}
without using the then keyword if response is delayed we end up with no response so in order tos tore it we use the .then 
useEffect(
    async ()=>{
        const response=await axios.get() //using await the executions stops unitl response get back and  the next line  is executed ! 
        Only that particular async function is paused. The JavaScript thread is free to execute other code
        console.log(); 
    }
)
When await happens:
The function is removed from the call stack
The Promise continues in the background (Web APIs / environment)
The thread is FREE
When resolved → function resumes via event loop, Only that function pauses.
The thread keeps working.
asynchronous -> non blocking !

<!-- destructuring! -->
unpacking and assigning multiple values ! 
const person={
    name:"joic",
    age:25
    mail:""
}
//object created 
console.log(person.age) //prints the values 
console.log(age) //throws error
to unpack the values here comes the destructuring
const {name,age,mail}=person
console.log(age) //prints the age !!! fine 
Destructuring helps to unpack from arrays or objects into individual objects!

<!-- Spread Operator -->
spread operator takes an iterable objects and expands it into the individual elements 
var arr1=[10,20,30,40];
var arr2=[5,60]
if we wanna use the arr1 values inside the arr2 we use the spread
var arr3=[...arr1,70,80]
console.log(arr3) // [10,20,30,40,70,80]
var obj1={
    name:"john"
}

var obj2={
    ...obj1,
    age:25,
    mail:"mail@gmail.com
}
console.log(obj2) //
{
    age:25,
    mail:"",
    name:"john"
}

<!-- in Built Functions 1. Map/Filter -->
used heavily in the react functions to iterate the array elements !!!!
<!-- map -->
Variable.map((element)=>console.log(element));
Variable is array or an object we wanna iterate 
var arr=[10,20,30,40,50,60,70,80,90]
arr.map((element)=>console.log(element));
prints the array elements

<!-- filter  -->
array.filter((element)=>condition)
filter will return array of values based on the condition 
let filtered=arr.filter((element)=>element>20);
returns the array with elements greater than 20 

<!-- filter map filter reduce ! -->
to make transformations to the array we use these methods !
double triple binary of the given array we use the map 
const arr =[5,1,3,2,6]
//double is a function 
function double(x){
    return x*2
}
const output=arr.map(double)
//so the above line runs the double fucntion on each value and creates a new array 
console.log(output) //[10,1,6,4,12]
<!-- the same also can be wriiten as -->
const doubled = arr.map((element) => {
  return element * 2;
});,
the above functions works without the return as well !!! 
const doubled = arr.map(element => element * 2);


<!-- the same thing with the filter function  -->
returns the new array after filtering ! 
const output=arr.filter((element)=>element%2===0)
console.log(5 === "5");  // false
console.log(5 == "5");   // true coz 5 is explicitly converted to string 

<!-- reduce function  -->????? 
take all the elements of the array and come up with the single value !
like take all the elements of the array ,iterate and return the sum 
to find the sum ,max ,min 
const arr=[5,1,3,2,6]
lets look at the traditional sum fucntion 
function sum(arr){
    let sum=0;
    for(i=0;i< arr.len;i++){
        sum=sum+arr[i]
    }
}
<!-- lets reduce the functon -->
<!-- have two params  -->
the reduce function runs on the each element of the array which is stored in the current 
and the accumulator value is used to accumulate the sum! 
but the question is how do we initialise the acc value , hahah it is done by the passing the second variable for the reduce function for the very first time ! 
<!-- so reduce(function ()=>{},0) the second param 0 is the initial value for the acc  -->
const output=arr.reduce((accumulator,current)=>{
    acc=acc+curr;
    return acc; //acc is acting like a sum which is storing all the values 

})
and 
const output = arr.reduce(function (accumulator, current) {

}); are same 

<!-- lets find the max of the array  -->
const max=arr.reduce((acc,current)=>{
    if(current>acc){
        acc=current
    }
    return acc;
},0)
//one correction to the above just return the acc value 
<!-- we can change the values if we confuse them  -->

<!-- special use of the map filter and reduce functions  -->
if we get a list of users
user=[
    {},{},{},.....{}
]
list of full names of all the users
user.map((element)=> element.firstName)
or we can destructuring
const firstNames = users.map((element) => {
  const { firstName,lastName,age } = element;
  return firstName;
});

<!-- list the number of persons for the age {26:2,75:1,50:1} -->
const output=users.reduce(function(acc,red){},{})//initially the accumulator will be an empty object  
const output=users.reduce(function(acc,current){
    if(acc[current.age]){
        acc[current.age]=++acc[current.age];
    }else{
        acc[current.age]=1;
    }
    return acc
},{})

<!-- using filter find the firstnames of people whose age is 30 -->
const output=arr.filter((obj)=>{
    obj.age<30
})
now we get some objects which are < 30 now iterate over them
const output=arr.filter((obj)=>
    obj.age<30
).map(element=>
    element.firstName
)

<!-- WHEN WE USE CURLEY BRACES WE NEED TO RETURN SOMETHING EXPLICITLY SO JUST WITHOUT CURLEY REDEFINE  -->
const output = arr
  .filter((obj) => {
    return obj.age < 30;
  })
  .map((element) => {
    return element.firstName;
  });

  <!-- lastly some hooks !!!!!!!!  -->
  React calls your component function again to update the UI. = re render 
  runs the component function and updates the Dom to update the ui 
  to do some side code or side tasks we go with the useEffect !
  it takes two arguments one is function and the other is dependency so the dependency to re render after it detect changes 
  
  useEffect(()=>{}) //runs after re render
  useEffect(()=>{},[]) //runs only on mount not after re render
  useEffect(()=>{},[value]) //runs on mount + when value changes 

  the main use of the useEffect hook is to fetch the data from the API

  function Mycomponent(){
    const [count,SetCount]=useState(0);
    
    function addCount(){
        setCount((c)=>c+1);
    }
    return (
        <>
        <p>count:{count}</p>
        <button onClick ={addCount}></button>
        </>
    )
  }

now lets use the useEffect everytime the count changes we will change the title of the document 

 function Mycomponent(){
    const [count,SetCount]=useState(0);
    //useEffect(function,[dependenies]); //we need to write some code when //the dependency changes , need to run the function 
    useEffect(()=>{
        document.title=`count:${count}`
    })
    <!--if we want to change the tile only once we use [] array as a dependency  -->
     useEffect(()=>{
        document.title=`count:${count}`
    },[count])
    <!-- if nothing is provided still its going to work due to rerender of the count  -->
    function addCount(){
        setCount((c)=>c+1);
    }
    return (
        <>
        <p>count:{count}</p>
        <button onClick ={addCount}></button>
        </>
    )
  }

  <!-- one of the beautiful example like if we resize the screen the width changes which is of the useEffect  -->
  <!-- without this there will be 1000 of event listeners created   -->
  <!-- and used to return cleanups ! -->
  so to fetch only once we use Effect but the fetch() will re run after evry rerender 