/*
 * @Description: 红包
 * @Autor: bin
 * @Date: 2020-10-26 10:25:54
 * @LastEditors: bin
 * @LastEditTime: 2020-10-29 15:45:21
 */
(function() {
    $("#main").load("./template.html", function() {
        // //展示红包
        $(".mask-pkg").show();
        // $(".red-pkg-notopen").addClass("red-pkg-notopen-show");
        // //倒计时321
        // $(".red-pkg-notopen .count-down")
        //     .delay(3600)
        //     .hide(0);
        // $(".red-pkg-notopen .open")
        //     .delay(3500)
        //     .show(0);
        //开启红包
        // $(".red-pkg-notopen .open").click(function() {
        // $(".red-pkg-notopen").hide();
        $(".red-pkg-open").addClass("red-pkg-open-show");
        // });
    });
})();
