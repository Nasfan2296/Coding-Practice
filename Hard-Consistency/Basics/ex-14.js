let fruites=['apple','orange','banana','apple','orange','apple'];

//let uniqueFruites=[];

/*for(let i=0;i<fruites.length;i++){
    if(uniqueFruites.indexOf(fruites[i]) === -1){
        uniqueFruites.push(fruites[i]);
    }
}

for(let fruit of fruites){
    if(!uniqueFruites.includes(fruit)){
        uniqueFruites.push(fruit);
    }
}

// set method
let uniqueFruites=[...new Set(fruites)];*/


// filter

uniqueFruites=fruites.filter((fruit,index)=>fruites.indexOf(fruit)===index);



console.log(uniqueFruites);

