
function imgZoom(contLow) {
    for (var i = 0; i < 6; i++) {
        document.getElementById("neighborhoodLargeOuter").style.opacity = "1";
        document.getElementById("neighborhood" + i).style.opacity = "0";
        document.getElementById("neighborhood" + i).onclick = "null";
        if (document.documentElement.clientWidth >= 1300) {
            document.getElementById("neighborhood" + i).style.height = "310px";
            document.getElementById("neighborhoodLargeOuter").style.width = "calc((100% - 80px) / 2)";
            document.getElementById("neighborhoodLargeOuter").style.height = "700px";
        }
        else if (document.documentElement.clientWidth < 1300 && document.documentElement.clientWidth >= 1100) {
            document.getElementById("neighborhood" + i).style.height = "193.33px";
            document.getElementById("neighborhoodLargeOuter").style.width = "calc((100% - 80px) / 2)";
            document.getElementById("neighborhoodLargeOuter").style.height = "700px";
        }
        else if (document.documentElement.clientWidth < 1100 && document.documentElement.clientWidth >= 700) {
                document.getElementById("neighborhood" + i).style.height = "160px";
                document.getElementById("neighborhoodLargeOuter").style.width = "calc(100% - 40px)";
                document.getElementById("neighborhoodLargeOuter").style.height = "600px";
            }
            else if (document.documentElement.clientWidth < 700) {
                document.getElementById("neighborhood" + i).style.display = "none";
                document.getElementById("neighborhoodLargeOuter").style.width = "calc(100% - 40px)";
                document.getElementById("neighborhoodLargeOuter").style.height = "300px";
                document.getElementById("contText" + i).style.top = "300px";
            }
        if (i === contLow) {
            document.getElementById("hideRight" + i).style.position = "auto";
            document.getElementById("hideRight" + i).style.overflow = "visible";
            document.getElementById("contText" + i).style.right = "0px";
            document.getElementById("contText" + i).style.zIndex = "auto";
                if(document.documentElement.clientWidth <= 1100) {
                    document.getElementById("contText" + i).style.position = "relative";
                }
        switch(i) {
            case 0:
                document.getElementById("neighborhoodLarge").style.background = "url('images/patterson.jpg')";
                document.getElementById("neighborhoodLarge").style.backgroundSize = "cover";
                break;
            case 1:
                document.getElementById("neighborhoodLarge").style.background = "url('images/mt_vernon.jpg')";
                document.getElementById("neighborhoodLarge").style.backgroundSize = "cover";
                break;
            case 2:
                document.getElementById("neighborhoodLarge").style.background = "url('images/remington.jpg')";
                document.getElementById("neighborhoodLarge").style.backgroundSize = "cover";
                break;
            case 3:
                document.getElementById("neighborhoodLarge").style.background = "url('images/fells.jpg')";
                document.getElementById("neighborhoodLarge").style.backgroundSize = "cover";
                break;
            case 4:
                document.getElementById("neighborhoodLarge").style.background = "url('images/harbor_east.jpg')";
                document.getElementById("neighborhoodLarge").style.backgroundSize = "cover";
                break;
            case 5:
                document.getElementById("neighborhoodLarge").style.background = "url('images/mt_wash.jpg')";
                document.getElementById("neighborhoodLarge").style.backgroundSize = "cover";
                break;
        }
        }
        window.scrollTo(0,0);
        }        
}

function undoZoom(contLow) {
    
    for (var i = 0; i < 6; i++) {
        document.getElementById("hideRight" + i).style.position = "relative";
        document.getElementById("hideRight" + i).style.overflow = "hidden";
        document.getElementById("neighborhoodLargeOuter").style.opacity = "0";
        document.getElementById("neighborhood" + i).style.opacity = "1";
        document.getElementById("neighborhood" + i).style.height = "500px";
        document.getElementById("neighborhood" + i).style.display = "table";
        document.getElementById("neighborhoodLargeOuter").style.width = "33.33%";
        document.getElementById("neighborhoodLargeOuter").style.height = "500px";
        document.getElementById("contText" + i).style.right = "-50%";
        document.getElementById("contText" + i).style.zIndex = "-1";
        document.getElementById("contText" + i).style.position = "absolute";
        document.getElementById("contText" + i).style.overflow = "hidden";
        document.getElementById("neighborhood" + i).setAttribute('onclick','imgZoom(' + i + ')');
        switch(i) {
            case 0:
                document.getElementById("neighborhoodLarge").style.background = "url('images/patterson.jpg')";
                break;
            case 1:
                document.getElementById("neighborhoodLarge").style.background = "url('images/mt_vernon.jpg')";
                break;
            case 2:
                document.getElementById("neighborhoodLarge").style.background = "url('images/remington.jpg')";
                break;
            case 3:
                document.getElementById("neighborhoodLarge").style.background = "url('images/fells.jpg')";
                break;
            case 4:
                document.getElementById("neighborhoodLarge").style.background = "url('images/harbor_east.jpg')";
                break;
            case 5:
                document.getElementById("neighborhoodLarge").style.background = "url('images/mt_wash.jpg')";
                break;
        }
        }
}