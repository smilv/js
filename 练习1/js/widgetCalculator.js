var css = '<style>'
+ 'body {'
+ 'margin: 0;'
+ 'padding: 0;'
+ 'font-weight:bold;'
+'}'

+'.box {'
+'   width: 198px;'
+'   height: 247px;'
+'   background: url(images/calculator_background.bmp) repeat-x;'
+'   padding: 5px 0 0 7px;'
+'   border: solid #ff6a00 2px;'
+'   position:absolute;'
+'   left:43%;'
+'   top:20%;' 
+'}'

+'.value {'
+'  width: 190px;'
+' height: 50px;'
+'background: url(images/calculator.bmp) no-repeat -7px -5px;'
+'}'

+'#import_value {'
+'    width: 186px;'
+'    height: 16px;'
+'    font-size: 16px;'
+'    color: #000;'
+'    padding-top: 4px;'
+'    padding-right: 4px;'
+'    text-align: right;'
+'    overflow:hidden;'
+'}'

+'#export_value {'
+'    width: 186px;'
+'    height: 22px;'
+'    font-size: 22px;'
+'    color: #000;'
+'    padding-top: 4px;'
+'    padding-right: 4px;'
+'    text-align: right;'
+'    overflow:hidden;'
+'}'

+'.MC {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -7px -60px;'
+'    margin-top: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.MC:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -7px -60px;'
+'}'

+'.MC:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -7px -60px;'
+'}'

+'.MR {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -46px -60px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.MR:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -46px -60px;'
+'}'

+'.MR:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -46px -60px;'
+'}'

+'.MS {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -85px -60px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.MS:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -85px -60px;'
+'}'

+'.MS:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -85px -60px;'
+'}'

+'.Madd {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -124px -60px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.Madd:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -124px -60px;'
+'}'

+'.Madd:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -124px -60px;'
+'}'

+'.Msubtract {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -163px -60px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.Msubtract:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -163px -60px;'
+'}'

+'.Msubtract:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -163px -60px;'
+'}'

+'.clearThis {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -7px -92px;'
+'    margin-top: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.clearThis:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -7px -92px;'
+'}'

+'.clearThis:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -7px -92px;'
+'}'

+'.CE {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -46px -92px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.CE:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -46px -92px;'
+'}'

+'.CE:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -46px -92px;'
+'}'

+'.C {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -85px -92px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.C:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -85px -92px;'
+'}'

+'.C:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -85px -92px;'
+'}'

+'.positive_negative_Nunber {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -124px -92px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.positive_negative_Nunber:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -124px -92px;'
+'}'

+'.positive_negative_Nunber:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -124px -92px;'
+'}'

+'.radical {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -163px -92px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.radical:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -163px -92px;'
+'}'

+'.radical:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -163px -92px;'
+'}'

+'.seven {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -7px -124px;'
+'    margin-top: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.seven:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -7px -124px;'
+'}'

+'.seven:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -7px -124px;'
+'}'

+'.eight {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -46px -124px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.eight:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -46px -124px;'
+'}'

+'.eight:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -46px -124px;'
+'}'

+'.nine {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -85px -124px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.nine:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -85px -124px;'
+'}'

+'.nine:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -85px -124px;'
+'}'

+'.division {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -124px -124px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.division:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -124px -124px;'
+'}'

+'.division:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -124px -124px;'
+'}'

+'.percentage {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -163px -124px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.percentage:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -163px -124px;'
+'}'

+'.percentage:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -163px -124px;'
+'}'

+'.four {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -7px -156px;'
+'    margin-top: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.four:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -7px -156px;'
+'}'

+'.four:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -7px -156px;'
+'}'

+'.five {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -46px -156px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.five:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -46px -156px;'
+'}'

+'.five:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -46px -156px;'
+'}'

+'.six {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -85px -156px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.six:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -85px -156px;'
+'}'

+'.six:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -85px -156px;'
+'}'

+'.multiplication {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -124px -156px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.multiplication:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -124px -156px;'
+'}'

+'.multiplication:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -124px -156px;'
+'}'

+'.divisionX {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -163px -156px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.divisionX:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -163px -156px;'
+'}'

+'.divisionX:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -163px -156px;'
+'}'

+'.one {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -7px -188px;'
+'    margin-top: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.one:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -7px -188px;'
+'}'

+'.one:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -7px -188px;'
+'}'

+'.two {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -46px -188px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.two:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -46px -188px;'
+'}'

+'.two:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -46px -188px;'
+'}'

+'.three {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -85px -188px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.three:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -85px -188px;'
+'}'

+'.three:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -85px -188px;'
+'}'

+'.subduction {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -124px -188px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.subduction:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -124px -188px;'
+'}'

+'.subduction:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -124px -188px;'
+'}'

+'.equal {'
+'    width: 34px;'
+'    height: 59px;'
+'    background: url(images/calculator.bmp) no-repeat -163px -188px;'
+'    margin-top: 5px;'
+'    margin-left: 5px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.equal:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -163px -188px;'
+'}'

+'.equal:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -163px -188px;'
+'}'

+'.zero {'
+'    width: 73px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -7px -220px;'
+'    margin-top: -27px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.zero:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -7px -220px;'
+'}'

+'.zero:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -7px -220px;'
+'}'

+'.radix_point {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -85px -220px;'
+'    margin-top: -27px;'
+'    margin-left: 78px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.radix_point:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -85px -220px;'
+'}'

+'.radix_point:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -85px -220px;'
+'}'

+'.add {'
+'    width: 34px;'
+'    height: 27px;'
+'    background: url(images/calculator.bmp) no-repeat -124px -220px;'
+'    margin-top: -27px;'
+'    margin-left: 117px;'
+'    cursor: pointer;'
+'    float: left;'
+'}'

+'.add:hover {'
+'    background: url(images/calculator_hover.jpg) no-repeat -124px -220px;'
+'}'

+'.add:active {'
+'    background: url(images/calculator_click.jpg) no-repeat -124px -220px;'
+'}'
+ '</style>'

var html='<div class="box">'
+'        <div class="value">'
+'            <div id="import_value"></div>'
+'            <div id="export_value"></div>'
+'        </div>'
+'        <div id="button">'
+'            <div class="MC"></div>'
+'            <div class="MR"></div>'
+'            <div class="MS"></div>'
+'            <div class="Madd"></div>'
+'            <div class="Msubtract"></div>'
+'            <p style="clear:both;height:0;font-size:0;"></p>'
+'            <div class="clearThis" value="clearThis"></div>'
+'            <div class="CE" value="CE"></div>'
+'            <div class="C"></div>'
+'            <div class="positive_negative_Nunber"></div>'
+'            <div class="radical" value="√"></div>'
+'            <p style="clear:both;height:0;font-size:0;"></p>'
+'            <div class="seven" value="7"></div>'
+'            <div class="eight" value="8"></div>'
+'            <div class="nine" value="9"></div>'
+'            <div class="division" value="/"></div>'
+'            <div class="percentage" value="%"></div>'
+'            <p style="clear:both;height:0;font-size:0;"></p>'
+'            <div class="four" value="4"></div>'
+'            <div class="five" value="5"></div>'
+'            <div class="six" value="6"></div>'
+'            <div class="multiplication" value="*"></div>'
+'            <div class="divisionX" value="1/x"></div>'
+'            <p style="clear:both;height:0;font-size:0;"></p>'
+'            <div class="one" value="1"></div>'
+'            <div class="two" value="2"></div>'
+'            <div class="three" value="3"></div>'
+'            <div class="subduction" value="-"></div>'
+'            <div class="equal"></div>'
+'            <p style="clear:both;height:0;font-size:0;"></p>'
+'            <div class="zero" value="0"></div>'
+'            <div class="radix_point" value="."></div>'
+'            <div class="add" value="+"></div>'
+'            <p style="clear:both;height:0;font-size:0;"></p>'
+'        </div>'
+ '    </div>'

document.write(html + css);

; (function () {
    var Calculator = function ()    //创建一个计算器对象
    {
        this.firstNum = 0;
        this.secondNum = 0;
        this.result = 0;
        this.operator = null;
    }
    var p = Calculator.prototype;

    p.changeOperator = function (operator)      //改变运算符
    {
        if (this.operator && this.beforeClick != 'stamp') {
            this.judgeOperator();
            $("#export_value").html(this.result);
        }
        this.secondNum = 0;
        this.operator = operator;
        $("#import_value").html(this.operator);
    }

    p.setNum = function (num)             //设置点击的是firstNum 和 secondNum
    {
        if (this.operator) {
            this.secondNum += num.toString();
            $("#import_value").html(Number(this.secondNum));
        }
        else {
            this.firstNum += num.toString();
            $("#import_value").html(Number(this.firstNum));
        }
    }

    p.judgeOperator = function ()             //判断运算符  输出值
    {
        if (this.operator === "+") { this._add() };
        if (this.operator === "-") { this._subtract() };
        if (this.operator === "*") { this._multiply() };
        if (this.operator === "/") { this._divide() };
        if (this.operator === "√") { this._radical() };
        if (this.operator === "%") { this._percentage() };
        if (this.operator === "1/x") { this._divisionX() };
        this.firstNum = this.result;
        $("#export_value").html(this.result);
        this.beforeClick = 'stamp';
    }

    p.clear = function ()           //清空
    {
        this.firstNum = 0;
        this.secondNum = 0;
        this.result = 0;
        this.operator = null;
        $("#export_value").html('');
        $("#import_value").html('');
    }

    p.clearThis = function ()      //撤销前一步
    {
        var import_value = $("#import_value").html();
        $("#import_value").html(import_value.slice(0, $("#import_value").html().length - 1));
        if (this.operator) {
            this.secondNum = $("#import_value").html();
        } else {
            this.firstNum = $("#import_value").html();
        }
    }

    //add, subtract, multiply and divide 加减乘除等运算
    p._add = function ()      //加
    {
        this.result = Number(this.firstNum) + Number(this.secondNum);     //转换成数字 防止字符串相加
    }
    p._subtract = function ()      //减
    {
        this.result = this.firstNum - this.secondNum;
    }
    p._multiply = function ()      //乘
    {
        this.result = this.firstNum * this.secondNum;
    }
    p._divide = function ()      //除
    {
        this.result = this.firstNum / this.secondNum;
    }
    p._radical = function ()     //根号
    {
        this.result = Math.sqrt(this.firstNum);
    }
    p._percentage = function ()     //百分号
    {
        this.result = this.firstNum % this.secondNum;
    }
    p._divisionX = function ()      //1/x
    {
        this.result = 1 / this.firstNum;
    }

    window.Calculator = Calculator;      //暴露闭包
}(window))

var cc = new Calculator();


function showResult()       //传参数
{
    $(".one").click(function () {
        cc.setNum($(this).attr("value"));
    })
    $(".two").click(function () {
        cc.setNum($(this).attr("value"));
    })
    $(".three").click(function () {
        cc.setNum($(this).attr("value"));
    })
    $(".four").click(function () {
        cc.setNum($(this).attr("value"));
    })
    $(".five").click(function () {
        cc.setNum($(this).attr("value"));
    })
    $(".six").click(function () {
        cc.setNum($(this).attr("value"));
    })
    $(".seven").click(function () {
        cc.setNum($(this).attr("value"));
    })
    $(".eight").click(function () {
        cc.setNum($(this).attr("value"));
    })
    $(".nine").click(function () {
        cc.setNum($(this).attr("value"));
    })
    $(".zero").click(function () {
        cc.setNum($(this).attr("value"));
    })
    $(".division").click(function () {
        cc.changeOperator($(this).attr("value"));
    })
    $(".percentage").click(function () {
        cc.changeOperator($(this).attr("value"));
    })
    $(".multiplication").click(function () {
        cc.changeOperator($(this).attr("value"));
    })
    $(".subduction").click(function () {
        cc.changeOperator($(this).attr("value"));
    })
    $(".add").click(function () {
        cc.changeOperator($(this).attr("value"));
    })
    $(".equal").click(function () {        //点击等于号
        cc.judgeOperator();
    })
    $(".C").click(function () {       //清空
        cc.clear();
    })
    $(".CE").click(function () {       //清空
        cc.clear();
    })
    $(".radical").click(function () {      //根号
        cc.changeOperator($(this).attr("value"));
    })
    $("._percentage").click(function () {        //求余
        cc.changeOperator($(this).attr("value"));
    })
    $(".divisionX").click(function () {         //求 1/x
        cc.changeOperator($(this).attr("value"));
    })
    $(".radix_point").click(function () {     //点击小数点
        cc.setNum($(this).attr("value"));
    })
    $(".clearThis").click(function () {         //点击撤销一步
        cc.clearThis();
    })


}

$(function () {
    showResult();
})

