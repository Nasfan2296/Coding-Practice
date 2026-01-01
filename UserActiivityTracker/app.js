//01- count occurences
const roles = ["admin", "user", "user", "admin", "guest"];

// output={admin=2,user=2,guest=1}
const result={};

for(let role of roles){
    if(result[role]){
        result[role]++;
    }else{
        result[role]=1;
    }

}

console.log(result);

// 02 remove duplicates
const emails = ["a@gmail.com", "b@gmail.com", "a@gmail.com"];
// set  - remove duplicates
const uniqueEmails=[...new Set(emails)];
console.log(uniqueEmails); 

// 03 Safe Property Access
const user = { profile: { name: "Ali" } };

const name=user?.profile?.name || 'Unknown';
console.log(name);

// 04 sort

const messages=[
    {text:'Hi',time:5},
    {text:'Hello',time:3}
];

