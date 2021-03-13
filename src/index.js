module.exports = function check(str, bracketsConfig) {
  str = str.split(""); // str теперь массив
  arr = [];

for ( let i = 0; i < bracketsConfig.length; i++ ) {
  for ( let j = 0; j < bracketsConfig[i].length; j++ ) {
    arr.push( bracketsConfig[i] [j] );
    }
}
console.log(arr);

bracketsConfig = arr.join('');

/* убрал пустые ячейки */

for(let i=str.length; i>=0; i--){
  if (str[i] === " ") str.splice(i, 1);
  }

for (let j=0; j<bracketsConfig.length; j+=2){
  
  for (let i = 0; i<str.length; i++){
    
    if (str[i] == bracketsConfig[j] && str[i+1] == bracketsConfig[j+1]){
      
      
      str.splice(i, 2); 
      i=-2; j=0; 
    }

  }
}
return str == '';
}
