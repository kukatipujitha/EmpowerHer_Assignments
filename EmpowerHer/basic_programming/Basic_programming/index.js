function checkPrime(num){
    let c=0;
    for(let i=0;i<num;i++){
        if(num%i==0){
            c++
        }

    }
    if(c==2){
        return true
    }
    else 
    {
        return false
    }
}
console.log(checkPrime(5))