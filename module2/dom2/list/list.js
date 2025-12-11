// const L1=document.getElementById("first");
// const f1=L1.firstElementChild;
// f1.style.color="red";
const AllEle=document.querySelectorAll("ul");
AllEle.forEach(AllEle => {
    const first=AllEle.firstElementChild;
    const last=AllEle.lastElementChild;
    first.style.color="blue";
    last.style.color="red";
    const middle=first.nextElementSibling;
    middle.style.color="purple";
})
    first.style.backgroundColor="black";
    last.style.backgroundColor="blue";
    middle.style.backgroundColor="red";