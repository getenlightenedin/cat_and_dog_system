window.onload = function() {

    document.getElementById("selectmore-btn").onclick = function() {
        if (document.getElementById("inputState4").style.display == "none") {
            document.getElementById("selectmore-btn").innerHTML = "隱藏更多篩選";
            document.getElementById("inputState4").style.display = "inline";
            document.getElementById("inputState5").style.display = "inline";
            document.getElementById("inputState6").style.display = "inline";
            document.getElementById("inputState7").style.display = "inline";
        } else if (document.getElementById("inputState4").style.display != "none") {
            document.getElementById("selectmore-btn").innerHTML = "顯示更多篩選";
            document.getElementById("inputState4").style.display = "none";
            document.getElementById("inputState5").style.display = "none";
            document.getElementById("inputState6").style.display = "none";
            document.getElementById("inputState7").style.display = "none";
        }
    }

}