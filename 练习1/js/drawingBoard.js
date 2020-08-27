$(function () {
    var myCanvas = $("canvas")[0],
    ctx = myCanvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#046104";
    var cursorDataArr = [],
        cursorDataStr = "",
        record = false;

    //画
    draw();
    function draw() {
        $("canvas")[0].style.cursor = "";
        $("canvas").unbind("mousedown");
        $("canvas").mousedown(function (e) {
            var noCurlocality = getRelativePos(e);
            ctx.beginPath();
            ctx.moveTo(noCurlocality.x, noCurlocality.y);
            cursorDataStr = "";
            $(this).mousemove(function (e) {
                var currentCurlocality = getRelativePos(e);
                ctx.lineTo(currentCurlocality.x, currentCurlocality.y);
                cursorDataStr += currentCurlocality.x + ',' + currentCurlocality.y + ',' + ctx.strokeStyle + ',' + ctx.lineWidth + '|';
                ctx.stroke();
            })
        }).mouseup(function () {
            $(this).unbind("mousemove");
            cursorDataArr.push(cursorDataStr.substring(0, cursorDataStr.length - 1));
        }).mouseout(function () {
            $(this).unbind("mousemove");
        })
    }


    //点击铅笔
    $(".pencil").click(function () {
        draw();
    })


    //改变画笔颜色
    $(".color").find("div").each(function () {
        $(this).click(function () {
            ctx.strokeStyle = $(this).css("background-color");
            $("#colorSelector2 div").css("background-color", $(this).css("background-color"));
        })
    })


    //颜色调制 colorpicker
    var widt = false;
    $("#colorpickerHolder2").ColorPicker({
        flat: true,
        color: "#00ff00",
        onSubmit: function (hsb, hex, rgb) {
            widt = !widt;
            $("#colorpickerHolder2").stop().animate({ height: 0 });
            $("#colorSelector2 div").css("backgroundColor", "#" + hex);
            ctx.strokeStyle = "#" + hex;
        }
    });
    $("#colorpickerHolder2>div").css("position", "absolute");
    $("#colorSelector2").bind("click", function () {
        $("#colorpickerHolder2").stop().animate({ height: widt ? 0 : 173 }, 500);
        widt = !widt;
    });


    //改变画笔粗细
    $(".wideOrThin").find("div").each(function () {
        $(this).click(function () {
            ctx.lineWidth = $(this).attr("value");
        })
    })


    //橡皮擦
    $(".eraser").click(function () {
        $("canvas").unbind('mousedown');
        $("canvas")[0].style.cursor = "url('images/cur.ico'),auto";
        $("canvas").mousedown(function (e) {
            $("canvas").mousemove(function (e) {
                var currentCursor = getRelativePos(e);
                ctx.clearRect(currentCursor.x, currentCursor.y, 15, 15);
            })
        })
    })


    //撤销
    $(".cancel").click(function () {
        if (cursorDataArr.length > 0) {
            ctx.clearRect(0, 0, 690, 320);
            cursorDataArr.length--;
            for (var i = 0; i < cursorDataArr.length; i++) {
                cursorDataArr_str = cursorDataArr[i].split("|");
                ctx.beginPath();
                ctx.moveTo(cursorDataArr_str[0].split(",")[0], cursorDataArr_str[0].split(",")[1]);
                for (var j = 1; j < cursorDataArr_str.length; j++) {
                    ctx.lineTo(cursorDataArr_str[j].split(",")[0], cursorDataArr_str[j].split(",")[1]);
                    ctx.strokeStyle = cursorDataArr_str[j].split(",")[2];
                    ctx.lineWidth = cursorDataArr_str[j].split(",")[3];
                    ctx.stroke();
                }
            }
        } else {
            return false;
        }
    })


    //清空画布
    $(".clear").click(function () {
        var warn_frame = confirm("确认要清空画布吗？亲~");
        if (warn_frame) {
            ctx.clearRect(0, 0, 690, 350);
            cursorDataArr = [];
        } else {
            return false;
        }
    })


    //获取鼠标位置
    function getRelativePos(e) {
        var r = myCanvas.getBoundingClientRect();
        return {
            x: e.clientX - r.left,
            y: e.clientY - r.top
        };
    }


})