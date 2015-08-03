function addNewItem(list, itemText) {
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.onclick = updateItemStatus;

    var span = document.createElement("span");
    span.innerText = itemText;
   
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    list.appendChild(listItem);
}

var inItemText = document.getElementById("inItemText");
inItemText.focus();
inItemText.select();


var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function() {
    
    var itemText = inItemText.value;

    if (!itemText || itemText == "" || itemText == " ") {
        return false;
    }
        addNewItem(document.getElementById("shoppingList"), itemText)
    };

function updateItemStatus() {
    console.log(this);
    myThis = this;
    if (this.checked) {
        this.parentElement.className = "checked";
    } else {
         this.parentElement.className = "";
    }
}
