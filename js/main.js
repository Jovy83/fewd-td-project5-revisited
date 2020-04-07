$('.searchbox').on('keyup', function(e) {

    // get the search string from searchbox
    const searchString = $(this).val().toLowerCase();
    console.log(searchString);

    // if search string is empty, show all images
    if (searchString === "") {
        $('.gallery a').each(function() {
            $(this).show();
        });
    } else {
        // check if img caption contains searchString
        $('.gallery img').each(function() {
            const caption = $(this).attr('alt').toLowerCase();
            if (caption.includes(searchString)) {
                // show this photo
                $(this).parent().show();
            } else {
                // hide this photo
                $(this).parent().hide();
            }
        });
    }
});


/* ================================= 
  Lightbox
==================================== */
lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true
});