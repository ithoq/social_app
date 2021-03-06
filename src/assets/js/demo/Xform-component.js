
// Form-Component.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -


$(document).ready(function() {


    // CHOSEN
    // =================================================================
    // Require Chosen
    // http://harvesthq.github.io/chosen/
    // =================================================================
    $('#demo-chosen-select').chosen();
    $('#demo-cs-multiselect').chosen({width:'100%'});



    // DEFAULT RANGE SLIDER
    // =================================================================
    // Require noUiSlider
    // http://refreshless.com/nouislider/
    // =================================================================
    var rs_def = document.getElementById('demo-range-def');
    var rs_def_value = document.getElementById('demo-range-def-val');

    noUiSlider.create(rs_def,{
        start   : [ 0 ],
        connect : 'lower',
        range   : {
            'min': [  0 ],
            'max': [ 100 ]
        }
    });

    rs_def.noUiSlider.on('update', function( values, handle ) {
        rs_def_value.innerHTML = values[handle];
    });




    // RANGE SLIDER - SLIDER STEP BY STEP
    // =================================================================
    // Require noUiSlider
    // http://refreshless.com/nouislider/
    // =================================================================

    var rs_step = document.getElementById('demo-range-step');
    var rs_step_value = document.getElementById('demo-range-step-val');

    noUiSlider.create(rs_step,{
        start   : [ 0 ],
        connect : 'lower',
        step    : 1,
        range   : {
            'min': [  0 ],
            'max': [ 100 ]
},
	format: wNumb({
		decimals: 0,
		thousand: '.',
	
	})
});
    rs_step.noUiSlider.on('update', function( values, handle ) {
        rs_step_value.innerHTML = values[handle];
    });
	
	
	


    // VERTICAL RANGE SLIDER
    // =================================================================
    // Require noUiSlider
    // http://refreshless.com/nouislider/
    // =================================================================
    var rs_range_ver1 = document.getElementById('demo-range-ver1');
    var rs_range_ver2 = document.getElementById('demo-range-ver2');
    var rs_range_ver3 = document.getElementById('demo-range-ver3');
    var rs_range_ver4 = document.getElementById('demo-range-ver4');
    var rs_range_ver5 = document.getElementById('demo-range-ver5');


    noUiSlider.create(rs_range_ver1,{
        start: [ 80 ],
        connect: 'lower',
        range: {
            'min':  [20],
            'max':  [100]
        },
        orientation: 'vertical',
        direction: 'rtl'
    });


    noUiSlider.create(rs_range_ver2,{
        start: [ 50 ],
        connect: 'lower',
        range: {
            'min':  [20],
            'max':  [100]
        },
        orientation: 'vertical',
        direction: 'rtl'
    });

    noUiSlider.create(rs_range_ver3,{
        start: [ 30 ],
        connect: 'lower',
        range: {
            'min':  [20],
            'max':  [100]
        },
        orientation: 'vertical',
        direction: 'rtl'
    });

    noUiSlider.create(rs_range_ver4,{
        start: [ 50 ],
        connect: 'lower',
        range: {
            'min':  [20],
            'max':  [100]
        },
        orientation: 'vertical',
        direction: 'rtl'
    });

    noUiSlider.create(rs_range_ver5,{
        start: [ 80 ],
        connect: 'lower',
        range: {
        'min':  [20],
        'max':  [100]
        },
        orientation: 'vertical',
        direction: 'rtl'
    });


    // RANGE SLIDER - DRAG
    // =================================================================
    // Require noUiSlider
    // http://refreshless.com/nouislider/
    // =================================================================
    var rs_range_drg = document.getElementById('demo-range-drg');

    noUiSlider.create(rs_range_drg, {
        start: [ 40, 60 ],
        behaviour: 'drag',
        connect: true,
        range: {
        'min':  20,
        'max':  80
        }
    });




    // RANGE SLIDER - DRAG-FIXED
    // =================================================================
    // Require noUiSlider
    // http://refreshless.com/nouislider/
    // =================================================================
    var rs_range_fxt = document.getElementById('demo-range-fxt');

    noUiSlider.create(rs_range_fxt, {
        start: [ 40, 60 ],
        behaviour: 'drag-fixed',
        connect: true,
        range: {
            'min':  20,
            'max':  80
        }
    });





    // RANGE SLIDER PIPS
    // =================================================================
    var range_all_sliders = {
        'min': [ 0 ],
        '25%': [ 25 ],
        '50%': [ 50 ],
        '75%': [ 75 ],
        'max': [ 100 ]
    };



    // RANGE SLIDER - HORIZONTAL PIPS
    // =================================================================
    // Require noUiSlider
    // http://refreshless.com/nouislider/
    // =================================================================
    var rs_range_hpips = document.getElementById('demo-range-hpips');

    noUiSlider.create(rs_range_hpips, {
        range: range_all_sliders,
        connect: 'lower',
        start: 0,
        pips: { // Show a scale with the slider
            mode: 'steps',
            density: 2
        }
    });
	
	    var rs_range_hpips = document.getElementById('demo-range-hpips2');

    noUiSlider.create(rs_range_hpips, {
        range: range_all_sliders,
        connect: 'lower',
        start: 0,
        pips: { // Show a scale with the slider
            mode: 'steps',
            density: 2
        }
    });




    // SELECT2 SINGLE
    // =================================================================
    // Require Select2
    // https://github.com/select2/select2
    // =================================================================
    $("#demo-select2").select2();




    // SELECT2 PLACEHOLDER
    // =================================================================
    // Require Select2
    // https://github.com/select2/select2
    // =================================================================
    $("#demo-select2-placeholder").select2({
        placeholder: "Select a state",
        allowClear: true
    });



    // SELECT2 SELECT BOXES
    // =================================================================
    // Require Select2
    // https://github.com/select2/select2
    // =================================================================
    $("#demo-select2-multiple-selects").select2();




    // BOOTSTRAP TIMEPICKER
    // =================================================================
    // Require Bootstrap Timepicker
    // http://jdewit.github.io/bootstrap-timepicker/
    // =================================================================
    $('#demo-tp-com').timepicker();



    // BOOTSTRAP TIMEPICKER - COMPONENT
    // =================================================================
    // Require Bootstrap Timepicker
    // http://jdewit.github.io/bootstrap-timepicker/
    // =================================================================
    $('#demo-tp-textinput').timepicker({
        minuteStep: 5,
        showInputs: false,
        disableFocus: true
    });


    // BOOTSTRAP DATEPICKER
    // =================================================================
    // Require Bootstrap Datepicker
    // http://eternicode.github.io/bootstrap-datepicker/
    // =================================================================
    $('#demo-dp-txtinput input').datepicker();


    // BOOTSTRAP DATEPICKER WITH AUTO CLOSE
    // =================================================================
    // Require Bootstrap Datepicker
    // http://eternicode.github.io/bootstrap-datepicker/
    // =================================================================
    $('#demo-dp-component .input-group.date').datepicker({autoclose:true});


    // BOOTSTRAP DATEPICKER WITH RANGE SELECTION
    // =================================================================
    // Require Bootstrap Datepicker
    // http://eternicode.github.io/bootstrap-datepicker/
    // =================================================================
    $('#demo-dp-range .input-daterange').datepicker({
//        format: "MM dd, yyyy",
        format: "mm/dd/yyyy",
        todayBtn: "linked",
        autoclose: true,
        todayHighlight: true,
		showInputs: false,
		disableFocus: true
    });


    // INLINE BOOTSTRAP DATEPICKER
    // =================================================================
    // Require Bootstrap Datepicker
    // http://eternicode.github.io/bootstrap-datepicker/
    // =================================================================
    $('#demo-dp-inline div').datepicker({
    format: "mm/dd/yyyy",
    todayBtn: "linked",
    autoclose: true,
    todayHighlight: true,
	showInputs: false,
	disableFocus: true
    });



    // SWITCHERY - CHECKED BY DEFAULT
    // =================================================================
    // Require Switchery
    // http://abpetkov.github.io/switchery/
    // =================================================================
    new Switchery(document.getElementById('demo-sw-checked'));


    // SWITCHERY - UNCHECKED BY DEFAULT
    // =================================================================
    // Require Switchery
    // http://abpetkov.github.io/switchery/
    // =================================================================
    new Switchery(document.getElementById('demo-sw-unchecked'));


    // SWITCHERY - CHECKING STATE
    // =================================================================
    // Require Switchery
    // http://abpetkov.github.io/switchery/
    // =================================================================
    var changeCheckbox = document.getElementById('demo-sw-checkstate'), changeField = document.getElementById('demo-sw-checkstate-field');
    new Switchery(changeCheckbox)
    changeField.innerHTML = changeCheckbox.checked;
    changeCheckbox.onchange = function() {
        changeField.innerHTML = changeCheckbox.checked;
    };


    // SWITCHERY - COLORED
    // =================================================================
    // Require Switchery
    // http://abpetkov.github.io/switchery/
    // =================================================================
    new Switchery(document.getElementById('demo-sw-clr1'), {color:'#489eed'});
    new Switchery(document.getElementById('demo-sw-clr2'), {color:'#35b9e7'});
    new Switchery(document.getElementById('demo-sw-clr3'), {color:'#44ba56'});
    new Switchery(document.getElementById('demo-sw-clr4'), {color:'#f0a238'});
    new Switchery(document.getElementById('demo-sw-clr5'), {color:'#e33a4b'});
    new Switchery(document.getElementById('demo-sw-clr6'), {color:'#2cd0a7'});
    new Switchery(document.getElementById('demo-sw-clr7'), {color:'#8669cc'});
    new Switchery(document.getElementById('demo-sw-clr8'), {color:'#ef6eb6'});


    // SWITCHERY - SIZES
    // =================================================================
    // Require Switchery
    // http://abpetkov.github.io/switchery/
    // =================================================================
    new Switchery(document.getElementById('demo-sw-sz-lg'), { size: 'large' });
    new Switchery(document.getElementById('demo-sw-sz'));
    new Switchery(document.getElementById('demo-sw-sz-sm'), { size: 'small' });


});
