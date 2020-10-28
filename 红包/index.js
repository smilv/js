/*
 * @Description: 红包
 * @Autor: bin
 * @Date: 2020-10-26 10:25:54
 * @LastEditors: bin
 * @LastEditTime: 2020-10-28 16:16:33
 */
(function() {
    $("#main").load("./template.html", function() {
        $(".mask-pkg").show();
        $(".red-pkg-notopen").addClass("red-pkg-notopen-show");
    });
})();
