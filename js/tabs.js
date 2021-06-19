$(window).on('load', function() {

    $(".bringing .bringing_list-item").click(function() {
        $(".bringing .bringing_list-item").removeClass("active").eq($(this).index()).addClass("active");
        $(".bringing_panel-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $('#future-tab .future_panel-item-title').on('click', (e) => {
        let panelIndex = $(e.target).data('futureTabIndex');
        $('#future-panels .future_item-description-wrapper').attr('hidden', true);
        $(`#future-panels [data-future-panel-index="${panelIndex}"]`).attr('hidden', false);

        $('.future_image-wrapper-mobile .future_image-mobile').attr('hidden', true);
        $(`.future_image-wrapper-mobile [data-future-image-index="${panelIndex}"]`).attr('hidden', false);
    });

    function handleDropdown(parent) {
        $(`${parent} .future_panel-item-switch`).click(function() {
            $(`${parent} .active-tab`).removeClass('active-tab');
            $(this).addClass('active-tab');

            $(`${parent} .future_arrow-image-active`).removeClass('future_arrow-image-active');
            $(this).find('.future_arrow-image').addClass('future_arrow-image-active');
        });
    }
    handleDropdown('#future-panels');

    //
    // function activeTitle() {
    //     $('.section-bringing_box-headings p').click(function () {
    //         $(this).siblings('p').removeClass('active');
    //         $(this).addClass('active');
    //     });
    // }
    // activeTitle();




    function clickMobileMenu() {
        $('.main-nav_burger').on('click', function() {
            $('#nav-item').toggleClass('main-nav_active-list');
        });
    }
    clickMobileMenu();

    function clickHelixRows() {
        $('#switch-get').on('click', function() {
            $('#switch-list-get').toggleClass('helix_active-list');
        });
        $('#switch-helix').on('click', function() {
            $('#switch-list-helix').toggleClass('helix_active-list');
        });
        $('#switch-support').on('click', function() {
            $('#switch-list-support').toggleClass('helix_active-list');
        });
    }
    clickHelixRows();


});


