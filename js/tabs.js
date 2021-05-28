$('#header-tabs, #header-tabs-mobile .section-tabs_headings-link').on('click', (e) => {
       let panelIndex = $(e.target).data('headingTabIndex');

       // handle panels
        $('#header-panels .section-tabs_block-description').attr('hidden', true);
        $(`#header-panels [data-heading-panel-index="${panelIndex}"]`).attr('hidden', false);

        $('#change-image .section-tabs_block-circle').attr('hidden', true);
        $(`#change-image [data-heading-image-index="${panelIndex}"]`).attr('hidden', false);
    // handle circle
   });

$('#future-tab .section-future_tab-title').on('click', (e) => {
    let panelIndex = $(e.target).data('futureTabIndex');

    $('#future-panels .section-future_tab-main-content').attr('hidden', true);
    $(`#future-panels [data-future-panel-index="${panelIndex}"]`).attr('hidden', false);

    $('#change-img .section-future_tab-content').attr('hidden', true);
    $(`#change-img [data-future-image-index="${panelIndex}"]`).attr('hidden', false);

});

$('.section-tabs_box-headings p').click(function() {
    $(this).siblings('p').removeClass('active');
    $(this).addClass('active');
});

function handleDropdown(parent) {
    $(`${parent} .section-future_tab-block-swype`).click(function() {
        $(`${parent} .active-drop`).removeClass('active-drop');
        $(this).addClass('active-drop');

        $(`${parent} .section-future_tab-arrow-image_active`).removeClass('section-future_tab-arrow-image_active');
        $(this).find('.section-future_tab-arrow-image').addClass('section-future_tab-arrow-image_active');

    });
}

$('.nav-menu').on('click', function() {
    $('#nav-item').toggleClass('active-menu');
});

// handleDropdown('#future-panels');

// $('.section-future_tab-title').click(function() {
//     $('.active-drop').removeClass('active-drop');
//     $(this).addClass('active-drop');
// });
// $('.section-future_tab-block-swype').click(function() {
//     $('.active-arrow').removeClass('active-arrow');
//     $(this).addClass('active-arrow');
// })