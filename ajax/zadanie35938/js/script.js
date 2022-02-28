const div = $('.dane').after('<div id="dane-programisty"</div>')

$(document).ready(function() {
    $('.dane').click(function() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data) {
                let opis = $('<h3>Dane Pracownika:</h3>')
                let imie = $('<p class="dom"></p>').text(`Imie: ${data.imie}`);
                let nazwisko = $('<p class="dom"></p>').text(`Nazwisko: ${data.nazwisko}`);
                let zawod = $('<p class="dom"></p>').text(`Zawód: ${data.zawod}`);
                let firma = $('<p class="dom"></p>').text(`Firma: ${data.firma}`);
                let hr = $('<hr />')

                let dane = $('#dane-programisty')
                dane.append(opis)
                dane.append(imie);
                dane.append(nazwisko);
                dane.append(zawod);
                dane.append(firma);
                dane.append(hr)

            })
            .fail(function(error) {
                console.error(error)
            })

        console.log("działa");
    })
})