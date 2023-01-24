function getMessage(message,name){
    console.log(`Hi ${name},${message}`);
}
 function greeting(cd) {
    const name= "Ram";
    cd("Good Morning",name);
    
 }

greeting(getMessage);