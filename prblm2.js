// Problem 2 : Check whether a string is palindrome or not.

let str = "racecar"
let bag=""
for(i=str.length-1;i>=0;i--){
  bag=bag+str[i];
}
if(bag==str){
  console.log("Yes");
}else{
  console.log("No");
}

 