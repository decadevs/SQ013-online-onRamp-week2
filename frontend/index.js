let list = document.getElementById("lists");
let text = document.getElementById("texts");
let listitem4 = document.getElementsByClassName("item4")[0];

function changeText2() {
  let textval = text.value;
  let entry = document.createElement("li");
  entry.appendChild(document.createTextNode(textval));
  list.appendChild(entry);
  entry.classList.add("item4");
  listitem4.classList.remove("item4");
}
