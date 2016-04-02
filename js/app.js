(function() {
    "use strict";


    active();
    function active() {
        addBorderStyle();
        addMenuHandler();
        addQuizHandeler();
    }

    function addBorderStyle() {
        var $infoPanels = $(".info-panel");

        console.log($infoPanels);

        $infoPanels.each(handlePanels);

        function handlePanels (index) {

            var $panel = $(this);
            if (index % 2 === 0){
                //even
                $panel.addClass("info-panel-border-even");
                $panel.find("h3").addClass("info-panel-header-even");
            } else {
                $panel.addClass("info-panel-border-odd");
                $panel.find("h3").addClass("info-panel-header-odd");

            }
            return this;
        }
    }

    function addMenuHandler() {
        var $btnMenu = $("#menu-btn");

        $btnMenu.on("click", handleMenu)

        function handleMenu(event) {
            event.preventDefault();
            var $menuWrapper = $("#menu-wrapper");
            var $mainWrapper = $("#main-wrapper");
            $menuWrapper.toggle();
            $mainWrapper.toggleClass("col-xs-offset-4");
        }
    }

    function addQuizHandeler() {
        var $btnAnswer = $(".btn-answer");

        $btnAnswer.on("click", handleAnswer);

        function handleAnswer() {
            var $parent = $(this).parent();
            var $answerPanel = $parent.find(".answer-panel-body").first();
            $answerPanel.toggleClass("hidden");

        }
    }
})();