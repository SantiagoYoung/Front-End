/**
 *
 * Created by Administrator on 2017/8/18.
 */
$(function () {

    var $imgrols = $("#jnImageroll div a");
    $imgrols.css("opacity","0.7");
    var len = $imgrols.length;
    var index = 0;
    var adTimer = null;
    $imgrols.mouseover(function () {
        index = $imgrols.index(this);
        showImg(index);
    }).eq(0).mouseover();
    $("#jnImageroll").hover(
        function () {
        if (adTimer)
            clearTimeout(adTimer);
            },
        function () {
            adTimer = setInterval(function () {
                showImg(index);
                index++;
                if (index==len){index=0;}
            }, 5000);
        }).trigger("mouseleave");

});

function showImg(index) {
    var $rollobj = $("#jnImageroll");
    var $rolllist = $rollobj.find("div a");
    var newhref = $rolllist.eq(index).attr("href");
    $("#JS_imgWrap").attr("href", newhref)
        .find("img").eq(index).stop(true,true).fadeIn()
        .siblings().fadeOut();
    $rolllist.removeClass("chos").css("opacity", "0.7")
        .eq(index).addClass("chos").css("opacity", "1");

}