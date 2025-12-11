function processCategories(categories) {

   
    const countObj = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    
    const sortedCategories = Object.entries(countObj)
        .sort((a, b) => b[1] - a[1])   
        .map(entry => entry[0]);       

    return sortedCategories;
}


let arr = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];


console.log(processCategories(arr));
