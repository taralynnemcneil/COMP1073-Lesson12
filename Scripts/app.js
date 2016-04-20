/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    // Load the navbar dynamically via jQuery and Ajax
    var header = $('#mainHeader').load("partials/nav.html", function() {
        var bodyid = $('body').attr('id');
        switch (bodyid.toString()) {
            case "index":
                $('#indexLink').attr("class", "active");
                break;
            case "projects":
                $('#projectsLink').attr("class", "active");
                break;
            case "contact":
                $('#contactLink').attr("class", "active");
                break;
        }
    });

    // ============== CreateJS Section ============== //

    var canvas;
    var stage;

    function init() {
        // reference to canvas element
        canvas = document.getElementById("canvas");

        // creat a stage container object
        stage = new createjs.Stage(canvas);

        // sets frame rate to 60 frames per second
        createjs.Ticker.setFPS(60);
       
        // listen for frame changes and call animationLoop function
        createjs.Ticker.addEventListener("tick", animationLoop);
    }
    
    // runs every frame
    function animationLoop() {
        // refresh the stage
        stage.update();
    }

    window.load = init;

})();

