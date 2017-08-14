
/**
 *
 * Created by Administrator on 2017/8/13.
 */

function showPic(whichpic) {
    // var source = whichpic.getAttribute("href");
    // var placeholder = document.getElementById("placeholder");
    // placeholder.setAttribute("src", source);
    // var text = whichpic.getAttribute("title");
    // var description = document.getElementById("description");
    // description.innerHTML = text;
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src",source);
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}
// function countBodyChildren() {
//     var body_element = document.getElementsByTagName("body")[0];
//     var s = body_element.childNodes.length;
//     console.log(s);
// }
// countBodyChildren();
function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++){
        links[i].onclick = function () {
            // return !showPic(this);
            return showPic(this) ? false : true;
        }
        // links[i].onkeypress = function () {
        //     return showPic(this) ? false : true;
        // }
    }
}




























