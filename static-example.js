function toggleHandler(section) {
    $(section).toggle("fast");
}

function clearField (field) {
    $(field).val("");
}

function checkMin(max) {
    var min = $('[name=min-price]').val();
    
    if (min >= max) {
        $('[name=min-price]').val(parseInt(max) - 1);
    }
    if (min == "") {
        min = 0;
    }
    
}

function checkMax(min) {
    var max = $('[name=max-price]').val();
    
    if (min >= max ) {
        $('[name=max-price]').val(parseInt(min) + 1);
    }
    if (max == "") {
        max = min + 1;
    }
}

