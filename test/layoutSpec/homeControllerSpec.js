(function() {
    "use strict";

    describe("HomeController Unit:Test", function() {
        //add app module
        beforeEach(module("gbBlog"));

        //add controller service need to inject controller to test
        var $controller;
        var BioService;
        var LogoService;
        beforeEach(inject(function(_$controller_, BioService, LogoService){
            $controller = _$controller_;
            BioService = BioService;
            LogoService = LogoService;
        }));

        describe("HomeController.scope", function(){
            var $scope;
            var home;

            // instantiate scope and pass it to controller
            beforeEach(function() {
                $scope = {};
                home = $controller("HomeController", {$scope: $scope});

            });

            it("home.test is working", function() {
                expect(home.test).toEqual("beddy");
            });
            it("should verify that LogoService is truthy", function() {
                expect(home.logos).toBeDefined();
            });
            it("should verify that LogoService is an array with items", function() {
                expect(home.logos.length).toBeGreaterThan(-1);
            });
            it("should verify that BioService is transfered to scope", function() {
                expect(home.bio).toBeDefined();
            });
        });
    })
})();