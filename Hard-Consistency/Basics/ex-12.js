let a=[2,9,4,45,89];

// sorting
const fruites=['banana','apple','orange','mango'];

console.log(fruites.sort());


// sort numbers acesnding
const points=[30,89,23,1,5,10];
const res=points.sort((a,b)=>a-b);
console.log(res);

// sort numbers decesnding

const rev=points.sort((a,b)=>b-a);
console.log(rev);

// find max using built in fns
let max_val=Math.max(...points);
let min_val=Math.min(...points);
console.log(max_val);
console.log(min_val);



// find max

//
let bag=[4,3,90,23,45];
bag.sort((a,b)=>a-b);
let minVal=bag[0];

bag.sort((a,b)=>b-a);
let maxVal=bag[0];

console.log('Min:'+minVal);
console.log('Max:'+maxVal);


/*for(let i=0;i<a.length;i++){
    for(let j=1;j<a.length;i++){
        if(a[i]>a[j]){
            console.log(`${a[i]} is maximum`);
        }
        
    }
}*/