/**
 * pending when promise is started
 * fulfiled when promise is resolved
 * rejected when promise is rejected
 */
/**]
 * then() promise resolve
 * catch() promise reject
 */
const promisel =new Promise((Respond,reject)=>{
    const status=true;
    if(status){
        Respond("Promise resolve");
    }
    else{
        reject("Promise reject");

    }
})

promisel
.then((data)=>console.log("then",data))
.catch((err)=>console.log("catch",err))
.finally(()=> console.log("finally"));
