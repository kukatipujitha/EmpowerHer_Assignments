function createCounter() {
    let count = 0;  

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        },
        getCount: function () {
            console.log("Current count:", count);
        }
    };
}
const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();  
counter1.increment();  

counter2.increment();  
counter2.decrement();  
