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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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

// $(document).ready(function () {
//     $.ajaxSetup({
//
//         headers: {
//             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//         }
//
//     });
//     $('#storeMessage').click(function (e) {
//         e.preventDefault();
//         var phone = $('#userphone').val();
//         var name = $('#name').val();
//         var extratext = $('#extratext').val();
//         var typeObject = $('#typeObject').val();
//         var typeOperation = $('#typeOperation').val();
//         var email = $('#email').val();
//
//         if (phone !== '') {
//             $('.required_field').remove();
//
//             $.ajax({
//                 type: 'POST',
//                 headers: {
//                     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//                 },
//                 url: '/storeMessage',
//                 data: {
//                     name: name,
//                     phone: phone,
//                     typeObject: typeObject,
//                     typeOperation: typeOperation,
//                     extratext: extratext,
//                     email: email
//                 },
//                 success: function (data) {
//                     $('.alert-success .success_message').css('display', 'block');
//                     $('.success_message').html(data);
//                 }
//
//             })
//         } else {
//             $('.required_field').html('Поле обязательно для заполнения!')
//         }
//
//     })
// });

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

/***/ 11:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(10);
module.exports = __webpack_require__(11);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmQ1ZWVlMmVkNWJjMWYwNmRmZjUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInN0aWNreU5hdlRvcCIsImhlaWdodCIsInN0aWNreU5hdiIsInNjcm9sbFRvcCIsIndpbmRvdyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjc3MiLCJzY3JvbGwiLCJzbGljayIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJkb3RzIiwiYXBwZW5kQXJyb3dzIiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2xpY2siLCJjaGlsZHJlbiIsImhhc0NsYXNzIiwidG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJuZXh0IiwiYWpheFNldHVwIiwiaGVhZGVycyIsImF0dHIiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBob25lSWQiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwidXNlcklkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsImNvdW50IiwibGVuZ3RoIiwiaW5wdXQiLCJhcHBlbmQiLCJwYXJlbnQiLCJyZW1vdmUiLCJpbWFnZSIsImdldEVsZW1lbnRCeUlkIiwiZmlsZXMiLCJmaWxlIiwidXNlcm5hbWUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjcm9wcGVyIiwiQ3JvcHBlciIsImFzcGVjdFJhdGlvIiwiY3JvcCIsImdldENyb3BwZWRDYW52YXMiLCJ0b0Jsb2IiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsImVycm9yIiwiZXJyIiwiaXRlbSIsIm1vZGFsIiwiaGFuZGxlRmlsZVNlbGVjdCIsImV2dCIsInRhcmdldCIsImkiLCJmIiwibWF0Y2giLCJhbGVydCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0aGVGaWxlIiwic3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJlc2NhcGUiLCJuYW1lIiwicmVzdWx0Iiwiam9pbiIsImluc2VydEJlZm9yZSIsInJlYWRBc0RhdGFVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1hZ2VJZCIsImZhZGVPdXQiLCJldmVudCIsInNyY0VsZW1lbnQiLCJsaW5rIiwic3JjIiwicGFyZW50Tm9kZSIsIm9wdGlvbnMiLCJpbmRleCIsImxpbmtzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJibHVlaW1wIiwiR2FsbGVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7O0FBR0FBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLFFBQUlDLGVBQWVILEVBQUUsYUFBRixFQUFpQkksTUFBakIsRUFBbkI7QUFDQSxRQUFJQyxZQUFZLFNBQVpBLFNBQVksR0FBWTtBQUN4QixZQUFJQyxZQUFZTixFQUFFTyxNQUFGLEVBQVVELFNBQVYsRUFBaEI7QUFDQSxZQUFJQSxZQUFZSCxZQUFoQixFQUE4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UUFBdEIsRUFBZ0MsVUFBVWdFLEtBQVYsRUFBaUI7QUFDN0NBLGdCQUFRQSxTQUFTMUYsT0FBTzBGLEtBQXhCO0FBQ0EsWUFBSXRCLFNBQVNzQixNQUFNdEIsTUFBTixJQUFnQnNCLE1BQU1DLFVBQW5DO0FBQUEsWUFDSUMsT0FBT3hCLE9BQU95QixHQUFQLEdBQWF6QixPQUFPMEIsVUFBcEIsR0FBaUMxQixNQUQ1QztBQUFBLFlBRUkyQixVQUFVLEVBQUNDLE9BQU9KLElBQVIsRUFBY0YsT0FBT0EsS0FBckIsRUFGZDtBQUFBLFlBR0lPLFFBQVEsS0FBS0Msb0JBQUwsQ0FBMEIsR0FBMUIsQ0FIWjtBQUlBQyxnQkFBUUMsT0FBUixDQUFnQkgsS0FBaEIsRUFBdUJGLE9BQXZCO0FBQ0gsS0FQRDtBQVFILENBVEQ7O0FBV0Esd0Q7Ozs7Ozs7QUNyZUEseUMiLCJmaWxlIjoiXFxqc1xcbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJkNWVlZTJlZDViYzFmMDZkZmY1IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkg0KHQtdGA0LPQtdC5IG9uIDA5LjAxLjIwMTguXHJcbiAqL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3RpY2t5TmF2VG9wID0gJCgnI3N0aWNreV9ib3gnKS5oZWlnaHQoKTtcclxuICAgIHZhciBzdGlja3lOYXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICBpZiAoc2Nyb2xsVG9wID4gc3RpY2t5TmF2VG9wKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjc3RpY2t5X2JveCcpLmFkZENsYXNzKCdzdGlja3knKTtcclxuICAgICAgICAgICAgJCgnI2xvZ29fYm94JykuYWRkQ2xhc3MoJ3N0aWNreV9oZWFkZXJfbG9nb19ib3gnKS5yZW1vdmVDbGFzcygnaGVhZGVyX2xvZ29fYm94Jyk7XHJcbiAgICAgICAgICAgICQoJyNjdXN0b21faGVhdGVyX2Zvcm0nKS5hZGRDbGFzcygnY3VzdG9tX2hlYXRlcl9mb3JtX3N0aWNreScpO1xyXG4gICAgICAgICAgICAkKCcuZmlyc3Rfc2VjdGlvbicpLmNzcygnbWFyZ2luLXRvcCcsICc2NHB4Jyk7XHJcblxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjc3RpY2t5X2JveCcpLnJlbW92ZUNsYXNzKCdzdGlja3knKTtcclxuICAgICAgICAgICAgJCgnI2xvZ29fYm94JykuYWRkQ2xhc3MoJ2hlYWRlcl9sb2dvX2JveCcpLnJlbW92ZUNsYXNzKCdzdGlja3lfaGVhZGVyX2xvZ29fYm94Jyk7XHJcbiAgICAgICAgICAgICQoJy5jdXN0b21faGVhdGVyX2Zvcm0nKS5jc3MoJ21hcmdpbicsICcxMXB4IDAgMTZweCAwJyk7XHJcbiAgICAgICAgICAgICQoJy5tZWdhX21lbnVfaG92ZXJfbGluZTpob3ZlcjphZnRlcicpLmNzcygnYm90dG9tJywgJzAnKTtcclxuICAgICAgICAgICAgJCgnLmZpcnN0X3NlY3Rpb24nKS5jc3MoJ21hcmdpbi10b3AnLCAnMCcpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHN0aWNreU5hdigpO1xyXG5cclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN0aWNreU5hdigpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJCgnLmxhc3RfcHJvcGVydHlfc2xpZGVyJykuc2xpY2soe1xyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgIHByZXZBcnJvdzogJCgnLmxhc3RfcHJvcGVydHlfcHJldicpLFxyXG4gICAgbmV4dEFycm93OiAkKCcubGFzdF9wcm9wZXJ0eV9uZXh0JyksXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGFwcGVuZEFycm93czogXCIuYXJyb3dzX2JveFwiLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XHJcbiAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXHJcbiAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxyXG4gICAgXVxyXG59KTtcclxuJCgnLnVyZ2VudF9zYWlsJykuc2xpY2soe1xyXG4gICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgIHByZXZBcnJvdzogJCgnLnVyZ2VudF9hcnJvd19wcmV2JyksXHJcbiAgICBuZXh0QXJyb3c6ICQoJy51cmdlbnRfYXJyb3dfbmV4dCcpLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhcHBlbmRBcnJvd3M6IFwiLmFycm93c19ib3hcIixcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxyXG4gICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcclxuICAgIF1cclxufSk7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5saXN0X2JveCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5jaGlsZHJlbignLmxpc3Rfc3dpdGNoZXInKS5oYXNDbGFzcygnZmEtbWludXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcubGlzdF9zd2l0Y2hlcicpLnJlbW92ZUNsYXNzKCdmYS1taW51cycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcubGlzdF9zd2l0Y2hlcicpLmFkZENsYXNzKCdmYS1wbHVzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmxpc3Rfc3dpdGNoZXInKS5hZGRDbGFzcygnZmEtbWludXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmxpc3Rfc3dpdGNoZXInKS5yZW1vdmVDbGFzcygnZmEtcGx1cycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmxpc3RfYWR2YW50YWdlJykudG9nZ2xlKCdzbG93Jyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLm1lbnVfYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2NoYW5nZScpO1xyXG4gICAgICAgICQoJy5tYWluX25hdicpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X2ZsZXgnKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5hZG1pbl9saXN0X2xpbmsnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmFkbWluX3N1Ym1lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICQodGhpcykubmV4dCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY3VycmVudCcpXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJC5hamF4U2V0dXAoe1xyXG5cclxuICAgICAgICBoZWFkZXJzOiB7XHJcblxyXG4gICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnVzZXJzX3Bob25lX2JveCAnKS5vbignY2xpY2snLCAnYnV0dG9uLnJlbW92ZV9waG9uZV9idG4nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgcGhvbmVJZCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGhvbmVJZCk7XHJcbiAgICAgICAgdmFyIHVzZXJJZCA9ICQoJy51c2VySWQnKS52YWwoKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDogJy9yZW1vdmVQaG9uZXMnLFxyXG4gICAgICAgICAgICBkYXRhOiB7cGhvbmVJZDogcGhvbmVJZH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSk7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNvdW50ID0gJCgnLmFkbWluX3Bob25lX2lucHV0JykubGVuZ3RoO1xyXG4gICAgJCgnI2FkZF9uZXdfcGhvbmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBpbnB1dCA9ICc8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgbmV3X3VzZXJzX3Bob25lIGNsZWFyZml4XCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGQtaW5saW5lLWJsb2NrIHJlbW92ZV9waG9uZV9idG4gcG9zaXRpb24tYWJzb2x1dGVcIiBkYXRhLXRva2VuPVwie3sgY3NyZl90b2tlbigpIH19XCI+IDxpIGNsYXNzPVwiZmEgZmEtbWludXNcIj48L2k+IDwvYnV0dG9uPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZyBkLWlubGluZS1ibG9jayAgcHVsbC1yaWdodCBhZG1pbl9waG9uZV9pbnB1dCBwb3NpdGlvbi1yZWxhdGl2ZVwiIGlkPVwicGhvbmUnICsgY291bnQgKyAnXCIgcGxhY2Vob2xkZXIgPSBcItCy0LLQtdC00LjRgtC1INC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0Lkg0YLQtdC70LXRhNC+0L1cIiBuYW1lPVwibmV3cGhvbmUnICsgY291bnQgKyAnXCI+IDwvZGl2Pic7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdoaWxlIChjb3VudCA8IDMpIHtcclxuICAgICAgICAgICAgJCgnLnVzZXJzX3Bob25lX2JveCcpLmFwcGVuZChpbnB1dCk7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09IDMpIHtcclxuICAgICAgICAgICAgICAgICQoJyNhZGRfbmV3X3Bob25lJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy51c2Vyc19waG9uZV9ib3gnKS5vbignY2xpY2snLCAnYnV0dG9uLnJlbW92ZV9waG9uZV9idG4nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIGlmIChjb3VudCA8IDMpIHtcclxuICAgICAgICAgICAgJCgnI2FkZF9uZXdfcGhvbmUnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT0gQ3JvcCBqcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkLmFqYXhTZXR1cCh7XHJcblxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuXHJcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgIC8vINC+0YLRgdC70LXQtNC40YLRjCDQvdCw0LbQsNGC0LjQtSDQuCDQstGL0LHQvtGAINGE0LDQudC70LBcclxuICAgICQoJyNpbWdBZGRbbmFtZT1cImltZ1wiXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlJyk7XHJcbiAgICAgICAgdmFyIGZpbGVzID0gJCh0aGlzKVswXS5maWxlcztcclxuICAgICAgICB2YXIgZmlsZSA9IGZpbGVzWzBdO1xyXG4gICAgICAgIHZhciB1c2VybmFtZSA9ICQoJyNuZXdVc2VybmFtZScpLnZhbCgpO1xyXG4gICAgICAgICQoJyNpbWFnZScpLmF0dHIoJ3NyYycsIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtcclxuICAgICAgICB2YXIgY3JvcHBlciA9IG5ldyBDcm9wcGVyKGltYWdlLCB7XHJcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiAxIC8gMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNyb3BwZXIuY3JvcCgpO1xyXG5cclxuICAgICAgICAkKCcjc2F2ZUltZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY3JvcHBlci5nZXRDcm9wcGVkQ2FudmFzKCkudG9CbG9iKGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10LTQsNC10Lwg0LIg0L/QvtGB0YIg0LjQvNGPINGE0LDQudC70LAg0Lgg0LjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjcm9wcGVkSW1hZ2UnLCBmaWxlKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcm5hbWUnLCB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvdXNlckxvZ28nLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtb2RhbCcpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vPT09PT09PT09PT09PT09PSAgT3BlbiBNb2RhbCBXaW5kb3dzXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5jdXN0b21fZmllbGRfYWRkX2J0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGl0ZW0gIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgaXRlbSA9PT0gJ29wZXJhdGlvbic6XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWxPcGVyYXRpb24nKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgaXRlbSA9PT0gJ3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsVHlwZScpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBpdGVtID09PSAncGxhY2UnOlxyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsUGxhY2UnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjb3BlblVzZXJNZXNzYWdlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNteU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnNlbmRfbWVzc2FnZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcjbXlNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KVxyXG59KTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PSBBZGRpbmcgb2JqZWN0IGltYWdlcyA9PT09PT09PT09PT09PVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlRmlsZVNlbGVjdChldnQpIHtcclxuICAgICAgICB2YXIgZmlsZXMgPSBldnQudGFyZ2V0LmZpbGVzOyAvLyBGaWxlTGlzdCBvYmplY3RcclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIEZpbGVMaXN0IGFuZCByZW5kZXIgaW1hZ2UgZmlsZXMgYXMgdGh1bWJuYWlscy5cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZjsgZiA9IGZpbGVzW2ldOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gT25seSBwcm9jZXNzIGltYWdlIGZpbGVzLlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlc1tpXSk7XHJcbiAgICAgICAgICAgIGlmICghZi50eXBlLm1hdGNoKCdpbWFnZS4qJykpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW1hZ2Ugb25seSBwbGVhc2UuLi4uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAvLyBDbG9zdXJlIHRvIGNhcHR1cmUgdGhlIGZpbGUgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZnVuY3Rpb24gKHRoZUZpbGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlciB0aHVtYm5haWwuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImNvbC0zIG1iLTMgcG9zaXRpb24tcmVsYXRpdmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IFsnPGJ1dHRvbiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIGJ0biBidG4tZGFuZ2VyIHJlbW92ZV9vYmplY3RfaW1nXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiMFwiPjxpIGNsYXNzPVwiZmEgZmEtbWludXMgIFwiPjwvaT48L2J1dHRvbj48aW1nIGNsYXNzPVwiaW1nX3Jlc3BvbnNpdmVcIiB0aXRsZT1cIicsIGVzY2FwZSh0aGVGaWxlLm5hbWUpLCAnXCIgc3JjPVwiJywgZS50YXJnZXQucmVzdWx0LCAnXCIgLz4nXS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0TXVsdGknKS5pbnNlcnRCZWZvcmUoc3BhbiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KShmKTtcclxuICAgICAgICAgICAgLy8gUmVhZCBpbiB0aGUgaW1hZ2UgZmlsZSBhcyBhIGRhdGEgVVJMLlxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlTXVsdGknKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlTXVsdGknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVGaWxlU2VsZWN0LCBmYWxzZSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT0gUmVtb3ZlIG9iamVjdHMgaW1hZ2UgPT09PT09PT09PT09XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmFqYXhTZXR1cCh7XHJcblxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuXHJcbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICAgICQoJyNvdXRwdXRNdWx0aScpLm9uKCdjbGljaycsICdidXR0b24ucmVtb3ZlX29iamVjdF9pbWcnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBpbWFnZUlkID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZUlkKTtcclxuICAgICAgICBpZiAoaW1hZ2VJZCA9PSAwKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGltYWdlSWQgIT09IDApIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5mYWRlT3V0KCk7XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3JlbW92ZUltYWdlcycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7aW1hZ2VJZDogaW1hZ2VJZH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSk7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy89PT09PT09PT09PT09PT09IEFqYXggcGFnaW5hdGlvbiA9PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICQuYWpheFNldHVwKHtcclxuLy9cclxuLy8gICAgICAgICBoZWFkZXJzOiB7XHJcbi8vXHJcbi8vICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcbi8vXHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgfSk7XHJcbi8vICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm9iamVjdHMtcGFnaW5hdGlvbiBhJywgZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vXHJcbi8vICAgICAgICAgdmFyIHBhZ2VSYXcgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKS5zcGxpdCgnPycpO1xyXG4vLyAgICAgICAgIHBhZ2VSYXcuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4vLyAgICAgICAgICAgICBpZiAoaXRlbS5zZWFyY2goJy8ocGFnZT0pLycpKSB7XHJcbi8vICAgICAgICAgICAgICAgICBwYWdlID0gaXRlbS5zcGxpdCgncGFnZT0nKVsxXTtcclxuLy8gICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7XHJcbi8vXHJcbi8vICAgICAgICAgdmFyIG9iamVjdE9wZXJhdGlvbiA9ICRfR0VUKClbJ29iamVjdF9vcGVyYXRpb25faWQnXSxcclxuLy8gICAgICAgICAgICAgb2JqZWN0VHlwZSA9ICRfR0VUKClbJ29iamVjdF90eXBlX2lkJ10sXHJcbi8vICAgICAgICAgICAgIG9iamVjdFBsYWNlID0gJF9HRVQoKVsnb2JqZWN0X3BsYWNlX2lkJ10gO1xyXG4vL1xyXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvYmplY3RPcGVyYXRpb249JyArIG9iamVjdE9wZXJhdGlvbiwgJ29iamVjdFBsYWNlPScgKyBvYmplY3RQbGFjZSwgJ29iamVjdFR5cGU9JyArIG9iamVjdFR5cGUpO1xyXG4vL1xyXG4vLyAgICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxyXG4vLyAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICB1cmw6ICcvb2JqZWN0cz8nKyAob2JqZWN0T3BlcmF0aW9uICE9PSB1bmRlZmluZWQgPyAnb2JqZWN0X29wZXJhdGlvbl9pZD0nICsgb2JqZWN0T3BlcmF0aW9uIDogJycpICtcclxuLy8gICAgICAgICAgICAgKG9iamVjdFR5cGUgIT09IHVuZGVmaW5lZCA/ICcmb2JqZWN0X3R5cGVfaWQ9JyArIG9iamVjdFR5cGUgOiAnJykgK1xyXG4vLyAgICAgICAgICAgICAob2JqZWN0UGxhY2UgIT09IHVuZGVmaW5lZCA/ICcmb2JqZWN0X3BsYWNlX2lkPScgKyBvYmplY3RQbGFjZSA6ICcnKSArICcmcGFnZT0nICsgcGFnZVxyXG4vLyAgICAgICAgICAgICAvLyB1cmw6Jy9vYmplY3RzP3BhZ2U9JytwYWdlXHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4vLyAgICAgICAgICAgICAkKCdib2R5JykuaHRtbChkYXRhKTtcclxuLy8gICAgICAgICAgICAgJCgnLm9iamVjdHMtcGFnaW5hdGlvbiBhJykub2ZmKCdjbGljaycpO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vXHJcbi8vXHJcbi8vICAgICB9KTtcclxuLy9cclxuLy8gICAgIC8vIEdldCBhbGwgZ2V0IHBhcmFtZXRlcnMgZnJvbSBVUkxcclxuLy8gICAgIGZ1bmN0aW9uICRfR0VUKHBhcmFtKSB7XHJcbi8vICAgICAgICAgdmFyIHZhcnMgPSB7fTtcclxuLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKGxvY2F0aW9uLmhhc2gsICcnKS5yZXBsYWNlKFxyXG4vLyAgICAgICAgICAgICAvWz8mXSsoW149Jl0rKT0/KFteJl0qKT8vZ2ksIC8vIHJlZ2V4cFxyXG4vLyAgICAgICAgICAgICBmdW5jdGlvbiAobSwga2V5LCB2YWx1ZSkgeyAvLyBjYWxsYmFja1xyXG4vLyAgICAgICAgICAgICAgICAgdmFyc1trZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogJyc7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICApO1xyXG4vL1xyXG4vLyAgICAgICAgIGlmIChwYXJhbSkge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFyc1twYXJhbV0gPyB2YXJzW3BhcmFtXSA6IG51bGw7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIHJldHVybiB2YXJzO1xyXG4vLyAgICAgfVxyXG4vLyB9KTtcclxuXHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09IEFqYXggc3RvcmUgdXNlciBtZXNzYWdlID09PT09PT09PT1cclxuXHJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICQuYWpheFNldHVwKHtcclxuLy9cclxuLy8gICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXHJcbi8vICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgfSk7XHJcbi8vICAgICAkKCcjc3RvcmVNZXNzYWdlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICAgdmFyIHBob25lID0gJCgnI3VzZXJwaG9uZScpLnZhbCgpO1xyXG4vLyAgICAgICAgIHZhciBuYW1lID0gJCgnI25hbWUnKS52YWwoKTtcclxuLy8gICAgICAgICB2YXIgZXh0cmF0ZXh0ID0gJCgnI2V4dHJhdGV4dCcpLnZhbCgpO1xyXG4vLyAgICAgICAgIHZhciB0eXBlT2JqZWN0ID0gJCgnI3R5cGVPYmplY3QnKS52YWwoKTtcclxuLy8gICAgICAgICB2YXIgdHlwZU9wZXJhdGlvbiA9ICQoJyN0eXBlT3BlcmF0aW9uJykudmFsKCk7XHJcbi8vICAgICAgICAgdmFyIGVtYWlsID0gJCgnI2VtYWlsJykudmFsKCk7XHJcbi8vXHJcbi8vICAgICAgICAgaWYgKHBob25lICE9PSAnJykge1xyXG4vLyAgICAgICAgICAgICAkKCcucmVxdWlyZWRfZmllbGQnKS5yZW1vdmUoKTtcclxuLy9cclxuLy8gICAgICAgICAgICAgJC5hamF4KHtcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuLy8gICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIHVybDogJy9zdG9yZU1lc3NhZ2UnLFxyXG4vLyAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHBob25lLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHR5cGVPYmplY3Q6IHR5cGVPYmplY3QsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdHlwZU9wZXJhdGlvbjogdHlwZU9wZXJhdGlvbixcclxuLy8gICAgICAgICAgICAgICAgICAgICBleHRyYXRleHQ6IGV4dHJhdGV4dCxcclxuLy8gICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWxcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICQoJy5hbGVydC1zdWNjZXNzIC5zdWNjZXNzX21lc3NhZ2UnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAkKCcuc3VjY2Vzc19tZXNzYWdlJykuaHRtbChkYXRhKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgfSlcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAkKCcucmVxdWlyZWRfZmllbGQnKS5odG1sKCfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjyEnKVxyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgIH0pXHJcbi8vIH0pO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09IEJsdWVJbXAgSW1hZ2UgR2FsbGVyeSA9PT09PT09PT09PT09XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcucm93Jykub24oJ2NsaWNrJywgJyNsaW5rcycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCxcclxuICAgICAgICAgICAgbGluayA9IHRhcmdldC5zcmMgPyB0YXJnZXQucGFyZW50Tm9kZSA6IHRhcmdldCxcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHtpbmRleDogbGluaywgZXZlbnQ6IGV2ZW50fSxcclxuICAgICAgICAgICAgbGlua3MgPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJyk7XHJcbiAgICAgICAgYmx1ZWltcC5HYWxsZXJ5KGxpbmtzLCBvcHRpb25zKTtcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21haW4uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9