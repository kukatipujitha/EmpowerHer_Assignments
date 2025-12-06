let addbtn=document.getElementById("addbtn")
let removebtn=document.getElementById("removebtn")
let div=document.getElementById("div");

let count=0;/// to get the count of para
addbtn.addEventListener("click",function(){   //add new para
    let p=document.createElement("p");
    p.innerText="This is a new paragraph";
    p.style.color="white";
    count++;
    if(count%2==0){
    p.style.background="red";}
    else{
      p.style.background="blue"  
    }
    p.className="para";
    div.appendChild(p);

})
removebtn.addEventListener("click",function(){   // remove para
    let paragraphs=div.getElementsByClassName("para");
    if(paragraphs.length>0){
        div.removeChild(paragraphs[paragraphs.length-1]);
    }
    else{
        alert("no paragraph to remove!")
    }

})



	

