document.addEventListener("mouseup",event=>{
    var selected = document.getSelection();
    var selectedNode;
    try {
        selectedNode = selected.baseNode.parentElement
    } catch(error) {
        return;
    }
    if(selected.toString()=='') {
        return;
    }
    var innerText = selectedNode.innerText
    var innerHTML = selectedNode.innerHTML

    console.log(innerHTML)
    console.log(selected.toString())

    var index = selectedNode.innerHTML.search(selected.toString())
    selectedNode.innerHTML = `${selectedNode.innerHTML.slice(0,index)}<span id="text1">${selected.toString()}</span>${selectedNode.innerHTML.slice(index+selected.toString().length, selectedNode.innerHTML.length)}`

    document.getElementById("text1").style.color = "red"
})