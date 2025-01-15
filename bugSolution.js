function foo(a,b){return (a??0) + (b??0);}
console.log(foo(1,2)); //3
console.log(foo(1));   //1
console.log(foo( ,2));  //2
console.log(foo());     //0