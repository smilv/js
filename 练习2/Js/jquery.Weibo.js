


($(function ()
{
    var firstUL = $("#pl_myMedals_setting").find("ul").eq(0);
    var lastUL = $("#pl_myMedals_setting").find("ul").eq(1);

    function over()
    {
        firstUL.find("a").unbind("click");
        firstUL.find("li").unbind("click");
        firstUL.find("a").click(function (e)
        {
                lastUL.append($(this).parent().parent().parent());
                firstUL.append('<li node-type="showMedal" class="empty"></li>');
                //阻止冒泡  兼容
                if (typeof e.stopPropagation === "function")
                {
                    e.stopPropagation();
                }
                if (typeof e.cancelBubble !== "undefined")
                {
                    e.cancelBubble = true;
                }
                below();
            })
    }

    function below()
    {
        lastUL.find("li").unbind("click");
        lastUL.find("li").click(function ()
        {
                firstUL.find(".empty:eq(0)").replaceWith($(this));
                over(); 
        })
    }
    over();
    below();
})   
)
































