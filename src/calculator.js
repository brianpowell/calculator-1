var displayField;

$(document).ready(function() {
    displayField = $('#display')
    $("button").bind('click', buttonPressed);
})

function buttonPressed() {
    var buttonText = $(this).text();
            //console.log("Pressed: "+buttonText);
    if (isCompute(buttonText)) {
        compute()
    } else if (isClear(buttonText)) {
        clear()
    } else if (isBackSpace(buttonText)) {
        backSpace()
    } else if (isTests(buttonText)) {
        //do nothing...
    } else {
        display(buttonText)
    }
}

function isClear(buttonText) {
    return "Clear" == buttonText
}

function isBackSpace(buttonText) {
    return "\u21D0" == buttonText
}

function isCompute(buttonText) {
    return "=" == buttonText
}

function isTests(buttonText) {
    
    switch(buttonText) {
        case "Run Tests":
            runTests();
            return true;
        break;
        case "Show Mocha Tests":
        case "Hide Mocha Tests":
        case "Toggle Mocha Tests":
            toggleMocha();
            return true;
        break;
        default: 
            return false;
        break;
    }
}

function display(buttonText) {
    var newDisplay = displayField.val() + buttonText
    displayField.val(newDisplay)
}

function clear() {
    $('#display').val("")
}

function backSpace() {
    var display = displayField.val()

    if (display.length > 0) {
        var newDisplay = display.substr(0, display.length - 1)
        displayField.val(newDisplay)
    }
}

function compute(val) {
    var data = '';
    try {
        data = eval(val || displayField.val())
    } catch (error) {
        data = "Error";
    }
    $('#display').val(data);
    return data;
}