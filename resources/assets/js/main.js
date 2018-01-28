/**
 * Created by Сергей on 09.01.2018.
 */
$(document).ready(function () {
    var stickyNavTop = $('#sticky_box').height();
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {

            $('#sticky_box').addClass('sticky');
            $('#logo_box').addClass('sticky_header_logo_box').removeClass('header_logo_box');
            $('#custom_heater_form').addClass('custom_heater_form_sticky');
            $('.first_section').css('margin-top', '64px');


        } else {
            $('#sticky_box').removeClass('sticky');
            $('#logo_box').addClass('header_logo_box').removeClass('sticky_header_logo_box');
            $('.custom_heater_form').css('margin', '11px 0 16px 0');
            $('.mega_menu_hover_line:hover:after').css('bottom', '0');
            $('.first_section').css('margin-top', '0');

        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});

$('.last_property_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    prevArrow: $('.last_property_prev'),
    nextArrow: $('.last_property_next'),
    dots: false,
    appendArrows: ".arrows_box",
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.urgent_sail').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    prevArrow: $('.urgent_arrow_prev'),
    nextArrow: $('.urgent_arrow_next'),
    dots: false,
    appendArrows: ".arrows_box",
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$(document).ready(function () {
    $('.list_box').click(function () {
        if ($(this).children('.list_switcher').hasClass('fa-minus')) {
            $(this).children('.list_switcher').removeClass('fa-minus');
            $(this).children('.list_switcher').addClass('fa-plus');
        } else {
            $(this).children('.list_switcher').addClass('fa-minus');
            $(this).children('.list_switcher').removeClass('fa-plus');
        }

        $(this).children('.list_advantage').toggle('slow');
    });
});


$(document).ready(function () {
    $('.menu_btn').click(function () {
        $(this).toggleClass('change');
        $('.main_nav').toggleClass('display_flex');
    });
});

$(document).ready(function () {
    $('.admin_list_link').click(function () {
        $('.admin_submenu').css('display', 'none');
        $(this).next().toggleClass('show');
        $(this).toggleClass('current')
    });
});


$(document).ready(function () {
    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });

    $('.users_phone_box ').on('click','button.remove_phone_btn', function (e) {
        e.preventDefault();
        alert('++');
        var phoneId = $(this).val();
        console.log(phoneId);
        var userId = $('.userId').val();
        $.ajax({
            type:'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url:'/removePhones',
            data: {phoneId:phoneId},
            success:function(data){

                alert('+1');

                console.log(data);

            }
        })
    } )
});


$(document).ready(function () {
    var count = $('.admin_phone_input').length;
    $('#add_new_phone').click(function (e) {
        var input = '<div class="position-relative new_users_phone clearfix"><button class="btn btn-danger d-inline-block remove_phone_btn position-absolute" data-token="{{ csrf_token() }}"> <i class="fa fa-minus"></i> </button><input type="text" class="form-control form-control-lg d-inline-block  pull-right admin_phone_input position-relative" id="phone'+count+'" placeholder = "введите дополнительный телефон" name="extraphone'+count+'"> </div>';
        e.preventDefault();
        while(count < 3) {
            $('.users_phone_box').append(input);
            count++;
            console.log(count);
            break;
        }

    });

    $('.users_phone_box').on('click','button.remove_phone_btn', function () {
       $(this).parent().remove();
       count--;
    });
});





//=============== Crop js =============================


$(document).ready(function () {
    $('#imgAdd[name="img"]').on('change', function () {
        var image = document.getElementById('image');
        var files = $(this)[0].files;
        var file = files[0];
        var cropBoxData;
        var canvasData;
        $('#image').attr('src', window.URL.createObjectURL(file));
        var cropper = new Cropper(image, {
            aspectRatio: 4/3
        });
        cropper.crop();
    })
});
//=============== Crop js end =========================

