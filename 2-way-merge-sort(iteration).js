// merge (2-way merge)
// method for merging two already sorted arrays into one sorted array

function merge(arg) {

    let inputLength = arg.length
    let a = arg.slice(0, (inputLength/2))
    let b = arg.slice((inputLength/2))
    
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

// 2-way merge sort - iterative proceedure
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

let list = randomNumArrayGenerator(14)
//         [9 , 3 , 7 , 5 , 6 , 4 , 8 , 2]   //8 separate lists
//      [(3 , 9) , (5 , 7) , (4 , 6) , (2 , 8)]   //4 separate sorted lists
//        [(3 , 5 , 7 , 9) , (2 , 4 , 6 , 8)]   //2 separate sorted lists
//          [2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]     //1 sorted list 

// the logic is to split the unsorted array into separate elements and consider each element a separate list and then use a 2-way sort to progressively sort the original array

function twoWayMergeSort(arr) {
    for(let p = 2; p <= arr.length; p*=2) {
        for(let i = 0; i < arr.length; i+=p){
            let subArr = []
            for(let j = 0; j < p; j++){
                subArr.push(arr[i+j])
            }
            let c = merge(subArr)
            for(let k = 0; k < p; k++){
                arr[i+k] = c[k]
            }
        }
    }  
    // The logic is set up to fit 2 squared array lengths
    // If outside this then some ordered arrays get compared to undefined which has no net effect
    // Here we filter away the undefined, but the result is correct
    return arr.filter(el => {
        if(el) return el
    })
}

console.log(twoWayMergeSort(list))