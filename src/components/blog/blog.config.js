(function() {
    "use strict";

    angular
        .module("gbBlog.blog")
        .config(config);

    config.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];

    function config($locationProvider, $stateProvider,$urlRouterProvider  ) {

        $stateProvider
            .state("main.blog", {
                url: "/goodblog",
                views: {
                    "content": {
                        controller: "BlogController",
                        controllerAs: "blog",
                        templateUrl: "src/components/blog/blog.tpl.html"
                    },
                }
            });

        //$urlRouterProvider.otherwise("/");

        //remove hash in urls
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
    }

})();