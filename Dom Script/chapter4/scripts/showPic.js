
/**
 *
 * Created by Administrator on 2017/8/13.
 */

function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.innerHTML = text;
}
// function countBodyChildren() {
//     var body_element = document.getElementsByTagName("body")[0];
//     var s = body_element.childNodes.length;
//     console.log(s);
// }
// countBodyChildren();



























