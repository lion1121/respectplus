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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14);
module.exports = __webpack_require__(15);


/***/ }),

/***/ 14:
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

/***/ 15:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGVjZGE4ZTdiYWE3Y2I1M2Q2NGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInN0aWNreU5hdlRvcCIsImhlaWdodCIsInN0aWNreU5hdiIsInNjcm9sbFRvcCIsIndpbmRvdyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjc3MiLCJzY3JvbGwiLCJzbGljayIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJkb3RzIiwiYXBwZW5kQXJyb3dzIiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2xpY2siLCJjaGlsZHJlbiIsImhhc0NsYXNzIiwidG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJuZXh0IiwiYWpheFNldHVwIiwiaGVhZGVycyIsImF0dHIiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBob25lSWQiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwidXNlcklkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsImNvdW50IiwibGVuZ3RoIiwiaW5wdXQiLCJhcHBlbmQiLCJwYXJlbnQiLCJyZW1vdmUiLCJpbWFnZSIsImdldEVsZW1lbnRCeUlkIiwiZmlsZXMiLCJmaWxlIiwidXNlcm5hbWUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjcm9wcGVyIiwiQ3JvcHBlciIsImFzcGVjdFJhdGlvIiwiY3JvcCIsImdldENyb3BwZWRDYW52YXMiLCJ0b0Jsb2IiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicHJvY2Vzc0RhdGEiLCJjb250ZW50VHlwZSIsImVycm9yIiwiZXJyIiwiaXRlbSIsIm1vZGFsIiwiaGFuZGxlRmlsZVNlbGVjdCIsImV2dCIsInRhcmdldCIsImkiLCJmIiwibWF0Y2giLCJhbGVydCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJ0aGVGaWxlIiwic3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJlc2NhcGUiLCJuYW1lIiwicmVzdWx0Iiwiam9pbiIsImluc2VydEJlZm9yZSIsInJlYWRBc0RhdGFVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1hZ2VJZCIsImZhZGVPdXQiLCJldmVudCIsInNyY0VsZW1lbnQiLCJsaW5rIiwic3JjIiwicGFyZW50Tm9kZSIsIm9wdGlvbnMiLCJpbmRleCIsImxpbmtzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJibHVlaW1wIiwiR2FsbGVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7O0FBR0FBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLFFBQUlDLGVBQWVILEVBQUUsYUFBRixFQUFpQkksTUFBakIsRUFBbkI7QUFDQSxRQUFJQyxZQUFZLFNBQVpBLFNBQVksR0FBWTtBQUN4QixZQUFJQyxZQUFZTixFQUFFTyxNQUFGLEVBQVVELFNBQVYsRUFBaEI7QUFDQSxZQUFJQSxZQUFZSCxZ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QWIsRUFBc0IsUUFBdEIsRUFBZ0MsVUFBVWdFLEtBQVYsRUFBaUI7QUFDN0NBLGdCQUFRQSxTQUFTMUYsT0FBTzBGLEtBQXhCO0FBQ0EsWUFBSXRCLFNBQVNzQixNQUFNdEIsTUFBTixJQUFnQnNCLE1BQU1DLFVBQW5DO0FBQUEsWUFDSUMsT0FBT3hCLE9BQU95QixHQUFQLEdBQWF6QixPQUFPMEIsVUFBcEIsR0FBaUMxQixNQUQ1QztBQUFBLFlBRUkyQixVQUFVLEVBQUNDLE9BQU9KLElBQVIsRUFBY0YsT0FBT0EsS0FBckIsRUFGZDtBQUFBLFlBR0lPLFFBQVEsS0FBS0Msb0JBQUwsQ0FBMEIsR0FBMUIsQ0FIWjtBQUlBQyxnQkFBUUMsT0FBUixDQUFnQkgsS0FBaEIsRUFBdUJGLE9BQXZCO0FBQ0gsS0FQRDtBQVFILENBVEQ7O0FBV0Esd0Q7Ozs7Ozs7QUNyZUEseUMiLCJmaWxlIjoiXFxqc1xcbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkZWNkYThlN2JhYTdjYjUzZDY0ZCIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5INCh0LXRgNCz0LXQuSBvbiAwOS4wMS4yMDE4LlxyXG4gKi9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0aWNreU5hdlRvcCA9ICQoJyNzdGlja3lfYm94JykuaGVpZ2h0KCk7XHJcbiAgICB2YXIgc3RpY2t5TmF2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+IHN0aWNreU5hdlRvcCkge1xyXG5cclxuICAgICAgICAgICAgJCgnI3N0aWNreV9ib3gnKS5hZGRDbGFzcygnc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICQoJyNsb2dvX2JveCcpLmFkZENsYXNzKCdzdGlja3lfaGVhZGVyX2xvZ29fYm94JykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9sb2dvX2JveCcpO1xyXG4gICAgICAgICAgICAkKCcjY3VzdG9tX2hlYXRlcl9mb3JtJykuYWRkQ2xhc3MoJ2N1c3RvbV9oZWF0ZXJfZm9ybV9zdGlja3knKTtcclxuICAgICAgICAgICAgJCgnLmZpcnN0X3NlY3Rpb24nKS5jc3MoJ21hcmdpbi10b3AnLCAnNjRweCcpO1xyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI3N0aWNreV9ib3gnKS5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICQoJyNsb2dvX2JveCcpLmFkZENsYXNzKCdoZWFkZXJfbG9nb19ib3gnKS5yZW1vdmVDbGFzcygnc3RpY2t5X2hlYWRlcl9sb2dvX2JveCcpO1xyXG4gICAgICAgICAgICAkKCcuY3VzdG9tX2hlYXRlcl9mb3JtJykuY3NzKCdtYXJnaW4nLCAnMTFweCAwIDE2cHggMCcpO1xyXG4gICAgICAgICAgICAkKCcubWVnYV9tZW51X2hvdmVyX2xpbmU6aG92ZXI6YWZ0ZXInKS5jc3MoJ2JvdHRvbScsICcwJyk7XHJcbiAgICAgICAgICAgICQoJy5maXJzdF9zZWN0aW9uJykuY3NzKCdtYXJnaW4tdG9wJywgJzAnKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzdGlja3lOYXYoKTtcclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdGlja3lOYXYoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoJy5sYXN0X3Byb3BlcnR5X3NsaWRlcicpLnNsaWNrKHtcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICBwcmV2QXJyb3c6ICQoJy5sYXN0X3Byb3BlcnR5X3ByZXYnKSxcclxuICAgIG5leHRBcnJvdzogJCgnLmxhc3RfcHJvcGVydHlfbmV4dCcpLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhcHBlbmRBcnJvd3M6IFwiLmFycm93c19ib3hcIixcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxyXG4gICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxyXG4gICAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcclxuICAgIF1cclxufSk7XHJcbiQoJy51cmdlbnRfc2FpbCcpLnNsaWNrKHtcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICBwcmV2QXJyb3c6ICQoJy51cmdlbnRfYXJyb3dfcHJldicpLFxyXG4gICAgbmV4dEFycm93OiAkKCcudXJnZW50X2Fycm93X25leHQnKSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgYXBwZW5kQXJyb3dzOiBcIi5hcnJvd3NfYm94XCIsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcclxuICAgICAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcclxuICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XHJcbiAgICBdXHJcbn0pO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubGlzdF9ib3gnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuY2hpbGRyZW4oJy5saXN0X3N3aXRjaGVyJykuaGFzQ2xhc3MoJ2ZhLW1pbnVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmxpc3Rfc3dpdGNoZXInKS5yZW1vdmVDbGFzcygnZmEtbWludXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmxpc3Rfc3dpdGNoZXInKS5hZGRDbGFzcygnZmEtcGx1cycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5saXN0X3N3aXRjaGVyJykuYWRkQ2xhc3MoJ2ZhLW1pbnVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5saXN0X3N3aXRjaGVyJykucmVtb3ZlQ2xhc3MoJ2ZhLXBsdXMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5saXN0X2FkdmFudGFnZScpLnRvZ2dsZSgnc2xvdycpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5tZW51X2J0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjaGFuZ2UnKTtcclxuICAgICAgICAkKCcubWFpbl9uYXYnKS50b2dnbGVDbGFzcygnZGlzcGxheV9mbGV4Jyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuYWRtaW5fbGlzdF9saW5rJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5hZG1pbl9zdWJtZW51JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2N1cnJlbnQnKVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQuYWpheFNldHVwKHtcclxuXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG5cclxuICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy51c2Vyc19waG9uZV9ib3ggJykub24oJ2NsaWNrJywgJ2J1dHRvbi5yZW1vdmVfcGhvbmVfYnRuJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHBob25lSWQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBob25lSWQpO1xyXG4gICAgICAgIHZhciB1c2VySWQgPSAkKCcudXNlcklkJykudmFsKCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmw6ICcvcmVtb3ZlUGhvbmVzJyxcclxuICAgICAgICAgICAgZGF0YToge3Bob25lSWQ6IHBob25lSWR9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjb3VudCA9ICQoJy5hZG1pbl9waG9uZV9pbnB1dCcpLmxlbmd0aDtcclxuICAgICQoJyNhZGRfbmV3X3Bob25lJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgaW5wdXQgPSAnPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIG5ld191c2Vyc19waG9uZSBjbGVhcmZpeFwiPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBkLWlubGluZS1ibG9jayByZW1vdmVfcGhvbmVfYnRuIHBvc2l0aW9uLWFic29sdXRlXCIgZGF0YS10b2tlbj1cInt7IGNzcmZfdG9rZW4oKSB9fVwiPiA8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPiA8L2J1dHRvbj48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgZC1pbmxpbmUtYmxvY2sgIHB1bGwtcmlnaHQgYWRtaW5fcGhvbmVfaW5wdXQgcG9zaXRpb24tcmVsYXRpdmVcIiBpZD1cInBob25lJyArIGNvdW50ICsgJ1wiIHBsYWNlaG9sZGVyID0gXCLQstCy0LXQtNC40YLQtSDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C5INGC0LXQu9C10YTQvtC9XCIgbmFtZT1cIm5ld3Bob25lJyArIGNvdW50ICsgJ1wiPiA8L2Rpdj4nO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB3aGlsZSAoY291bnQgPCAzKSB7XHJcbiAgICAgICAgICAgICQoJy51c2Vyc19waG9uZV9ib3gnKS5hcHBlbmQoaW5wdXQpO1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjYWRkX25ld19waG9uZScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcudXNlcnNfcGhvbmVfYm94Jykub24oJ2NsaWNrJywgJ2J1dHRvbi5yZW1vdmVfcGhvbmVfYnRuJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICBpZiAoY291bnQgPCAzKSB7XHJcbiAgICAgICAgICAgICQoJyNhZGRfbmV3X3Bob25lJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vPT09PT09PT09PT09PT09IENyb3AganMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJC5hamF4U2V0dXAoe1xyXG5cclxuICAgICAgICBoZWFkZXJzOiB7XHJcblxyXG4gICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICAvLyDQvtGC0YHQu9C10LTQuNGC0Ywg0L3QsNC20LDRgtC40LUg0Lgg0LLRi9Cx0L7RgCDRhNCw0LnQu9CwXHJcbiAgICAkKCcjaW1nQWRkW25hbWU9XCJpbWdcIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZScpO1xyXG4gICAgICAgIHZhciBmaWxlcyA9ICQodGhpcylbMF0uZmlsZXM7XHJcbiAgICAgICAgdmFyIGZpbGUgPSBmaWxlc1swXTtcclxuICAgICAgICB2YXIgdXNlcm5hbWUgPSAkKCcjbmV3VXNlcm5hbWUnKS52YWwoKTtcclxuICAgICAgICAkKCcjaW1hZ2UnKS5hdHRyKCdzcmMnLCB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XHJcbiAgICAgICAgdmFyIGNyb3BwZXIgPSBuZXcgQ3JvcHBlcihpbWFnZSwge1xyXG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogMSAvIDFcclxuICAgICAgICB9KTtcclxuICAgICAgICBjcm9wcGVyLmNyb3AoKTtcclxuXHJcbiAgICAgICAgJCgnI3NhdmVJbWcnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNyb3BwZXIuZ2V0Q3JvcHBlZENhbnZhcygpLnRvQmxvYihmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC00LDQtdC8INCyINC/0L7RgdGCINC40LzRjyDRhNCw0LnQu9CwINC4INC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY3JvcHBlZEltYWdlJywgZmlsZSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3VzZXJMb2dvJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbW9kYWwnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLz09PT09PT09PT09PT09PT0gIE9wZW4gTW9kYWwgV2luZG93c1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuY3VzdG9tX2ZpZWxkX2FkZF9idG4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBpdGVtID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChpdGVtICE9PSAnJykge1xyXG4gICAgICAgICAgICBjYXNlIGl0ZW0gPT09ICdvcGVyYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsT3BlcmF0aW9uJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGl0ZW0gPT09ICd0eXBlJzpcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbFR5cGUnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgaXRlbSA9PT0gJ3BsYWNlJzpcclxuICAgICAgICAgICAgICAgICQoJyNtb2RhbFBsYWNlJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI29wZW5Vc2VyTWVzc2FnZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcjbXlNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5zZW5kX21lc3NhZ2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnI215TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgfSlcclxufSk7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT0gQWRkaW5nIG9iamVjdCBpbWFnZXMgPT09PT09PT09PT09PT1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZpbGVTZWxlY3QoZXZ0KSB7XHJcbiAgICAgICAgdmFyIGZpbGVzID0gZXZ0LnRhcmdldC5maWxlczsgLy8gRmlsZUxpc3Qgb2JqZWN0XHJcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBGaWxlTGlzdCBhbmQgcmVuZGVyIGltYWdlIGZpbGVzIGFzIHRodW1ibmFpbHMuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGY7IGYgPSBmaWxlc1tpXTsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgcHJvY2VzcyBpbWFnZSBmaWxlcy5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZXNbaV0pO1xyXG4gICAgICAgICAgICBpZiAoIWYudHlwZS5tYXRjaCgnaW1hZ2UuKicpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkltYWdlIG9ubHkgcGxlYXNlLi4uLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgLy8gQ2xvc3VyZSB0byBjYXB0dXJlIHRoZSBmaWxlIGluZm9ybWF0aW9uLlxyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGZ1bmN0aW9uICh0aGVGaWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZW5kZXIgdGh1bWJuYWlsLlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4uY2xhc3NOYW1lID0gXCJjb2wtMyBtYi0zIHBvc2l0aW9uLXJlbGF0aXZlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBbJzxidXR0b24gY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSBidG4gYnRuLWRhbmdlciByZW1vdmVfb2JqZWN0X2ltZ1wiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIjBcIj48aSBjbGFzcz1cImZhIGZhLW1pbnVzICBcIj48L2k+PC9idXR0b24+PGltZyBjbGFzcz1cImltZ19yZXNwb25zaXZlXCIgdGl0bGU9XCInLCBlc2NhcGUodGhlRmlsZS5uYW1lKSwgJ1wiIHNyYz1cIicsIGUudGFyZ2V0LnJlc3VsdCwgJ1wiIC8+J10uam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dE11bHRpJykuaW5zZXJ0QmVmb3JlKHNwYW4sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkoZik7XHJcbiAgICAgICAgICAgIC8vIFJlYWQgaW4gdGhlIGltYWdlIGZpbGUgYXMgYSBkYXRhIFVSTC5cclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZU11bHRpJykgIT09IG51bGwpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZU11bHRpJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlRmlsZVNlbGVjdCwgZmFsc2UpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09IFJlbW92ZSBvYmplY3RzIGltYWdlID09PT09PT09PT09PVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJC5hamF4U2V0dXAoe1xyXG5cclxuICAgICAgICBoZWFkZXJzOiB7XHJcblxyXG4gICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICAkKCcjb3V0cHV0TXVsdGknKS5vbignY2xpY2snLCAnYnV0dG9uLnJlbW92ZV9vYmplY3RfaW1nJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgaW1hZ2VJZCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2VJZCk7XHJcbiAgICAgICAgaWYgKGltYWdlSWQgPT0gMCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZhZGVPdXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbWFnZUlkICE9PSAwKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmFkZU91dCgpO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDogJy9yZW1vdmVJbWFnZXMnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge2ltYWdlSWQ6IGltYWdlSWR9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pO1xyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vPT09PT09PT09PT09PT09PSBBamF4IHBhZ2luYXRpb24gPT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAkLmFqYXhTZXR1cCh7XHJcbi8vXHJcbi8vICAgICAgICAgaGVhZGVyczoge1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxyXG4vL1xyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgIH0pO1xyXG4vLyAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5vYmplY3RzLXBhZ2luYXRpb24gYScsIGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vL1xyXG4vLyAgICAgICAgIHZhciBwYWdlUmF3ID0gJCh0aGlzKS5hdHRyKCdocmVmJykuc3BsaXQoJz8nKTtcclxuLy8gICAgICAgICBwYWdlUmF3LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuLy8gICAgICAgICAgICAgaWYgKGl0ZW0uc2VhcmNoKCcvKHBhZ2U9KS8nKSkge1xyXG4vLyAgICAgICAgICAgICAgICAgcGFnZSA9IGl0ZW0uc3BsaXQoJ3BhZ2U9JylbMV07XHJcbi8vICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYWdlKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pO1xyXG4vL1xyXG4vLyAgICAgICAgIHZhciBvYmplY3RPcGVyYXRpb24gPSAkX0dFVCgpWydvYmplY3Rfb3BlcmF0aW9uX2lkJ10sXHJcbi8vICAgICAgICAgICAgIG9iamVjdFR5cGUgPSAkX0dFVCgpWydvYmplY3RfdHlwZV9pZCddLFxyXG4vLyAgICAgICAgICAgICBvYmplY3RQbGFjZSA9ICRfR0VUKClbJ29iamVjdF9wbGFjZV9pZCddIDtcclxuLy9cclxuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZygnb2JqZWN0T3BlcmF0aW9uPScgKyBvYmplY3RPcGVyYXRpb24sICdvYmplY3RQbGFjZT0nICsgb2JqZWN0UGxhY2UsICdvYmplY3RUeXBlPScgKyBvYmplY3RUeXBlKTtcclxuLy9cclxuLy8gICAgICAgICAkLmFqYXgoe1xyXG4vLyAgICAgICAgICAgICB0eXBlOiAnR0VUJyxcclxuLy8gICAgICAgICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgdXJsOiAnL29iamVjdHM/JysgKG9iamVjdE9wZXJhdGlvbiAhPT0gdW5kZWZpbmVkID8gJ29iamVjdF9vcGVyYXRpb25faWQ9JyArIG9iamVjdE9wZXJhdGlvbiA6ICcnKSArXHJcbi8vICAgICAgICAgICAgIChvYmplY3RUeXBlICE9PSB1bmRlZmluZWQgPyAnJm9iamVjdF90eXBlX2lkPScgKyBvYmplY3RUeXBlIDogJycpICtcclxuLy8gICAgICAgICAgICAgKG9iamVjdFBsYWNlICE9PSB1bmRlZmluZWQgPyAnJm9iamVjdF9wbGFjZV9pZD0nICsgb2JqZWN0UGxhY2UgOiAnJykgKyAnJnBhZ2U9JyArIHBhZ2VcclxuLy8gICAgICAgICAgICAgLy8gdXJsOicvb2JqZWN0cz9wYWdlPScrcGFnZVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcclxuLy8gICAgICAgICAgICAgJCgnYm9keScpLmh0bWwoZGF0YSk7XHJcbi8vICAgICAgICAgICAgICQoJy5vYmplY3RzLXBhZ2luYXRpb24gYScpLm9mZignY2xpY2snKTtcclxuLy8gICAgICAgICB9KVxyXG4vL1xyXG4vL1xyXG4vLyAgICAgfSk7XHJcbi8vXHJcbi8vICAgICAvLyBHZXQgYWxsIGdldCBwYXJhbWV0ZXJzIGZyb20gVVJMXHJcbi8vICAgICBmdW5jdGlvbiAkX0dFVChwYXJhbSkge1xyXG4vLyAgICAgICAgIHZhciB2YXJzID0ge307XHJcbi8vICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShsb2NhdGlvbi5oYXNoLCAnJykucmVwbGFjZShcclxuLy8gICAgICAgICAgICAgL1s/Jl0rKFtePSZdKyk9PyhbXiZdKik/L2dpLCAvLyByZWdleHBcclxuLy8gICAgICAgICAgICAgZnVuY3Rpb24gKG0sIGtleSwgdmFsdWUpIHsgLy8gY2FsbGJhY2tcclxuLy8gICAgICAgICAgICAgICAgIHZhcnNba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6ICcnO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgKTtcclxuLy9cclxuLy8gICAgICAgICBpZiAocGFyYW0pIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHZhcnNbcGFyYW1dID8gdmFyc1twYXJhbV0gOiBudWxsO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICByZXR1cm4gdmFycztcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcblxyXG5cclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PSBBamF4IHN0b3JlIHVzZXIgbWVzc2FnZSA9PT09PT09PT09XHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAkLmFqYXhTZXR1cCh7XHJcbi8vXHJcbi8vICAgICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxyXG4vLyAgICAgICAgIH1cclxuLy9cclxuLy8gICAgIH0pO1xyXG4vLyAgICAgJCgnI3N0b3JlTWVzc2FnZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgIHZhciBwaG9uZSA9ICQoJyN1c2VycGhvbmUnKS52YWwoKTtcclxuLy8gICAgICAgICB2YXIgbmFtZSA9ICQoJyNuYW1lJykudmFsKCk7XHJcbi8vICAgICAgICAgdmFyIGV4dHJhdGV4dCA9ICQoJyNleHRyYXRleHQnKS52YWwoKTtcclxuLy8gICAgICAgICB2YXIgdHlwZU9iamVjdCA9ICQoJyN0eXBlT2JqZWN0JykudmFsKCk7XHJcbi8vICAgICAgICAgdmFyIHR5cGVPcGVyYXRpb24gPSAkKCcjdHlwZU9wZXJhdGlvbicpLnZhbCgpO1xyXG4vLyAgICAgICAgIHZhciBlbWFpbCA9ICQoJyNlbWFpbCcpLnZhbCgpO1xyXG4vL1xyXG4vLyAgICAgICAgIGlmIChwaG9uZSAhPT0gJycpIHtcclxuLy8gICAgICAgICAgICAgJCgnLnJlcXVpcmVkX2ZpZWxkJykucmVtb3ZlKCk7XHJcbi8vXHJcbi8vICAgICAgICAgICAgICQuYWpheCh7XHJcbi8vICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICB1cmw6ICcvc3RvcmVNZXNzYWdlJyxcclxuLy8gICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBob25lOiBwaG9uZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0eXBlT2JqZWN0OiB0eXBlT2JqZWN0LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHR5cGVPcGVyYXRpb246IHR5cGVPcGVyYXRpb24sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZXh0cmF0ZXh0OiBleHRyYXRleHQsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAkKCcuYWxlcnQtc3VjY2VzcyAuc3VjY2Vzc19tZXNzYWdlJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgJCgnLnN1Y2Nlc3NfbWVzc2FnZScpLmh0bWwoZGF0YSk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgJCgnLnJlcXVpcmVkX2ZpZWxkJykuaHRtbCgn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8hJylcclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICB9KVxyXG4vLyB9KTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PSBCbHVlSW1wIEltYWdlIEdhbGxlcnkgPT09PT09PT09PT09PVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLnJvdycpLm9uKCdjbGljaycsICcjbGlua3MnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQsXHJcbiAgICAgICAgICAgIGxpbmsgPSB0YXJnZXQuc3JjID8gdGFyZ2V0LnBhcmVudE5vZGUgOiB0YXJnZXQsXHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7aW5kZXg6IGxpbmssIGV2ZW50OiBldmVudH0sXHJcbiAgICAgICAgICAgIGxpbmtzID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xyXG4gICAgICAgIGJsdWVpbXAuR2FsbGVyeShsaW5rcywgb3B0aW9ucyk7XHJcbiAgICB9KVxyXG59KTtcclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tYWluLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==