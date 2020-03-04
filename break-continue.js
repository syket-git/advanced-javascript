const ages = [1, 2, 3, 4, 5, 6, 7];
for(let i = 0; i<ages.length; i++){
    if(ages[i] > 3){
        break;
    }
    //console.log(ages[i]);
}

const age = [1, 2, 3, 4, 5, 6, 7];
for(let i = 1; i<age.length; i++){
    if( age[i] % 2 == 0){
        console.log(age[i]);
    }
}