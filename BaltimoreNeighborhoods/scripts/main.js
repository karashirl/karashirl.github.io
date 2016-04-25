
function addEventListenerByClass(className, event, fn) {
    var list = document.getElementsByClassName(className);
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}

function imgZoom(z) {
    var j = z;
    document.getElementById("ft-img-large-cont").style.opacity = "1";
    document.getElementById("ft-img-large-cont").style.zIndex = "1";
    document.getElementById("desc-cont" + j).style.position = "auto";
    document.getElementById("desc-cont" + j).style.overflow = "visible";
    document.getElementById("desc" + j).style.right = "0px";
    document.getElementById("desc" + j).style.zIndex = "auto";
    if (document.documentElement.clientWidth < 1101) {
        document.getElementById("desc" + j).style.position = "relative";
    }
    switch(j) {
        case "0":
            document.getElementById("ft-img-large").style.background = "url('images/patterson.jpg')";
            document.getElementById("ft-img-large").style.backgroundSize = "cover";
            break;
        case "1":
            document.getElementById("ft-img-large").style.background = "url('images/mt_vernon.jpg')";
            document.getElementById("ft-img-large").style.backgroundSize = "cover";
            break;
        case "2":
            document.getElementById("ft-img-large").style.background = "url('images/hampden.jpg')";
            document.getElementById("ft-img-large").style.backgroundSize = "cover";
            break;
        case "3":
            document.getElementById("ft-img-large").style.background = "url('images/fells.jpg')";
            document.getElementById("ft-img-large").style.backgroundSize = "cover";
            break;
        case "4":
            document.getElementById("ft-img-large").style.background = "url('images/harbor_east.jpg')";
            document.getElementById("ft-img-large").style.backgroundSize = "cover";
            break;
        case "5":
            document.getElementById("ft-img-large").style.background = "url('images/mt_wash.jpg')";
            document.getElementById("ft-img-large").style.backgroundSize = "cover";
            break;
    }
    for (var i = 0; i < 6; i++) {
        document.getElementById("neighborhood" + i).style.opacity = "0";
        document.getElementById("neighborhood" + i).style.padding = "0";
        if (document.documentElement.clientWidth >= 1300) {
            document.getElementById("neighborhood" + i).style.height = "310px";
            document.getElementById("ft-img-large-cont").style.width = "calc((100% - 80px) / 2)";
            document.getElementById("ft-img-large-cont").style.height = "700px";
            }
        else if (document.documentElement.clientWidth < 1300 && document.documentElement.clientWidth >= 1100) {
            document.getElementById("neighborhood" + i).style.height = "193.33px";
            document.getElementById("ft-img-large-cont").style.width = "calc((100% - 80px) / 2)";
            document.getElementById("ft-img-large-cont").style.height = "700px";
        }
        else if (document.documentElement.clientWidth < 1100 && document.documentElement.clientWidth >= 700) {
            document.getElementById("neighborhood" + i).style.height = "210px";
            document.getElementById("ft-img-large-cont").style.width = "calc(100% - 55px)";
            document.getElementById("ft-img-large-cont").style.height = "600px";
        }
        else if (document.documentElement.clientWidth < 700) {
            document.getElementById("neighborhood" + i).style.display = "none";
            document.getElementById("ft-img-large-cont").style.width = "calc(100% - 55px)";
            document.getElementById("ft-img-large-cont").style.height = "300px";
            document.getElementById("desc" + i).style.top = "300px";
        }
    }        
}

function undoZoom() {
    document.getElementById("ft-img-large-cont").style.opacity = "0";
    document.getElementById("ft-img-large-cont").style.zIndex = "0";
    document.getElementById("ft-img-large-cont").style.width = "33.33%";
    document.getElementById("ft-img-large-cont").style.height = "500px";
    for (var i = 0; i < 6; i++) {
        document.getElementById("desc-cont" + i).style.position = "relative";
        document.getElementById("desc-cont" + i).style.overflow = "hidden";
        document.getElementById("neighborhood" + i).style.opacity = "1";
        document.getElementById("neighborhood" + i).style.padding = "20px";
        document.getElementById("neighborhood" + i).style.height = "500px";
        document.getElementById("neighborhood" + i).style.display = "table";
        document.getElementById("desc" + i).style.right = "-50%";
        document.getElementById("desc" + i).style.zIndex = "-1";
        document.getElementById("desc" + i).style.position = "absolute";
        document.getElementById("desc" + i).style.overflow = "hidden";

        switch(i) {
            case 0:
                document.getElementById("ft-img-large").style.background = "url('images/patterson.jpg')";
                break;
            case 1:
                document.getElementById("ft-img-large").style.background = "url('images/mt_vernon.jpg')";
                break;
            case 2:
                document.getElementById("ft-img-large").style.background = "url('images/remington.jpg')";
                break;
            case 3:
                document.getElementById("ft-img-large").style.background = "url('images/fells.jpg')";
                break;
            case 4:
                document.getElementById("ft-img-large").style.background = "url('images/harbor_east.jpg')";
                break;
            case 5:
                document.getElementById("ft-img-large").style.background = "url('images/mt_wash.jpg')";
                break;
        }
    }
}

window.onload = function() {
    addEventListenerByClass('back', 'click', undoZoom);

    for (var i = 0; i < 6; i++) {
        var target = document.getElementById("neighborhood" + i);
        target.addEventListener('click', function() {
            var idSuffix = this.id;
            idSuffix = idSuffix.slice(-1);
            imgZoom(idSuffix);
        });
    }
}