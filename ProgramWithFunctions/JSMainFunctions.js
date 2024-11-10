var result1 = document.getElementById("result1box");
var result2 = document.getElementById("result2box");

function functionName(string,windowId)
{
    var box = document.getElementById(windowId);
    box.innerHTML = string
}

functionName("DUPDUPDUPDUPJAJA","result1box");