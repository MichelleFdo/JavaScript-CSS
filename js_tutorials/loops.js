function vowelsAndConsonants(s) {
    let arr1= "aeiou";
    let arr2= [];
     let arr3=[];
    for (let i=0;i<s.length; i++ )
    {
        if (arr1.includes(s[i]))
        {
            arr2.push(s[i]);
        } 
        else{
            arr3.push(s[i]);
        }
    }
    console.log(arr2.join('\r\n'));
    console.log(arr3.join('\r\n'));
    
}


function main() {
    const s = readLine();
