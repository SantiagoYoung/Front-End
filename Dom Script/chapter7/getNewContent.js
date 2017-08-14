/**
 * Created by Neon on 2017/8/14.
 */
function getNewContent(){
    var request = getHTTPObject();
    if (request){
        request.open("GET", "response.txt", true);
        request.onreadystatechange = function () {
            if (request.readyState == 4){
                console.log("response Ok.");
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else {
        console.log("Sorry, your browser does not support XMLHTTPRequest.");
    }
    console.log("gogogogo Done.")
}
addLoadEvent(getNewContent);