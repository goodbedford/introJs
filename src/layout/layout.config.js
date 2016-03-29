(function() {
    "use strict";

    angular
        .module("gbBlog.layout")
        .config(config);

    config.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];

    function config($locationProvider, $stateProvider,$urlRouterProvider  ) {

        $stateProvider
            .state("main", {
                url: "",
                abstract:true,
                views: {
                    "main": {
                        templateUrl: "src/layout/layout.tpl.html"
                    },
                    "nav": {
                        controller: "NavController",
                        controllerAs: "nav",
                        templateUrl: "src/layout/nav.tpl.html"
                    },
                    "footer": {
                        controller: "LogoController",
                        controllerAs: "logo",
                        templateUrl: "src/layout/logoFooter.tpl.html"
                    }
                }
            })
            .state("main.home",{
                url: "/home",
                views: {
                    "content" : {
                        templateUrl: "src/layout/home.tpl.html",
                        controller: "HomeController",
                        controllerAs: "home"
                    }
                }
            })
            .state("main.resume", {
                url: "/resume",
                views: {
                    "content": {
                        controller: "ResumeController",
                        controllerAs: "resume",
                        templateUrl: "src/components/resume/resume.tpl.html"
                    },
                }
            })
            .state("main.community", {
                url: "/community",
                views: {
                    "content": {
                        controller: "ResumeController",
                        controllerAs: "community",
                        templateUrl: "src/components/community/community.tpl.html"
                    },
                }
            })
            .state("main.contact", {
                url: "/contact",
                views: {
                    "content": {
                        controller: "ResumeController",
                        controllerAs: "contact",
                        templateUrl: "src/components/contact/contact.tpl.html"
                    },
                }
            })
            .state("main.projects", {
                url: "/projects",
                views: {
                    "content": {
                        controller: "ProjectController",
                        controllerAs: "project",
                        templateUrl: "src/components/projects/projects.tpl.html"
                    },
                }

            });
        //.state("blog", {
        //    url: "/goodblog",
        //    views: {
        //        "nav": {
        //            controller: "NavController",
        //            controllerAs: "nav",
        //            templateUrl: "src/layout/nav.tpl.html"
        //        },
        //        "content": {
        //            controller: "BlogController",
        //            controllerAs: "blog",
        //            templateUrl: "src/components/blog/blog.tpl.html"
        //        },
        //        "footer": {
        //            controller: "LogoController",
        //            controllerAs: "logo",
        //            templateUrl: "src/layout/logoFooter.tpl.html"
        //        }
        //    }
        //
        //});

        $urlRouterProvider.otherwise("main/home");
        //
        //remove hash in urls
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
    }

})();