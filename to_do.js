const inputBox = document.getElementById("input_box");
const list = document.getElementById("list-container")

addTask = () => {
    if (inputBox.value === '') {
        alert("Write down the task before adding it to your to-do list.....!!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();


}

TaskClickEvent = (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();

    }
}

list.addEventListener("click", TaskClickEvent, false);

saveData = () => {
    localStorage.setItem("data", list.innerHTML);
}

show_mytask = () => {
    list.innerHTML = localStorage.getItem("data");

}

show_mytask();