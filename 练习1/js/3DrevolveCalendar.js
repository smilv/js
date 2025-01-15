(function () {
  var Calendar = function () {
    //创建一个Calendar对象
    var now = new Date(); //创建一个日期对象
    this.year = this.nowYear = now.getFullYear();
    this.month = this.nowMonth = now.getMonth() + 1;
    this.date = this.nowDate = now.getDate();
    this.day = now.getDay();
  };

  var p = Calendar.prototype;

  //3D旋转 to反面
  p.revolveReverse = function () {
    var fe = document.querySelector(".front");
    var re = document.querySelector(".reverseSide");
    doKeyframes(fe, "flipOutY", "0.8s", function () {
      fe.style.display = "none";
      re.style.display = "block";
      doKeyframes(re, "flipOutY2", "0.8s", function () {
        re.style["-webkit-transform"] = "";
      });
    });
    function doKeyframes(element, flipName, flipTime, callback) {
      if (!element) {
        return;
      }
      element.style.webkitAnimation = "" + flipName + " " + flipTime;
      var fn = function () {
        element.style.webkitAnimation = "";
        element.removeEventListener("webkitAnimationEnd", fn);
        if (callback) {
          callback();
        }
      };
      return element.addEventListener("webkitAnimationEnd", fn);
    }
  };

  //3D旋转 to正面
  p.calendarObverse = function () {
    var fe = document.querySelector(".front");
    var re = document.querySelector(".reverseSide");
    doKeyframes(re, "flipOutY", "0.8s", function () {
      re.style.display = "none";
      fe.style.display = "block";
      doKeyframes(fe, "flipOutY2", "0.8s", function () {
        fe.style["-webkit-transform"] = "";
      });
    });
    function doKeyframes(element, flipName, flipTime, callback) {
      if (!element) {
        return;
      }
      element.style.webkitAnimation = "" + flipName + " " + flipTime;
      var fn = function () {
        element.style.webkitAnimation = "";
        element.removeEventListener("webkitAnimationEnd", fn);
        if (callback) {
          callback();
        }
      };
      return element.addEventListener("webkitAnimationEnd", fn);
    }
  };

  //设置正面的时间
  p.front_date = function () {
    var front_date_yearAndMonth = document.querySelector(".front_date_yearAndMonth").getElementsByTagName("span");
    front_date_yearAndMonth[0].innerHTML = this.year;
    front_date_yearAndMonth[1].innerHTML = this.month;
    var front_date_date = document.querySelector(".front_date_date");
    front_date_date.innerHTML = this.date;
    var front_date_day = document.querySelector(".front_date_day").getElementsByTagName("span");
    switch (this.day) {
      case 6:
        this.day = "六";
        break;
      case 5:
        this.day = "五";
        break;
      case 4:
        this.day = "四";
        break;
      case 3:
        this.day = "三";
        break;
      case 2:
        this.day = "二";
        break;
      case 1:
        this.day = "一";
        break;
      default:
        this.day = "日";
        break;
    }
    front_date_day[0].innerHTML = this.day;
  };

  //获取某个月的天数
  p.getMonthDays = function (year, month) {
    if (month == 2) {
      if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        return 29;
      } else {
        return 28;
      }
    } else {
      switch (month) {
        case 1:
          return 31;
          break;
        case 3:
          return 31;
          break;
        case 5:
          return 31;
          break;
        case 7:
          return 31;
          break;
        case 8:
          return 31;
          break;
        case 10:
          return 31;
          break;
        case 12:
          return 31;
          break;
        case 4:
          return 30;
          break;
        case 6:
          return 30;
          break;
        case 9:
          return 30;
          break;
        default:
          return 30;
          break;
      }
    }
  };

  //初始化
  p.init = function () {
    var days = p.getMonthDays(this.year, this.month);
    month = this.month - 1;
    year = this.year;
    var curDay = new Date(year, month, 1);
    var weeks = curDay.getDay();
    if (weeks == 0) {
      day_ = days;
    } else if (weeks == 1) {
      day_ = days + 1;
    } else if (weeks == 2) {
      day_ = days + 2;
    } else if (weeks == 3) {
      day_ = days + 3;
    } else if (weeks == 4) {
      day_ = days + 4;
    } else if (weeks == 5) {
      day_ = days + 5;
    } else if (weeks == 6) {
      day_ = days + 6;
    }
    var trs = Math.ceil(day_ / 7);

    //拼接TR
    var n = 1;
    for (var i = 0; i < trs; i++) {
      var td = '<p  style="height:0;font-size:0;clear:both"></p>';
      for (var j = 0; j < 7; j++) {
        if (i === 0 && j < weeks) {
          td += '<div class="calendar_no_date"><span></span></div>';
        } else {
          if (n <= days) {
            td += '<div class="calendar_dates"><span>' + n++ + "</span></div>";
          }
        }
      }
      td += '<p  style="height:0;font-size:0;clear:both"></p>';
      $(".calendar_date")[0].innerHTML += td;
    }
    $(".calendar_yearAndMonth").find("span").eq(1).html(this.month);
    $(".calendar_yearAndMonth").find("span").eq(0).html(this.year);
    if ([this.year, this.month, this.date].join() === [this.nowYear, this.nowMonth, this.nowDate].join()) {
      this.curDate();
    }
  };

  //当前日期
  p.curDate = function () {
    var curDiv = $(".calendar_dates")[this.date - 1];
    curDiv.style.border = "1px solid #fcefa1";
    curDiv.style.background = "#fcfaf1";
  };

  window.Calendar = Calendar;
})(window);

var date = new Calendar();
date.front_date();
date.init();

var month = date.month,
  index = 1;
$(".button_left").click(function () {
  date.month--;
  month--;
  if (date.month == 0) {
    date.month = 12;
    date.year--;
  }
  $(".calendar_date")[0].innerHTML = "";
  date.init();
});
$(".button_right").click(function () {
  date.month++;
  month++;
  if (date.month == 13) {
    date.month = 1;
    date.year++;
  }
  $(".calendar_date")[0].innerHTML = "";
  date.init();
});
