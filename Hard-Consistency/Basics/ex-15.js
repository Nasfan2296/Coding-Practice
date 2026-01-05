
/*let arr=[10,20,4,45,99,99];

arr.sort((a,b)=>b-a);

let first=arr[0];
let res=null;

for(let i=1;i<arr.length;i++){
    if(arr[i]<first){
        res=arr[i];
        break;
    }
}

console.log(res !==null ? res :'No second largest number');*/

function secondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num < first && num > second) {
            second = num;
        }
    }

    return second === -Infinity 
        ? "No second largest element" 
        : second;
}

console.log(secondLargest([10, 20, 4,77, 45, 99, 99]));
