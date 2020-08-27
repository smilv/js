(function ($) {
    $.fn.extend({
        snow : function (options) {

            var $flake = $('<div id="flake" />').css({ 'position': 'absolute', 'top': '-50px' }).html('&#10052;'),
                documentHeight = $(document).height(),
                documentWidth = $(document).width(),
               
                defaults = {         //Ä¬ÈÏÊý¾Ý
                    minSize: 10,
                    maxSize: 20,
                    newOn: 500,
                    flakeColor: "#FFFFFF"
                },

                options = $.extend(defaults, options);


            var interval = setInterval(function () {
                var startPositionLeft = Math.random() * documentWidth -50,
                    startOpacity = 0.5 + Math.random(),
                    sizeFlake = options.minSize + Math.random() * options.maxSize,
                    endPositionTop = documentHeight - 70,
                    endPositionLeft = startPositionLeft - 400 + Math.random() * 200,
                    durationFall = documentHeight *5 + Math.random() * 5000;
                $flake
                    .clone()
                    .appendTo('body')
                    .css(
                        {
                            left: startPositionLeft,
                            opacity: startOpacity,
                            'font-size': sizeFlake,
                            color: options.flakeColor
                        }
                    )
                    .animate(
                        {
                            top: endPositionTop,
                            left: endPositionLeft,
                            opacity: 0.2
                        },
                        durationFall,
                        'linear',
                        function () {
                            $(this).remove()
                        }
                    );
            }, options.newOn);

        }
    })

})(jQuery);