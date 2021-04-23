const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Enter First Array\n", (a) => {
  rl.question("Enter Second Array\n", (b) => {
     a = a.split(" ");
    for (let i = 0; i < a.length; i++) {
      a[i] = parseInt(a[i]);
    }

     b = b.split(" ");
    for (let i = 0; i < b.length; i++) {
      b[i] = parseInt(b[i]);
    }
    
    let n=a.length,m=b.length;

    if(n>m){
        arraySum(a,b,n,m);
    }
    else{
        arraySum(b,a,m,n);
    }
  });
});

function arraySum(a,b,n,m){

    let arraySum=[];
    let sum=0,carry=0;
    let j=m-1,i=n-1;

    for(;j>=0;j--,i--){
       sum=a[i]+b[j]+carry;
       arraySum.push(sum%10);
       carry=Math.floor(sum/10);
    }
    
    for(;i>=0;i--){
        sum=a[i]+carry;
        arraySum.push(sum%10);
        carry=Math.floor(sum/10);
    }
    
    if(carry){
        arraySum.push(carry);
    }

    arraySum=arraySum.reverse();

    console.log(arraySum);
}
