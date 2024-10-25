let toggleForm  = true;
let toggleEditForm = true;
let allBooks=[
    {
        bookId: 101,
        bookTitle: "Harry Potter and the order of phoenix",
        bookPrice:250,
        bookGenre: "Fantacy",
        bookPublished: "2010-10-10",
        bookDescription: "Harry Potter is a series of novels by British author J. K. Rowling. The novels follow Harry Potter, an 11-year-old boy who discovers he is the son of famous wizards and will attend Hogwarts School of Witchcraft and Wizardry.",
        bookImageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bookAuthor: {
            authorId: 501,
            authorFirstName: "Rowling",
            authorLastName: "J.K"

        }
    },
    {
        bookId: 102,
        bookTitle: "Harry Potter and the prizoner of phoenix",
        bookPrice:300,
        bookGenre: "Fantacy",
        bookPublished: "2011-08-10",
        bookDescription: "It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic.",
        bookImageUrl: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bookAuthor: {
            authorId: 501,
            authorFirstName: "Rowling",
            authorLastName: "J.K"

        }
    },
    
    
    {
        bookId: 103,
        bookTitle: "Treasures of the Maya",
        bookPrice:150,
        bookGenre: "Comedy",
        bookPublished: "2009-09-10",
        bookDescription: "The new treasure map uncovers a mysterious and long-lost pyramid complex that reveals startling clues of violent sacrifice. ",
        bookImageUrl: "https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bookAuthor: {
            authorId: 502,
            authorFirstName: "Geronimo",
            authorLastName: "Stilton"

        }
    }
];

let allAuthors = [
    {
        authorId: 501,
        authorFirstName: "Rowling",
        authorLastName: "J.K"

    },
    {
        authorId: 502,
        authorFirstName: "Geronimo",
        authorLastName: "Stilton"
    }
    

];

function loadAllBooks(){
    let content = ``;
    allBooks.forEach((eachBook) => {
        content += `<tr>`;
        content += `<td>${eachBook.bookId}</td>`;
        content += `<td><img src="${eachBook.bookImageUrl}" width="80" height="50"></td>`;
        content += `<td>${eachBook.bookTitle}</td>`;
        content += `<td><button type="button" class="btn btn-warning" onclick="loadABook('${eachBook.bookId}')">VIEW</button></td>`;
        content += `<td><button type="button" class="btn btn-primary" onclick="showEditBookForm('${eachBook.bookId}')">EDIT</button></td>`;
        content += `<td><button type="button" class="btn btn-danger" onclick="deleteBook('${eachBook.bookId}')">REMOVE</button></td>`;
        content += `</tr>`;
    });
    document.getElementById("display").innerHTML = content;

}
function loadABook(bookId){
    let aBook=allBooks.filter((eachBook)=>eachBook.bookId==bookId);

    let content=`<div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    
                
                    
                    <div class="card">
                        <img width="auto" height="200px" src="${aBook[0].bookImageUrl}">
                        <div class="card-title"><h3>${aBook[0].bookTitle}</h3></div>
                        <div class="card-text mx-5">${aBook[0].bookDescription}</div>
                        <div class="card-title my-1">Book ID: ${aBook[0].bookId}</div>
                        <div class="row">
                            <div class="col-6"><div class="card-text">Book Price: ${aBook[0].bookPrice}  </div></div>
                            <div class="col-6">  <div class="card-text">Book Published: ${aBook[0].bookPublished}  </div></div>
                        </div>
                        <div class="row">
                            <div class="col-6"><div class="card-text">Book Genre: ${aBook[0].bookGenre}  </div></div>
                            <div class="col-6"> <div class="card-text">Book Author: ${aBook[0].bookAuthor.authorLastName} ${aBook[0].bookAuthor.authorFirstName}  </div></div>
                        </div>
                    </div>
                    <ul class="list-group">
                            <li class="list-group-item btn btn-warning m-3" onclick="closeView()">CLOSE</li>
                    </ul>
                </div>
                <div class="col-3"></div>
            </div>
            `;
            document.getElementById("view").innerHTML=content;
}
function closeView(){
    document.getElementById("view").innerHTML = "";
}

function showAddBookForm(){
    let content = ``;

    let authorContent = ``;
    allAuthors.forEach((eachAuthor) => {
        authorContent += `<option value='${eachAuthor.authorId}'>${eachAuthor.authorId} - ${eachAuthor.authorLastName}, ${eachAuthor.authorFirstName}</option>`;
    });

    if(toggleForm){
        content = `
        <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <div class="card">
                        <form>
                            <div class="card-header bg-success text-light"><h3>ADD A NEW BOOK</h3></div>
                            <div class="card-body">
                                <div class="form-control-group">
                                    <label for="bTitle">Book Title:</label>
                                    <input type="text" id="bTitle" class="form-control">
                                </div>
                                <div class="form-control-group">
                                    <label for="bPrice">Book Price:</label>
                                    <input type="text" id="bPrice" class="form-control">
                                </div>
                                <div class="form-control-group">
                                    <label for="bGenre">Book Genre:</label>
                                    <select id="bGenre" class="form-control">
                                        <option>--select--</option>
                                        <option value="Comedy">Comedy</option>
                                        <option value="Fantasy">Fantasy</option>
                                    </select>
                                </div>
                                <div class="form-control-group">
                                    <label for="bPublished">Book Published:</label>
                                    <input type="date" id="bPublished" class="form-control">
                                </div>
                                <div class="form-control-group">
                                    <label for="bDescription">Book Description:</label>
                                    <textarea id="bDescription" class="form-control"></textarea>
                                </div>
                                <div class="form-control-group">
                                    <label for="bImage">Book Image Url:</label>
                                    <input type="text" id="bImage" class="form-control">
                                </div>
                                <div class="form-control-group">
                                    <label for="bAuthor">Book Author:</label>
                                    <select id="bAuthor" class="form-control">
                                        <option>--select--</option>
                                        ${authorContent}
                                    </select>
                                </div>
                            </div>
                            <div class="card-footer bg-success text-light">
                                <button type="button" class="btn btn-light text-success" onclick="addBook()">ADD</button>
                                <button type="reset" class="btn btn-light text-success mx-5">CLEAR</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-3"></div>
            </div>
        `;
    } else {
        content = ``;
    }
    toggleForm = !toggleForm;
    document.getElementById("add-form").innerHTML = content;
}

function addBook(){
    let formData = {
        bookId: allBooks[allBooks.length-1].bookId + 1,
        bookTitle: document.getElementById("bTitle").value,
        bookPrice: document.getElementById("bPrice").value,
        bookGenre: document.getElementById("bGenre").value,
        bookPublished: document.getElementById("bPublished").value,
        bookDescription: document.getElementById("bDescription").value,
        bookImageUrl: document.getElementById("bImage").value,
        bookAuthor: {
            authorId: document.getElementById("bAuthor").value
        }
    }
    allBooks.push(formData);
    showAddBookForm();
    loadAllBooks();
}
function deleteBook(bookId){
    allBooks=allBooks.filter((eachBook)=> eachBook.bookId!=bookId);
    loadAllBooks();

}
function showEditBookForm(bookId){
    let content = ``;

    let aBook = allBooks.filter((eachBook) => eachBook.bookId==bookId);

    let authorContent = ``;
    allAuthors.forEach((eachAuthor) => {
        authorContent += `<option value='${eachAuthor.authorId}' ${aBook[0].bookAuthor.authorId==eachAuthor.authorId?'selected':''}>
                            ${eachAuthor.authorId} - ${eachAuthor.authorLastName}, ${eachAuthor.authorFirstName}
                         </option>`;
    }); 

    if(toggleEditForm){
        content = `
        <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <div class="card">
                        <form>
                            <div class="card-header bg-primary text-light"><h3>EDIT A BOOK</h3></div>
                            <div class="card-body">
                                <div >
                                <h5>Book ID: ${aBook[0].bookId}</h5>
                                </div>

                                <div class="form-control-group">
                                    <label for="bTitle">Book Title:</label>
                                    <input type="text" id="bTitle" class="form-control" value="${aBook[0].bookTitle}">
                                </div>
                                <div class="form-control-group">
                                    <label for="bPrice">Book Price:</label>
                                    <input type="text" id="bPrice" class="form-control" value="${aBook[0].bookPrice}">
                                </div>
                                <div class="form-control-group">
                                    <label for="bGenre">Book Genre:</label>
                                    <select id="bGenre" class="form-control">
                                        <option>--select--</option>
                                        <option value="Comedy" ${aBook[0].bookGenre == 'Comedy'?'selected':''} >Comedy</option>
                                        <option value="Fantasy" ${aBook[0].bookGenre == 'Fantasy'?'selected':''}>Fantasy</option>
                                    </select>
                                </div>
                                <div class="form-control-group">
                                    <label for="bPublished">Book Published:</label>
                                    <input type="date" id="bPublished" class="form-control" value="${aBook[0].bookPublished}"> 
                                </div>
                                <div class="form-control-group">
                                    <label for="bDescription">Book Description:</label>
                                    <textarea id="bDescription" class="form-control">${aBook[0].bookDescription}</textarea>
                                </div>
                                <div class="form-control-group">
                                    <label for="bImage">Book Image Url:</label>
                                    <input type="text" id="bImage" class="form-control" value="${aBook[0].bookImageUrl}">
                                </div>
                                <div class="form-control-group">
                                    <label for="bAuthor">Book Author:</label>
                                    <select id="bAuthor" class="form-control">
                                        <option>--select--</option>
                                        ${authorContent}
                                    </select>
                                </div>
                            </div>
                            <div class="card-footer bg-primary text-light">
                                <button type="button" class="btn btn-light text-primary" onclick="updateBook(${aBook[0].bookId})">UPDATE</button>
                                <button type="reset" class="btn btn-light text-primary mx-5">CLEAR</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-3"></div>
            </div>
        `;
    } else {
        content = ``;
    }
    toggleEditForm = !toggleEditForm;
    document.getElementById("edit-form").innerHTML = content;
}
function updateBook(bId){
    let formData = {
        bookId: bId,
        bookTitle: document.getElementById("bTitle").value,
        bookPrice: document.getElementById("bPrice").value,
        bookGenre: document.getElementById("bGenre").value,
        bookPublished: document.getElementById("bPublished").value,
        bookDescription: document.getElementById("bDescription").value,
        bookImageUrl: document.getElementById("bImage").value,
        bookAuthor: {
            authorId: document.getElementById("bAuthor").value
        }
    }
    console.log(formData);
    for(let i=0;i<allBooks.length;i++){
        if(allBooks[i].bookId == bId){
            allBooks[i] = formData;
            break;
        }
    }

    showEditBookForm(bId);
    loadAllBooks();
}
function loadAllAuthors(){

}