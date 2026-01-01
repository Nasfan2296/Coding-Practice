// reverse built in fn
let str='hello';
let reverseStr=str.split('').reverse().join('');
console.log(reverseStr);

// using for
let name='Nasfan';
let reverseName='';
for(let i=name.length-1;i>=0;i--){
    reverseName+=name[i];
}
console.log(reverseName);