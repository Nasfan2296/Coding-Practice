const factorial=(num)=>{
    let fact=1;
    for(let i=num;i>=1;i--){
        fact*=i;
    }
    console.log(fact);
}

factorial(5);