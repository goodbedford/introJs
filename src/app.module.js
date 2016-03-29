(function() {
    "use strict";

    angular
        .module("gbBlog", [

            // angular dependencies
            "ngSanitize",

            //custom dependencies
            "gbBlog.layout",
            "gbBlog.blog",

            //third party
            "ui.router"


        ]);

})();