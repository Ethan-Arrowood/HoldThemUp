$(document).ready(function() {
    allFilter("#all_categories", ".categories-list");
    allFilter("#all_tags", ".tags-list")
});

function allFilter (all_list, list) {
    $(all_list).change(function() {
        console.log("State: ", this.checked)
        $(list).toggle("fast");
    })
}

function clearSearch (searchField) {
    $("[name=" + searchField + "]").val("");
}