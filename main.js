freshman = document.getElementById("freshman");
sophmore = document.getElementById("sophmore");
myInterval = setInterval(class_changeshow, 5000);
slideNumber = 0;


sophmore.style.display = "none";

function class_changeshow() {
    //freshman - visible, sophmore - not visible
    if (freshman.style.display == "") {
       freshman.style.display = "none";
        sophmore.style.display = "";
    }

    else if (sophmore.style.display == "") {
        freshman.style.display = "";
        sophmore.style.display = "none";
    }
}