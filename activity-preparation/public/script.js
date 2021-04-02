/*
*   INITIALIZE FIREBASE🔥
*   ENTER YOUR CODE HERE
*/

/*
*   ASSIGN FIRESTORE TO A VARIABLE `db`
*   ENTER YOUR CODE HERE
*/

const items_ref = db.collection("books");

async function getItems () {
    console.log('getItems')
    items = await items_ref.get()
    if (items) {
        const books = items.docs.map((item) => ({docId: item.id, ...item.data()}))
        console.log(books)
        document.getElementById("firestore-holder").innerHTML = JSON.stringify(books)
    }
}
function addItem() {
    console.log('addItem')

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    db.collection('books').add({
        title,
        author,
        isbn,
    })
}
async function updateItem() {
    console.log('updateItem')
    const docId = document.getElementById('docId').value;

    const book_ref = await db.doc(`books/${docId}`);

    let book_instance = await book_ref.get()
    book_instance = book_instance.data();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;

    console.log({
        title: title ? title:book_instance.title,
        author: author ? author:book_instance.author,
        isbn: isbn ? isbn:book_instance.isbn,
    })

    book_ref.set({
        title: title ? title:book_instance.title,
        author: author ? author:book_instance.author,
        isbn: isbn ? isbn:book_instance.isbn,
    }).then(function(){
        console.log('success')
    }).catch(function(error){
        console.log('failed', error)
    })
}
async function deleteItem() {
    console.log('deleteItem')
    const docId = document.getElementById('docId').value;

    const book_ref = await db.doc(`books/${docId}`).delete();
}