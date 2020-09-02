const Methods = {
    init() {
        Methods.getData();
        Methods.showFonts();
    },

    getData() {

        //dog breeds
        $.ajax({url: "https://api.thedogapi.com/v1/breeds", success: function(response){
            buildBreedsSelect(response);
        }});

        //fonts
        $.ajax({url: "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAkU2dJvsw3rusIoub8caVAhGpUAjFAXew",
        success: function(fonts){
            buildFontsSelect(fonts.items);
            console.log(fonts.items)
        }});
    },

    showFonts() {
        // const fontFamily = value.family.replace(/\s+/g, '+');
        const fontOptions = $('.fonts__select option');
        const fontSelect = $('.fonts__select');

        fontSelect.change(function() {
            fontOptions.each(function(index) {
                console.log(index, $(this))
                if ($(this).eq(index).is(':selected')) {
                    console.log('selecionado', fontOptions)
                    // $(document).find('head').append(`<link href="https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap" rel="stylesheet"></link>`);
                };
            });
        });
    },
};

function buildBreedsSelect(breeds) {
    const breedSelect = $(".dog-breeds__select");
    $.each(breeds, function(key, value) {
        breedSelect.append(`<option value=${value.id}>${value.name}</option>`)
    });
};

function buildFontsSelect(fonts) {
    const fontSelect = $(".fonts__select");
    $.each(fonts, function(key, value) {
        fontSelect.append(`<option value=${key}>${value.family}</option>`);
    });
};

export default {
    init: Methods.init
}