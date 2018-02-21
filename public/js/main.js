/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Created by Сергей on 09.01.2018.
 */
$(document).ready(function () {
    var stickyNavTop = $('#sticky_box').height();
    var stickyNav = function stickyNav() {
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
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    }]
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
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    }]
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
        $(this).toggleClass('current');
    });
});

$(document).ready(function () {
    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });

    $('.users_phone_box ').on('click', 'button.remove_phone_btn', function (e) {
        e.preventDefault();
        var phoneId = $(this).val();
        console.log(phoneId);
        var userId = $('.userId').val();
        $.ajax({
            type: 'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: '/removePhones',
            data: { phoneId: phoneId },
            success: function success(data) {}
        });
    });
});

$(document).ready(function () {
    var count = $('.admin_phone_input').length;
    $('#add_new_phone').click(function (e) {
        var input = '<div class="position-relative new_users_phone clearfix"><button class="btn btn-danger d-inline-block remove_phone_btn position-absolute" data-token="{{ csrf_token() }}"> <i class="fa fa-minus"></i> </button><input type="text" class="form-control form-control-lg d-inline-block  pull-right admin_phone_input position-relative" id="phone' + count + '" placeholder = "введите дополнительный телефон" name="newphone' + count + '"> </div>';
        e.preventDefault();
        while (count < 3) {
            $('.users_phone_box').append(input);
            count++;
            console.log(count);
            if (count == 3) {
                $('#add_new_phone').attr('disabled', true);
            }
            break;
        }
    });

    $('.users_phone_box').on('click', 'button.remove_phone_btn', function () {
        $(this).parent().remove();
        count--;
        if (count < 3) {
            $('#add_new_phone').attr('disabled', false);
        }
    });
});

//=============== Crop js =============================


$(document).ready(function () {

    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });
    // отследить нажатие и выбор файла
    $('#imgAdd[name="img"]').on('change', function () {
        var image = document.getElementById('image');
        var files = $(this)[0].files;
        var file = files[0];
        var username = $('#newUsername').val();
        $('#image').attr('src', window.URL.createObjectURL(file));
        var cropper = new Cropper(image, {
            aspectRatio: 1 / 1
        });
        cropper.crop();

        $('#saveImg').on('click', function () {
            cropper.getCroppedCanvas().toBlob(function (file) {
                var formData = new FormData();
                // Передаем в пост имя файла и имя пользователя
                formData.append('croppedImage', file);
                formData.append('username', username);
                $.ajax({
                    type: 'POST',
                    url: '/userLogo',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function success(data) {
                        console.log(data);
                        $('#modal').removeClass('show');
                        $('body').removeClass('modal-open');
                    },
                    error: function error(err) {}
                });
            });
        });
    });
});
//=========================================================

//================  Open Modal Windows
$(document).ready(function () {
    $('.custom_field_add_btn').click(function (e) {
        var item = $(this).val();

        switch (item !== '') {
            case item === 'operation':
                $('#modalOperation').modal('show');
                break;
            case item === 'type':
                $('#modalType').modal('show');
                break;
            case item === 'place':
                $('#modalPlace').modal('show');
                break;
            default:
                break;
        }
    });
});

$(document).ready(function () {
    $('#openUserMessage').click(function () {
        $('#myModal').modal('show');
    });
    $('.send_message').click(function () {
        $('#myModal').modal('show');
    });
});

//============================================================

// ================= Adding object images ==============

$(document).ready(function () {
    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object
        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {
            // Only process image files.
            console.log(files[i]);
            if (!f.type.match('image.*')) {
                alert("Image only please....");
            }
            var reader = new FileReader();
            // Closure to capture the file information.
            reader.onload = function (theFile) {
                return function (e) {
                    // Render thumbnail.
                    var span = document.createElement('span');
                    span.className = "col-3 mb-3 position-relative";
                    span.innerHTML = ['<button class="position-absolute btn btn-danger remove_object_img" type="button" value="0"><i class="fa fa-minus  "></i></button><img class="img_responsive" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
                    document.getElementById('outputMulti').insertBefore(span, null);
                };
            }(f);
            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
    }

    if (document.getElementById('fileMulti') !== null) {
        document.getElementById('fileMulti').addEventListener('change', handleFileSelect, false);
    }
});

// =====================================================

//==================== Remove objects image ============

$(document).ready(function () {
    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });
    $('#outputMulti').on('click', 'button.remove_object_img', function (e) {
        var imageId = $(this).val();
        console.log(imageId);
        if (imageId == 0) {
            $(this).parent().fadeOut();
        }

        if (imageId !== 0) {
            $(this).parent().fadeOut();

            $.ajax({
                type: 'POST',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/removeImages',
                data: { imageId: imageId },
                success: function success(data) {},
                error: function error(err) {}
            });
        }
    });
});

//======================================================

//================ Ajax pagination =====================

// $(document).ready(function () {
//     $.ajaxSetup({
//
//         headers: {
//
//             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//
//         }
//
//     });
//     $(document).on('click', '.objects-pagination a', function (e) {
//         e.preventDefault();
//
//         var pageRaw = $(this).attr('href').split('?');
//         pageRaw.forEach(function (item) {
//             if (item.search('/(page=)/')) {
//                 page = item.split('page=')[1];
//                 // console.log(page);
//             }
//         });
//
//         var objectOperation = $_GET()['object_operation_id'],
//             objectType = $_GET()['object_type_id'],
//             objectPlace = $_GET()['object_place_id'] ;
//
//         // console.log('objectOperation=' + objectOperation, 'objectPlace=' + objectPlace, 'objectType=' + objectType);
//
//         $.ajax({
//             type: 'GET',
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             },
//             url: '/objects?'+ (objectOperation !== undefined ? 'object_operation_id=' + objectOperation : '') +
//             (objectType !== undefined ? '&object_type_id=' + objectType : '') +
//             (objectPlace !== undefined ? '&object_place_id=' + objectPlace : '') + '&page=' + page
//             // url:'/objects?page='+page
//
//
//         }).done(function (data) {
//             $('body').html(data);
//             $('.objects-pagination a').off('click');
//         })
//
//
//     });
//
//     // Get all get parameters from URL
//     function $_GET(param) {
//         var vars = {};
//         window.location.href.replace(location.hash, '').replace(
//             /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
//             function (m, key, value) { // callback
//                 vars[key] = value !== undefined ? value : '';
//             }
//         );
//
//         if (param) {
//             return vars[param] ? vars[param] : null;
//         }
//         return vars;
//     }
// });


//======================================================

//=================== Ajax store user message ==========

$(document).ready(function () {
    $.ajaxSetup({

        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }

    });
    $('#storeMessage').click(function (e) {
        e.preventDefault();
        var phone = $('#userphone').val();
        var name = $('#name').val();
        var extratext = $('#extratext').val();
        var typeObject = $('#typeObject').val();
        var typeOperation = $('#typeOperation').val();
        var email = $('#email').val();

        if (phone !== '') {
            $('.required_field').remove();

            $.ajax({
                type: 'POST',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: '/storeMessage',
                data: {
                    name: name,
                    phone: phone,
                    typeObject: typeObject,
                    typeOperation: typeOperation,
                    extratext: extratext,
                    email: email
                },
                success: function success(data) {
                    $('.alert-success .success_message').css('display', 'block');
                    $('.success_message').html(data);
                }

            });
        } else {
            $('.required_field').html('Поле обязательно для заполнения!');
        }
    });
});

//======================================================

//================== BlueImp Image Gallery =============

$(document).ready(function () {
    $('.row').on('click', '#links', function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = { index: link, event: event },
            links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
    });
});

//======================================================

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);