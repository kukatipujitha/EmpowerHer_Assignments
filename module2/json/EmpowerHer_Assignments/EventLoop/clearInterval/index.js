const loader=setInterval(()=>{
    console.log("loading...")
},1000);
setTimeout(()=>{
    clearInterval(loader);
    console.log("Loaded successfully!")
},5000)