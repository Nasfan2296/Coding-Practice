
/*const string='web style press';

console.log(string.includes('w'));

for(let chars of string){
    console.log(chars);
}*/


function countVowel(txt){
    let count=0;
    const vowels=['a','e','i','o','u'];

    for(let chars of txt.toLowerCase()){
        if(vowels.includes(chars)){
            count++;
        }
    }
    return count;


}

console.log(countVowel('Web styles Press'));
console.log(countVowel('nasfan i have pen '));


const CountRegex=(name)=>{
    const matches=name.match(/[aeiou]/gi);
    return matches ? matches.length :0;
}

console.log(CountRegex('Nasfan from mavadipalli'));

