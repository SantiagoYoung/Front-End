
$(function () {

   $("ul.rating li a").click(function () {

       var title = $(this).attr("title");
       alert("你给的评分是：" + title);
       var cl = $(this).parent().attr("class");
       $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
       $(this).blur();
       return false;

   })



});