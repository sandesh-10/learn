function intt(){
    var name="Mozilla";
    function displayName(){
        console.log(name);
    }
    name ="Firefox";
    return displayName;
}
const a = intt();
a();