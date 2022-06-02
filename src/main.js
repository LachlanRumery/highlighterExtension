document.addEventListener("mouseup",event=>{
    var selected = document.getSelection();
    var selectedNode = selected.baseNode.parentElement
    var innerText = selectedNode.innerText

    var index = selectedNode.innerText.search(selected.toString())
    selectedNode.innerHTML = `${innerText.slice(0,index)}<span id="text1">${selected.toString()}</span>${innerText.slice(index+selected.toString().length,innerText.length)}`

    document.getElementById("text1").style.color = "red"
})