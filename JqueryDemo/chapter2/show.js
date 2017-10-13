/**
 *
 * Created by Administrator on 2017/8/22.
 */

$(function () {

    var $category = $("ul li:gt(5):not(:last)");
    $category.hide();
    var $toggleBtn =  $("div.showmore > a");
    // $toggleBtn.click(function () {
    //     if ($category.is(":visible")){
    //         $category.hide();
    //         $(this).find("span")
    //             .css("background","url(img/down.git) no-repeat 0 0")
    //             .text("显示全部");
    //         $("ul li").removeClass("promoted");
    //     }else {
    //         $category.show();
    //         $(this).find("span")
    //             .css("background","url(img/up.git) no-repeat 0 0")
    //             .text("精简");
    //         $("ul li").filter(":contains('佳能'), :contains('尼康')")
    //             .addClass("promoted");
    //     }
    //     return false;
    // })
    $toggleBtn.toggle(function () {
        $category.show();
        $(this).find("span")
            .css("background","url(img/up.git) no-repeat 0 0")
            .text("精简");
        $("ul li").filter(":contains('佳能'), :contains('尼康')")
            .addClass("promoted");

    },function () {
        $category.hide();

        $(this).find("span")
            .css("background","url(img/down.git) no-repeat 0 0")
            .text("显示全部");
        $("ul li").removeClass("promoted");

    })

});
