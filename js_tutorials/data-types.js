function performOperation(secondInteger, secondDecimal, secondString)
{
    let a= parseInt(secondDecimal);
    let b= parseFloat(secondDecimal);
    let c= parseInt(secondInteger);
   
    let d= c + 4;
    let e=b+4;
    let f= "HackerRank " + secondString;
    console.log(d)
    console.log(e)
    console.log(f)
}

function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();
    
    performOperation(secondInteger, secondDecimal, secondString);
}
