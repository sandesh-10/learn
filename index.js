/** 
 * var
 * let
 * const
 */
var a=9;
let b=10;
const c=11;
{
    console.log("a:>> ",a);
    console.log("b",b);
    console.log("c",c);
}

var d= 111;

function fun(){
    console.log("Inner d" ,d)
}
fun()
console.log("Outer d",d)

/*
 
1.Arithmetic Operator   + - * % /
2. incremental and decremental  -- ++
3. Logical Operator  && != !
4. Assignment operator += -= 
5. Conditional operator <= >= < >
6. Ternary operator 
  condition? true statement: false statement
  
*/


console.log("first",10=="10")    //first true
console.log("first",10==="10")    //first false

const age= 17;

console.log(age>18 ? "You can vote" : "You can not vote")  

/*
   if else
   else if
   for loop
   for in loop
   for of loop
   for each loop
   map
   reduce 
   filter
   switch    

*/

//in   vae ma index

const m= [1,2,3,4]
const i= [1,6,8,4]

for(let val in m){
    console.log("val>>" ,val)
}
console.log("forof")

for(let val of i){
    console.log("val>>" ,val)
}

console.log("forEach")
i.forEach((val)=>{
    console.log("val>>" ,val)
})

console.log("map")

m.map((val)=>{
    console.log("val>>",val+1)
})

console.log("filter", m.filter((val)=>val%2==0))


console.log("reduce= ",m.reduce((a,b)=>a+b))