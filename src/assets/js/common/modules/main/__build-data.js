
const Methods = {
    init() {
        Methods.getBreeds();
    },

    getBreeds() {
        //dog breeds
        $.ajax({url: "https://api.thedogapi.com/v1/breeds", success: function(response){
            buildBreedsSelect(response);
        }});
    },
};

function buildBreedsSelect(breeds) {
    const breedSelect = $(".dog-breeds__select");
    $.each(breeds, function(key, value) {
        breedSelect.append(`<option value=${value.id}>${value.name}</option>`)
    });
};

export default {
    init: Methods.init
}