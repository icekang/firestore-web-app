var firebaseConfig = {
  apiKey: "{XXXXX}",
  authDomain: "{PROJECT-ID}.firebaseapp.com",
  projectId: "{PROJECT-ID}",
  storageBucket: "{PROJECT-ID}.appspot.com",
  messagingSenderId: "{XXXXX}",
  appId: "{XXXXX}"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const items_ref = db.collection("items");

async function showItemsInTable() {
  const table_body = document.getElementById('main-table-body')
  table_body.innerHTML = ''

  const collection = await items_ref.get()
  const items = collection.map((item) => ({ docId: item.id, ...item.data() }))
  items.map((item) => {
      table_body.innerHTML += `
      <tr id="${t.docId}">
          <td>${t.name}</td>
          <td>${t.owner}</td>
          <td>${t.price}</td>
          <td><button class="delete-row" onclick="deleteItem('${t.docId}')">ลบ</button></td>
        </tr>
      `
  })

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("showing items from database"), showItemsInTable();
});

function redrawDOM() {
  window.document.dispatchEvent(new Event("DOMContentLoaded", {
      bubbles: true,
      cancelable: true
  }));
  document.getElementById("item-to-add").value = "";
  document.getElementById("name-to-add").value = "0";
  document.getElementById("price-to-add").value = "";
}

async function addItem() {
  const name = document.getElementById("item-to-add").value
  const owner = document.getElementById("name-to-add").value
  const price = document.getElementById("price-to-add").value
  items_ref.add({ name: name, owner: owner, price: price });
}

var addButton = document.querySelector("#add-newrow");
addButton.onclick = async () => {
  addItem().then(() => {
    redrawDOM();
  });
}

async function deleteItem(docId) {
  console.log("delete the item with", docId)
  items_ref
    .doc(`${docId}`)
    .delete()
    .then(() => {
      redrawDOM();
    });
}

