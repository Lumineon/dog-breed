const Methods = {
    init() {
        Methods.getBreeds();
        Methods.getfonts();
    },

    getBreeds() {
        //dog breeds
        $.ajax({url: "https://api.thedogapi.com/v1/breeds", success: function(response){
            buildBreedsSelect(response);
        }});
    },

    getfonts(){
        //fonts
        $.ajax({url: "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAkU2dJvsw3rusIoub8caVAhGpUAjFAXew",
        success: function(fonts){
            buildFontsSelect(fonts.items);
        }});
    },
};

function showFonts(fontFamily) {
    const fontOptions = $('.fonts__select option');
    const fontSelect = $('.fonts__select');

    $(document).find('head').append(`<link href="https://fonts.googleapis.com/css2?family=${fontFamily[0]}&display=swap" rel="stylesheet"></link>`);

    fontSelect.change(function() {
        fontOptions.each(function(index) {
            if (fontOptions.eq(index).is(':selected')) {
                $(document).find('head').append(`<link href="https://fonts.googleapis.com/css2?family=${fontFamily[index]}&display=swap" rel="stylesheet"></link>`);
            };
        });
    });
};

function buildBreedsSelect(breeds) {
    const breedSelect = $(".dog-breeds__select");
    $.each(breeds, function(key, value) {
        breedSelect.append(`<option value=${value.id}>${value.name}</option>`)
    });
};

function buildFontsSelect(fonts) {
    const fontFamily = [];
    const fontSelect = $(".fonts__select");
    $.each(fonts, function(key, value) {
        fontSelect.append(`<option value=${key}>${value.family}</option>`);
        fontFamily.push(value.family.replace(/\s+/g, '+'));
    });
    showFonts(fontFamily);
};

export default {
    init: Methods.init
}