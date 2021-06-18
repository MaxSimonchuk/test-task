$(window).on('load', function() {

    $(".bringing .bringing_list-item").click(function() {
        $(".bringing .bringing_list-item").removeClass("active").eq($(this).index()).addClass("active");
        $(".bringing_panel-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".acordeon").on("click", ".acordeon-cabecera", function() {
        $(this).toggleClass("active").next().slideToggle();
    });

    // function switchTabFuture() {
    //     $('.future_panel-item-title-arrow').on('click', (e) => {
    //         let panelIndex = $(e.target).data('future-link');
    //
    //         $('.future_item-description ').attr('hidden', true);
    //         $(`.future_item-description  [data-future-description="${panelIndex}"]`).attr('hidden', false);
    //
    //         $('.future_image-wrapper').attr('hidden', true);
    //         $(`.future_image-wrapper [data-future-image="${panelIndex}"]`).attr('hidden', false);
    //
    //
    // });
    // switchTabFuture();

    function handleDropdown(parent) {
        $(`${parent} .section-future_tab-block-swype`).click(function() {
            $(`${parent} .active-drop`).removeClass('active-drop');
            $(this).addClass('active-drop');

            $(`${parent} .section-future_tab-arrow-image_active`).removeClass('section-future_tab-arrow-image_active');
            $(this).find('.section-future_tab-arrow-image').addClass('section-future_tab-arrow-image_active');
        });
    }
    handleDropdown('#future-panels');

    function activeTitle() {
        $('.section-bringing_box-headings p').click(function () {
            $(this).siblings('p').removeClass('active');
            $(this).addClass('active');
        });
    }
    activeTitle();




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


