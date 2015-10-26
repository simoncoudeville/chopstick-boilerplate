/**
 * chopstickToggle
 * A basic javascript toggle module with extra options
 *
 * Dependency: jQuery
 *
 * Functionalities:
 * - Hide an element
 * - Toggle a class
 */

var chopstickToggle = (function() {
    'use strict';

    var module = {};

    /*
    *  chopstickToggle.class
    *  Toggle a class on an HTML element.
    *  @param element {String} Element reference (e.g. .js-toggle-class)
    *  @param classname {String} Class that needs to be toggled (e.g. .is-hidden)
    *  @param pd {Number} Indicator if e.preventDefault needs to be enabled.
    *  @param evt {String} Defines on which event the toggle needs to be triggerd.
    */
    module.class = function(element, classname, pd, evt) {
        var $target = $(element);

        if (typeof pd === 'undefined') { pd = true; }
        if (typeof evt === 'undefined') { evt = 'click'; }

        $target.on(evt, function(e) {
            // check if preventDefault needs to be enabled
            if(_enableCheck(pd)) { e.preventDefault(); }
            // toggle the class on the clicked element
            $(this).toggleClass(classname);
        });
    }

    /*
    *  _enableCheck
    *  Used to check if user wants/doesn't want to enable a functionality.
    *  @param value {Number} Value that indicates a want/doens't want.
    */
    var _enableCheck = function(value) {
        if (value === 1) {
            return true;
        }
        return false;
    }

    return module;
})();
