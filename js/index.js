alert('hello')

function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}
const userNum = + prompt('nomer');
document.write(fib(userNum));


//function fib(n) {
//  if (n === 1 || n === 2) {
//   return 1;
//  } else return fib(n-1) + fib(n-2);
//}
//   const userNum =+ prompt('nomer');
//   document.write(fib(userNum));


//function fib(n) {
//    const num1 = 1;
//    const num2 = 1;
//    const next = next;
//    for (let i = 3; i <= n; i++) {
//        next = num1 + num2;
//        num1 = num2;
//        num2 = next;
//    }
//    return next;
//}



//let fibn = [1,1];
//for (i = 2; i <= n; i++) {
//    fibn.push(fibn[i - 2] + fibn[i - 1]);
//}
//return fibn.pop();
//const userNum =+ prompt('nomer');
//document.write(fibn(userNum));
