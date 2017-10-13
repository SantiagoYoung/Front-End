/**
 * Created by Administrator on 2017/8/18.
 */
$(function () {

    $("#nav li").hover(
        function () {
        $(this).find(".jnNav").show();
        },
        function(){
        $(this).find(".jnNav").hide();
        });
});
$(function () {
    $(".jnCatainfo .promoted").append('<s class="hot"></s>')
});