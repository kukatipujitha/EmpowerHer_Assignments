import { url } from '../js/metadata.js';

const nameInput = document.getElementById("name");
const numberInput = document.getElementById("contact");
const addbtn = document.getElementById("addbtn");
const list = document.getElementById("list");

// creation
addbtn.onclick = function () {
    const n = nameInput.value;
    const num = numberInput.value;

    fetch(`${url.JSON}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: n, contact: num })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Saved:", data);   // check if Firebase saves
        nameInput.value = "";
        numberInput.value = "";
        loadData();
    });
}

function loadData() {
    fetch(`${url.JSON}`)
        .then(res => res.json())
        .then(data => {
            console.log("Loaded data:", data);  // check what you are reading
            list.innerHTML = "";

            for (let key in data) {
                list.innerHTML += `
                    <li>${data[key].name} - ${data[key].contact}</li>
                `;
            }
        });
}
