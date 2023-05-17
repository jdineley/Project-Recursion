// 0 1 1 2 3 5 8 13....
// a b c
//   a b c
//     a b c

// Fib iteration
function fibs(n) {
    if(n === 1) return [0]
    let a = 0;
    let b = 1;
    let i = 3;
    let arr = [0,1];
    while(i <= n) {
        let c = a + b;
        a = b;
        b = c;
        arr.push(c)
        i++
    }
    return arr
}

// Fib recursion with caching (single number return)
function fibsRec1(n, cache = {}, arr = [0,1]) {
    if(n === 1) return 0;
    if(n === 2) return 1;
    let a = n-1
    let b = n-2
    cache[a] = cache[a] || fibsRec(n-1, cache, arr);
    cache[b] = cache[b] || fibsRec(n-2, cache, arr);
    let c = cache[a] + cache[b];
    arr.push(c)
    return c
}

console.log(fibsRec(8))  

// Fib recursion array output
const fibsRec2 = (n, a = [0, 1]) => {
    if (a.length >= n) return a;
    return fibsRec2(n, [...a, a[a.length - 2] + a[a.length - 1]]);
  };
  
  console.log(fibsRec2(6));


