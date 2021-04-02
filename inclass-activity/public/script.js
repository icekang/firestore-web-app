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
  const e = document.getElementById("main-table-body");
  e.innerHTML = "";
  (await items_ref.get()).docs
      .map((e) => ({ docId: e.id, ...e.data() }))
      .map((t) => {
        e.innerHTML += `
        <tr id="${t.docId}">
          <td>${t.name}</td>
          <td>${t.owner}</td>
          <td>${t.price}</td>
          <td><button class="delete-row" onclick="deleteItem('${t.docId}')">ลบ</button></td>
        </tr>`;
      });
}

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("showing items from database"), showItemsInTable();
});
function redrawDOM() {
  window.document.dispatchEvent(
    new Event("DOMContentLoaded", { bubbles: !0, cancelable: !0 })
  ),
    (document.getElementById("item-to-add").value = ""),
    (document.getElementById("name-to-add").value = "0"),
    (document.getElementById("price-to-add").value = "");
}

async function addItem() {
  const e = document.getElementById("item-to-add").value,
    t = document.getElementById("name-to-add").value,
    d = document.getElementById("price-to-add").value;
  items_ref.add({ name: e, owner: t, price: d });
}

var addButton = document.querySelector("#add-newrow");
async function deleteItem(e) {
  console.log("delete the item with", e),
    items_ref
      .doc(`${e}`)
      .delete()
      .then(() => {
        redrawDOM();
      });
}
addButton.onclick = async () => {
  addItem().then(() => {
    redrawDOM();
  });
};
