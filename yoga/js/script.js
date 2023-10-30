window.addEventListener('DOMContentLoaded', function() {
    
    "use strict";
    let calc = require('./parts/calc.js'),
        form = require('./parts/form.js'),
        modal = require('./parts/modal.js'),
        slider = require('./parts/slider.js'),
        timer = require('./parts/timer.js'),
        tabs = require('./parts/tabs.js');

    calc();
    form();
    modal();
    slider();
    timer();
    tabs();
});