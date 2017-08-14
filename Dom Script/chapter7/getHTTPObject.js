/**
 *
 * Created by Neon on 2017/8/14.
 */
function getHTTPObject() {
    if (typeof XMLHttpRequest == "undifined")
        XMLHttpRequest = function () {
            try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
            catch (e) {}
            try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
            catch (e) {}
            try { return new ActiveXObject("Msxml2.XMLHTTP"); }
            catch (e) {}
            return false;
        };
        return new XMLHttpRequest();

}






























