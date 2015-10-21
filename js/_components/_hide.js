var chopstickJS = (function() {
    "use strict";

    var module = {};

    module.hide = function(object, evt) {
        if(checkArguments(arguments, 2)) {

            var $target = $(object);

            $target.on(evt, function(e){
                e.preventDefault();
                $(this).closest(object).addClass('is-hidden');
            });

        }
    };

    var checkArguments = function(args, amountNeeded) {
        if (args.length == amountNeeded) {
            return true;
        }

        console.error("Specify the correct amount of arguments");
        return false;
    }

    return module;
})();
