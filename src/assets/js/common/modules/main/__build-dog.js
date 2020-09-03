// import getBreeds from './__build-data';

const Methods = {
    init() {
        Methods.buildDog();
    },

    buildDog() {
        const nameContainer = $('.dog__name__container p');
        $(".js--build-dog").on("click", function() {
            const name = $('.dog-names__input').val();
            const selectedFont = $('.fonts__select option:checked').text();
            const selectedColor = $('.font-colors__select option:checked').val();
            const breedIds = $('.dog-breeds__select option:checked').val();

            getImages(breedIds);
            nameContainer.text(name);
            nameContainer.css("color", `${selectedColor}`);
            nameContainer.css("font-family", `${selectedFont}`);

        });
    },
};

function getImages(id) {
    $.ajax({url: "https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=" + id, success: function(data){
        const imageUrl = data[0].url;
        buildImg(imageUrl);
    }});
};

function buildImg(url) {
    const image = $("#dog__image");
    image.attr('src', url);
};

export default {
    init: Methods.init
};