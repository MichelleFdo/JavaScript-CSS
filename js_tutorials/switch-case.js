function getLetter(s) {
    let letter;
  
    
    switch(true) {
  case 'aeiou'.includes(s[0]):
    letter="A";
    break;
  case 'bcdefg'.includes(s[0]):
    letter="B";
    break;
  case 'hjklm'.includes(s[0]):
    letter="C";
    break;
  case 'npqrstuvwxyz'.includes(s[0]):
    letter="D";
    break;
  default:
    letter="po";
    // code block
}
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
