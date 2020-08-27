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

