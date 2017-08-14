
/**
 * Created by Neon on 2017/8/14.
 */

function displayCitations() {

    var quotes = document.getElementsByTagName("blockquote");
    for (var i=0; i < quotes.length; i++){
        if (!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        var quoteChildren = quotes[i].getElementsByTagName('*');
        var elem = quoteChildren[quoteChildren.length - 1];
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);
        var supperscript = document.createElement("sup");
        supperscript.appendChild(link);
        elem.appendChild(supperscript);
    }
}
addLoadEvent(displayCitations);






















