function CreateData(){
    fetch("https://basics-26fdc-default-rtdb.asia-southeast1.firebasedatabase.app/basics.json",{method:"POST",body:JSON.stringify({
        name:"puji",rollno:29,
    })
})
   .then(response => response.json())
    .then(data => console.log("data is added", data));
}

function GetData(){
    fetch("https://practice-6bec0-default-rtdb.firebaseio.com/practice.json",{method:"GET"})
    .then((res)=>res.json())
    .then((data)=>console.log("get the data",data))

}
function UpdateData(){
    fetch("https://practice-6bec0-default-rtdb.firebaseio.com/practice.json",{method:"PATCH",body:JSON.stringify({
        name:"pujitha",rollno:24,
    })
})
   .then((response) => response.json())
   .then((data)=>console.log("data is updated",data))
}
function DeleteData(){

}