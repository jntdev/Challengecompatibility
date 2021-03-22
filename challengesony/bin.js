/* version du script compatible SAFARI
/* fonction de dépendance des select / option */

const html = $('#brand-car').html();
$('#brand-type').on('change', function() {
    $('#brand-car').html('');
    let value = $(this).val();
    $('#brand-car').html(html);
    $("#brand-car option:not([data-brand-type=" + value + "])").detach();
});

/* fonction de rappelle du choix */
$('#brand-car').on('change', function() {
    let typechoice = $('#brand-car option:selected').html();
    console.log(typechoice);
    $("#brand_choice").text(typechoice);
});