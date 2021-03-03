/* version du script compatible SAFARI
/* fonction de dépendance des select / option */

const html = $('#brand-car').html();
$('#brand-type').on('change', function() {
    let value = $(this).val()
    if ($('#brand-car').hasClass('firstclick')) {
        console.log("tata");
        $('#brand-car').append(html - value).removeClass('firstclick');
        $("#brand-car option:not([data-brand-type=" + value + "])").detach();
    } else {
        $('#brand-car').append(html);
        $("#brand-car option:not([data-brand-type=" + value + "])").detach();
    }
});

/* fonction de rappelle du choix */
$('#brand-car').on('change', function() {
    let typechoice = $('#brand-car option:selected').html();
    console.log(typechoice);
    $("#brand_choice").text(typechoice);
});