/* fonction de dépendance des select / option */
$('#brand-type').on('change', function() {
    var value = $(this).val()
    $("#brand-car option").show()
    $("#brand-car option:not([data-brand-type=" + value + "])").hide();
});

/* fonction de rappelle du choix */
$('#brand-car').on('change', function() {
    let typechoice = $('#brand-car option:selected').html();
    console.log(typechoice);
    $("#brand_choice").text(typechoice);
});