const writeItem = document.getElementById("writeItem")
const listContainer = document.querySelector("ul")

const alertBox = document.getElementById("alert")
const closeAlertBtn = document.getElementById("close")
alertBox.style.opacity = "0"
alertBox.style.transition = "opacity 0.25s ease"
alertBox.style.display = "none"

function showAlert() {
    alertBox.style.display = "flex"

    setTimeout(() => {
        alertBox.style.opacity = "1"
    }, 10)

    setTimeout(() => {
        hideAlert()
    }, 3000)
}


function hideAlert() {
    alertBox.style.opacity = "0"

    setTimeout(() => {
        alertBox.style.display = "none"
    }, 500)
}


closeAlertBtn.addEventListener("click", hideAlert)

function addItem() {

    if (writeItem.value === '') {
        alert("Você deve escrever algo")
    }
    else {
        const newItem = document.createElement("li")
        newItem.classList.add("item")

        const checkItem = document.createElement("input")
        checkItem.classList.add("check")
        checkItem.type = "checkbox"

        const nameItem = document.createElement("span")
        nameItem.classList.add("nameItem")
        nameItem.textContent = writeItem.value

        const trashItem = document.createElement("button")
        trashItem.addEventListener("click", deleteItem)
        trashItem.classList.add("delete-btn")

        const img = document.createElement("img") 
        img.src = "assets/icons/button.svg"
        trashItem.appendChild(img)

        newItem.prepend(nameItem) 
        newItem.prepend(checkItem) 
        newItem.append(trashItem) 
        
        listContainer.prepend(newItem)

        writeItem.value = ""
    }
}

function deleteItem(event) {
    const button = event.currentTarget       
    const item = button.parentElement        
    item.remove()
    
    showAlert()
}