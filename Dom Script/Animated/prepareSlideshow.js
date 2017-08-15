/**
 * 
 * Created by Neon on 2017/8/15.
 */
function prepareSlideshow() {
    // Make sure the browser understands the DOM methods
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
// Make sure the elements exist
    if (!document.getElementById("linklist")) return false;
    if (!document.getElementById("preview")) return false;
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";
    var list = document.getElementById("linklist");
    var links = document.getElementsByTagName("a");
    // for (var i = 0; i < links.length; i++){
    //     links[i].mouseover = function () {
    //         moveElement("preview", -100, 0, 10);
    //     }
    // }
    links[0].onmouseover = function() {
        moveElement("preview",-100,0,10);
    };
    links[1].onmouseover = function() {
        moveElement("preview",-200,0,10);
    };
    links[2].onmouseover = function() {
        moveElement("preview",-300,0,10);
    };
}
addLoadEvent(prepareSlideshow);



















