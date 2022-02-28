// metoda get
$(document).ready(function() {
    let przycisk = $('.click')
    przycisk.click(function() {
        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data) {

                let pUserId = $('<p></p>').text(`User:${data.userId}`);
                let pId = $('<p></p>').text(`ID:${data.id}`);
                let pTitle = $('<p></p>').text(`Title:${data.title}`);
                let pBody = $('<p></p>').text(`Body:${data.body}`);
                let hr = $('<hr />');

                let dane = $('body');
                dane.append(pUserId);
                dane.append(pId);
                dane.append(pTitle);
                dane.append(pBody);
                dane.append(hr);



            })
            .fail(function(error) {
                console.error(error)
            })


    })
})


// metoda JOSN

$(document).ready(function() {
    let przycisk = $('.klik')
    przycisk.click(function() {
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data) {

                let pUserId = $('<p class="dom"></p>').text(`User:${data.userId}`);
                let pId = $('<p class="dom"></p>').text(`ID:${data.id}`);
                let pTitle = $('<p class="dom"></p>').text(`Title:${data.title}`);
                let pBody = $('<p class="dom"></p>').text(`Body:${data.body}`);
                let hr = $('<hr />');

                let dane = $('body');
                dane.append(pUserId);
                dane.append(pId);
                dane.append(pTitle);
                dane.append(pBody);
                dane.append(hr);



            })
            .fail(function(error) {
                console.error(error)
            })


    })
})