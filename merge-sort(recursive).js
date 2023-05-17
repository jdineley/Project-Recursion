//  Merge sort recursive

// merge: sorts two already sorted arrays a,b
 function merge(a,b) {
    
    let i = 0;
    let j = 0;
    let k = 0;
    let c = []
    while(i < a.length && j < b.length) {
        if(a[i] < b[j]) {
            c[k++] = a[i++];
        }
        else {
            c[k++] = b[j++]
        }
    }
    if(i === a.length){
        c.push(...b.slice(j))
    } else {
        c.push(...a.slice(i))
    }
    return c
}



 function mergeSort(arr, l, h) {
    if(l < h) {
        let numEl = (h-l)+1
        let mid = Math.floor((l+h)/2)
       
        mergeSort(arr,l, mid)
        
        mergeSort(arr, mid+1, h)
        let a = arr.slice(l, mid+1)
        let b = arr.slice(mid+1, h+1)
        
        arr.splice(l, numEl, ...merge(a,b))
        
    } else {
        return
    }
    return arr
 }

 function randomNumberGenerator(max) {
    return Math.floor(Math.random()* max)
}
function randomNumArrayGenerator(n) {
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(randomNumberGenerator(400))
    }
    return arr
}

let list = randomNumArrayGenerator(114)

console.log(mergeSort(list, 0, list.length-1))

