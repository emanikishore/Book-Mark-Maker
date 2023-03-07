let submitBtn = document.getElementById("submitBtn");
let nameInput = document.getElementById("siteNameInput");
let urlInput = document.getElementById("siteUrlInput");
let nameMsg = document.getElementById("siteNameErrMsg");
let urlMsg = document.getElementById("siteUrlErrMsg");
let myForm = document.getElementById("bookmarkForm");
let unorderlist = document.getElementById("bookmarksList");

nameInput.addEventListener("change", function(event) {
    myForm.nameInput = event.target.value;
})
urlInput.addEventListener("change", function(event) {
    myForm.urlInput = event.target.value;
})

function emptyNameInput(event) {
    if (nameInput.value === "") {
        nameMsg.textContent = "Required*";
    } else {
        nameMsg.textContent = "";
    }
}

function emptyUrlInput(event) {
    if (urlInput.value === "") {
        urlMsg.textContent = "Required*";
    } else {
        urlMsg.textContent = "";
    }
}

function submitAndAppendData(event) {
    let nameInputVal = nameInput.value;
    let urlInputVal = urlInput.value;

    let listItem = document.createElement("li");
    let siteName = document.createElement("p");
    let anchorItem = document.createElement("a");

    siteName.textContent = nameInputVal;
    anchorItem.textContent = urlInputVal;
    anchorItem.href = urlInputVal;
    anchorItem.target = "_blank";
    listItem.appendChild(siteName);
    listItem.appendChild(anchorItem);

    unorderlist.appendChild(listItem);
    nameInput.value = "";
    urlInput.value = "";
}
myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    emptyNameInput();
    emptyUrlInput();
    submitAndAppendData();
})
