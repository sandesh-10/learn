const fetchApi =async () =>{
    console.log("berore api");
    const response =await fetch("https://api.github.com/users/sandesh-10");
    console.log("before j son data");
    const data = await response.json();
    console.log("data>>>>",data);
    return data
    
}

console.log("Before function call")
fetchApi();
console.log("After function call");