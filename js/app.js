// add and even number find and add

var input = 6789;
var sum = 0;
while(input>0){
 rem = input%10;
  input = (input-rem)/10;

  if(rem%2==0){
    sum += rem;
   
  }
  
}

console.log(sum);

