function generate() {
    var x = Math.round(Math.random() * (9999 - 1000) + 1000);
    document.getElementById("pindisplay").value = x;
    document.getElementById("notmatch").style.display = "none";
    document.getElementById("matched").style.display = "none";
}
function show(symbol) {
    document.getElementById("inputdisplay").value += symbol;
}
function deleteAll() {
    document.getElementById("inputdisplay").value = "";
    document.getElementById("notmatch").style.display = "none";
    document.getElementById("matched").style.display = "none";
}
function deletedigit(){
    var digitInput = document.getElementById('inputdisplay');
    var currentValue = digitInput.value;
    console.log( "currentvalue:"+currentValue);
    console.log("length of currentvalue"+currentValue.length);
   
    if (currentValue.length > 0) {
        var newValue = currentValue.slice(0, -1);
        console.log("newvalue"+newValue);
        digitInput.value = newValue;
    } else {
        digitInput.value="";
    }
}
function submitFunction() {
    const RandomNumber = parseInt(document.getElementById("pindisplay").value);
    const myNumber = parseInt(document.getElementById("inputdisplay").value);
    if (RandomNumber == myNumber) {
        document.getElementById("matched").style.display = "block";
        document.getElementById("notmatch").style.display = "none";
    }
    else {

        document.getElementById("notmatch").style.display = "block";
        document.getElementById("matched").style.display = "none";
        
        let attempt =parseInt(document.getElementById("use").innerText);
       if(attempt>0){
        attempt = attempt-1;
       }
        document.getElementById("use").innerText=attempt;

       if(attempt==0){
        document.getElementById("submitBtn").style.display="none";
       }
    }
}