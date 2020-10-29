/*
 * @Description: 红包
 * @Autor: bin
 * @Date: 2020-10-26 10:25:54
 * @LastEditors: bin
 * @LastEditTime: 2020-10-29 18:34:49
 */
(function() {
    $("#main").load("./template.html", function() {
        // //展示红包
        $(".mask-pkg").show();
        $(".red-pkg-notopen").addClass("red-pkg-notopen-show");
        $(".red-pkg-close")
            .delay(400)
            .animate({ opacity: 1 }, 600);
        // //倒计时321
        // $(".red-pkg-notopen .count-down")
        //     .delay(3600)
        //     .hide(0);
        // $(".red-pkg-notopen .open")
        //     .delay(3500)
        //     .show(0);
        //开启红包
        // $(".red-pkg-notopen .open").click(function() {
        $(".red-pkg-notopen").hide();
        $(".red-pkg-open").addClass("red-pkg-open-show");
        $(".red-pkg-close").animate({ marginLeft: "160px" }, 300);
        // });
        //打开快捷回复列表
        $(".red-pkg-open .operation .reply").click(function() {
            $(".red-pkg-open .bg").animate({ top: "-100px" }, 200);
            $(".red-pkg-close").animate({ marginTop: "-320" }, 200);
            $(".red-pkg-open .reply-list").addClass("reply-list-show");
        });
    });
})();
