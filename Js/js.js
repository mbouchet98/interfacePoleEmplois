

$(document).ready(function () {


    /* code pour recherhce avec input*/
    $("#txtMotCle").on("keyup", function () {
        filterList();
    });

    /* code pour recherche en fonction des lieux, du Temps et des Contrat */
    //Filter Recruiters
    $('select#selectLieu').change(function () {
        filterList();
    });

    $('select#selectContrat').change(function () {
        filterList();
    });

    $('select#selectDuree').change(function () {
        filterList();
    });

    // Recruiters filter function
    function filterList() {
        var filtre = "div";

        // *=" means that if a data-custom type contains multiple values, it will find them
        var Lieu = $('select#selectLieu').val();
        if (Lieu != "") filtre += "[data-custom-type*=" + Lieu + "]";
        var Contrat = $('select#selectContrat').val();
        if (Contrat != "") filtre += "[data-custom-type*=" + Contrat + "]";
        var Duree = $('select#selectDuree').val();
        if (Duree != "") filtre += "[data-custom-type*=" + Duree + "]";
        var MotCle = $("#txtMotCle").val();

        var list = $("#idToutOffre .test");

        $(list).hide();

        if (MotCle != "" && (Lieu === "" && Contrat === "" && Duree === "")) {
            //$(filter);
            $(".test").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(MotCle) > -1);
            });
            //$( "div.panel-header('AIDE')").fadeIn('slow');
        }
        else {
            if (MotCle != "" && (Lieu != "" || Contrat != "" || Duree != "")) {

                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Vous ne pouvez, utiliser l outil Mot Cle en même temps que les filtre de selection.',
                    footer: '<a href>Why do I have this issue?</a>'
                });
            }
            else {

                if (MotCle === "" && Lieu === "" && Contrat === "" && Duree === "") {
                    //autre solution que le reload.
                    $(list).fadeIn('slow');
                }
                else {
                    $(filtre).fadeIn('slow');
                }
            }
        }



        //$(filtre).fadeIn('slow');

        $("#nbre").text($('.test:visible').length + " offre(s) correspondante(s)");
    }
    $("#nbre").text($('.test:visible').length + " offre(s) correspondante(s)");
});
