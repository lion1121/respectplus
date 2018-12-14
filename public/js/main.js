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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
module.exports = __webpack_require__(14);


/***/ }),

/***/ 13:
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

/***/ 14:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTU2NjIxZGExN2ZiNGZmZTgxNWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzcz82ZDEwIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwic3RpY2t5TmF2VG9wIiwiaGVpZ2h0Iiwic3RpY2t5TmF2Iiwic2Nyb2xsVG9wIiwid2luZG93IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNzcyIsInNjcm9sbCIsInNsaWNrIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImRvdHMiLCJhcHBlbmRBcnJvd3MiLCJzbGlkZXNUb1Njcm9sbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJjbGljayIsImNoaWxkcmVuIiwiaGFzQ2xhc3MiLCJ0b2dnbGUiLCJ0b2dnbGVDbGFzcyIsIm5leHQiLCJhamF4U2V0dXAiLCJoZWFkZXJzIiwiYXR0ciIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGhvbmVJZCIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySWQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwiY291bnQiLCJsZW5ndGgiLCJpbnB1dCIsImFwcGVuZCIsInBhcmVudCIsInJlbW92ZSIsImltYWdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJmaWxlcyIsImZpbGUiLCJ1c2VybmFtZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNyb3BwZXIiLCJDcm9wcGVyIiwiYXNwZWN0UmF0aW8iLCJjcm9wIiwiZ2V0Q3JvcHBlZENhbnZhcyIsInRvQmxvYiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiZXJyb3IiLCJlcnIiLCJpdGVtIiwibW9kYWwiLCJoYW5kbGVGaWxlU2VsZWN0IiwiZXZ0IiwidGFyZ2V0IiwiaSIsImYiLCJtYXRjaCIsImFsZXJ0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInRoZUZpbGUiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImVzY2FwZSIsIm5hbWUiLCJyZXN1bHQiLCJqb2luIiwiaW5zZXJ0QmVmb3JlIiwicmVhZEFzRGF0YVVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbWFnZUlkIiwiZmFkZU91dCIsImV2ZW50Iiwic3JjRWxlbWVudCIsImxpbmsiLCJzcmMiLCJwYXJlbnROb2RlIiwib3B0aW9ucyIsImluZGV4IiwibGlua3MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImJsdWVpbXAiLCJHYWxsZXJ5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7QUFHQUEsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUIsUUFBSUMsZUFBZUgsRUFBRSxhQUFGLEVBQWlCSSxNQUFqQixFQUFuQjtBQUNBLFFBQUlDLFlBQVksU0FBWkEsU0FBWSxHQUFZO0FBQ3hCLFlBQUlDLFlBQVlOLEVBQUVPLE1BQUYsRUFBVUQsU0FBVixFQUFoQjtBQUNBLFlBQUlBLFlB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QWEsT0FBYixFQUFzQixRQUF0QixFQUFnQyxVQUFVZ0UsS0FBVixFQUFpQjtBQUM3Q0EsZ0JBQVFBLFNBQVMxRixPQUFPMEYsS0FBeEI7QUFDQSxZQUFJdEIsU0FBU3NCLE1BQU10QixNQUFOLElBQWdCc0IsTUFBTUMsVUFBbkM7QUFBQSxZQUNJQyxPQUFPeEIsT0FBT3lCLEdBQVAsR0FBYXpCLE9BQU8wQixVQUFwQixHQUFpQzFCLE1BRDVDO0FBQUEsWUFFSTJCLFVBQVUsRUFBQ0MsT0FBT0osSUFBUixFQUFjRixPQUFPQSxLQUFyQixFQUZkO0FBQUEsWUFHSU8sUUFBUSxLQUFLQyxvQkFBTCxDQUEwQixHQUExQixDQUhaO0FBSUFDLGdCQUFRQyxPQUFSLENBQWdCSCxLQUFoQixFQUF1QkYsT0FBdkI7QUFDSCxLQVBEO0FBUUgsQ0FURDs7QUFXQSx3RDs7Ozs7OztBQ3JlQSx5QyIsImZpbGUiOiIvanMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNTY2MjFkYTE3ZmI0ZmZlODE1YSIsIi8qKlxuICogQ3JlYXRlZCBieSDQodC10YDQs9C10Lkgb24gMDkuMDEuMjAxOC5cbiAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGlja3lOYXZUb3AgPSAkKCcjc3RpY2t5X2JveCcpLmhlaWdodCgpO1xuICAgIHZhciBzdGlja3lOYXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGlmIChzY3JvbGxUb3AgPiBzdGlja3lOYXZUb3ApIHtcblxuICAgICAgICAgICAgJCgnI3N0aWNreV9ib3gnKS5hZGRDbGFzcygnc3RpY2t5Jyk7XG4gICAgICAgICAgICAkKCcjbG9nb19ib3gnKS5hZGRDbGFzcygnc3RpY2t5X2hlYWRlcl9sb2dvX2JveCcpLnJlbW92ZUNsYXNzKCdoZWFkZXJfbG9nb19ib3gnKTtcbiAgICAgICAgICAgICQoJyNjdXN0b21faGVhdGVyX2Zvcm0nKS5hZGRDbGFzcygnY3VzdG9tX2hlYXRlcl9mb3JtX3N0aWNreScpO1xuICAgICAgICAgICAgJCgnLmZpcnN0X3NlY3Rpb24nKS5jc3MoJ21hcmdpbi10b3AnLCAnNjRweCcpO1xuXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNzdGlja3lfYm94JykucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xuICAgICAgICAgICAgJCgnI2xvZ29fYm94JykuYWRkQ2xhc3MoJ2hlYWRlcl9sb2dvX2JveCcpLnJlbW92ZUNsYXNzKCdzdGlja3lfaGVhZGVyX2xvZ29fYm94Jyk7XG4gICAgICAgICAgICAkKCcuY3VzdG9tX2hlYXRlcl9mb3JtJykuY3NzKCdtYXJnaW4nLCAnMTFweCAwIDE2cHggMCcpO1xuICAgICAgICAgICAgJCgnLm1lZ2FfbWVudV9ob3Zlcl9saW5lOmhvdmVyOmFmdGVyJykuY3NzKCdib3R0b20nLCAnMCcpO1xuICAgICAgICAgICAgJCgnLmZpcnN0X3NlY3Rpb24nKS5jc3MoJ21hcmdpbi10b3AnLCAnMCcpO1xuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc3RpY2t5TmF2KCk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RpY2t5TmF2KCk7XG4gICAgfSk7XG59KTtcblxuJCgnLmxhc3RfcHJvcGVydHlfc2xpZGVyJykuc2xpY2soe1xuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBzcGVlZDogMzAwLFxuICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICBwcmV2QXJyb3c6ICQoJy5sYXN0X3Byb3BlcnR5X3ByZXYnKSxcbiAgICBuZXh0QXJyb3c6ICQoJy5sYXN0X3Byb3BlcnR5X25leHQnKSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBhcHBlbmRBcnJvd3M6IFwiLmFycm93c19ib3hcIixcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxuICAgICAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxuICAgIF1cbn0pO1xuJCgnLnVyZ2VudF9zYWlsJykuc2xpY2soe1xuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBzcGVlZDogMzAwLFxuICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICBwcmV2QXJyb3c6ICQoJy51cmdlbnRfYXJyb3dfcHJldicpLFxuICAgIG5leHRBcnJvdzogJCgnLnVyZ2VudF9hcnJvd19uZXh0JyksXG4gICAgZG90czogZmFsc2UsXG4gICAgYXBwZW5kQXJyb3dzOiBcIi5hcnJvd3NfYm94XCIsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcbiAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcbiAgICBdXG59KTtcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubGlzdF9ib3gnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmNoaWxkcmVuKCcubGlzdF9zd2l0Y2hlcicpLmhhc0NsYXNzKCdmYS1taW51cycpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcubGlzdF9zd2l0Y2hlcicpLnJlbW92ZUNsYXNzKCdmYS1taW51cycpO1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmxpc3Rfc3dpdGNoZXInKS5hZGRDbGFzcygnZmEtcGx1cycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmxpc3Rfc3dpdGNoZXInKS5hZGRDbGFzcygnZmEtbWludXMnKTtcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5saXN0X3N3aXRjaGVyJykucmVtb3ZlQ2xhc3MoJ2ZhLXBsdXMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5saXN0X2FkdmFudGFnZScpLnRvZ2dsZSgnc2xvdycpO1xuICAgIH0pO1xufSk7XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5tZW51X2J0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2hhbmdlJyk7XG4gICAgICAgICQoJy5tYWluX25hdicpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5X2ZsZXgnKTtcbiAgICB9KTtcbn0pO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmFkbWluX2xpc3RfbGluaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmFkbWluX3N1Ym1lbnUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAkKHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnc2hvdycpO1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjdXJyZW50JylcbiAgICB9KTtcbn0pO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkLmFqYXhTZXR1cCh7XG5cbiAgICAgICAgaGVhZGVyczoge1xuXG4gICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxuXG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgJCgnLnVzZXJzX3Bob25lX2JveCAnKS5vbignY2xpY2snLCAnYnV0dG9uLnJlbW92ZV9waG9uZV9idG4nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBwaG9uZUlkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgY29uc29sZS5sb2cocGhvbmVJZCk7XG4gICAgICAgIHZhciB1c2VySWQgPSAkKCcudXNlcklkJykudmFsKCk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmw6ICcvcmVtb3ZlUGhvbmVzJyxcbiAgICAgICAgICAgIGRhdGE6IHtwaG9uZUlkOiBwaG9uZUlkfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0pO1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY291bnQgPSAkKCcuYWRtaW5fcGhvbmVfaW5wdXQnKS5sZW5ndGg7XG4gICAgJCgnI2FkZF9uZXdfcGhvbmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgaW5wdXQgPSAnPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIG5ld191c2Vyc19waG9uZSBjbGVhcmZpeFwiPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBkLWlubGluZS1ibG9jayByZW1vdmVfcGhvbmVfYnRuIHBvc2l0aW9uLWFic29sdXRlXCIgZGF0YS10b2tlbj1cInt7IGNzcmZfdG9rZW4oKSB9fVwiPiA8aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPiA8L2J1dHRvbj48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgZC1pbmxpbmUtYmxvY2sgIHB1bGwtcmlnaHQgYWRtaW5fcGhvbmVfaW5wdXQgcG9zaXRpb24tcmVsYXRpdmVcIiBpZD1cInBob25lJyArIGNvdW50ICsgJ1wiIHBsYWNlaG9sZGVyID0gXCLQstCy0LXQtNC40YLQtSDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C5INGC0LXQu9C10YTQvtC9XCIgbmFtZT1cIm5ld3Bob25lJyArIGNvdW50ICsgJ1wiPiA8L2Rpdj4nO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdoaWxlIChjb3VudCA8IDMpIHtcbiAgICAgICAgICAgICQoJy51c2Vyc19waG9uZV9ib3gnKS5hcHBlbmQoaW5wdXQpO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgJCgnI2FkZF9uZXdfcGhvbmUnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuXG4gICAgfSk7XG5cbiAgICAkKCcudXNlcnNfcGhvbmVfYm94Jykub24oJ2NsaWNrJywgJ2J1dHRvbi5yZW1vdmVfcGhvbmVfYnRuJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICBjb3VudC0tO1xuICAgICAgICBpZiAoY291bnQgPCAzKSB7XG4gICAgICAgICAgICAkKCcjYWRkX25ld19waG9uZScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuXG4vLz09PT09PT09PT09PT09PSBDcm9wIGpzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgJC5hamF4U2V0dXAoe1xuXG4gICAgICAgIGhlYWRlcnM6IHtcblxuICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcblxuICAgICAgICB9XG5cbiAgICB9KTtcbiAgICAvLyDQvtGC0YHQu9C10LTQuNGC0Ywg0L3QsNC20LDRgtC40LUg0Lgg0LLRi9Cx0L7RgCDRhNCw0LnQu9CwXG4gICAgJCgnI2ltZ0FkZFtuYW1lPVwiaW1nXCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlJyk7XG4gICAgICAgIHZhciBmaWxlcyA9ICQodGhpcylbMF0uZmlsZXM7XG4gICAgICAgIHZhciBmaWxlID0gZmlsZXNbMF07XG4gICAgICAgIHZhciB1c2VybmFtZSA9ICQoJyNuZXdVc2VybmFtZScpLnZhbCgpO1xuICAgICAgICAkKCcjaW1hZ2UnKS5hdHRyKCdzcmMnLCB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XG4gICAgICAgIHZhciBjcm9wcGVyID0gbmV3IENyb3BwZXIoaW1hZ2UsIHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiAxIC8gMVxuICAgICAgICB9KTtcbiAgICAgICAgY3JvcHBlci5jcm9wKCk7XG5cbiAgICAgICAgJCgnI3NhdmVJbWcnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcm9wcGVyLmdldENyb3BwZWRDYW52YXMoKS50b0Jsb2IoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdC00LDQtdC8INCyINC/0L7RgdGCINC40LzRjyDRhNCw0LnQu9CwINC4INC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2Nyb3BwZWRJbWFnZScsIGZpbGUpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvdXNlckxvZ28nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNtb2RhbCcpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLz09PT09PT09PT09PT09PT0gIE9wZW4gTW9kYWwgV2luZG93c1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5jdXN0b21fZmllbGRfYWRkX2J0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBpdGVtID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBzd2l0Y2ggKGl0ZW0gIT09ICcnKSB7XG4gICAgICAgICAgICBjYXNlIGl0ZW0gPT09ICdvcGVyYXRpb24nOlxuICAgICAgICAgICAgICAgICQoJyNtb2RhbE9wZXJhdGlvbicpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGl0ZW0gPT09ICd0eXBlJzpcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWxUeXBlJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgaXRlbSA9PT0gJ3BsYWNlJzpcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWxQbGFjZScpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJyNvcGVuVXNlck1lc3NhZ2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJyNteU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcbiAgICAkKCcuc2VuZF9tZXNzYWdlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjbXlNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgfSlcbn0pO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyA9PT09PT09PT09PT09PT09PSBBZGRpbmcgb2JqZWN0IGltYWdlcyA9PT09PT09PT09PT09PVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gaGFuZGxlRmlsZVNlbGVjdChldnQpIHtcbiAgICAgICAgdmFyIGZpbGVzID0gZXZ0LnRhcmdldC5maWxlczsgLy8gRmlsZUxpc3Qgb2JqZWN0XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgRmlsZUxpc3QgYW5kIHJlbmRlciBpbWFnZSBmaWxlcyBhcyB0aHVtYm5haWxzLlxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZjsgZiA9IGZpbGVzW2ldOyBpKyspIHtcbiAgICAgICAgICAgIC8vIE9ubHkgcHJvY2VzcyBpbWFnZSBmaWxlcy5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGVzW2ldKTtcbiAgICAgICAgICAgIGlmICghZi50eXBlLm1hdGNoKCdpbWFnZS4qJykpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkltYWdlIG9ubHkgcGxlYXNlLi4uLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgLy8gQ2xvc3VyZSB0byBjYXB0dXJlIHRoZSBmaWxlIGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChmdW5jdGlvbiAodGhlRmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW5kZXIgdGh1bWJuYWlsLlxuICAgICAgICAgICAgICAgICAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImNvbC0zIG1iLTMgcG9zaXRpb24tcmVsYXRpdmVcIjtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBbJzxidXR0b24gY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSBidG4gYnRuLWRhbmdlciByZW1vdmVfb2JqZWN0X2ltZ1wiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIjBcIj48aSBjbGFzcz1cImZhIGZhLW1pbnVzICBcIj48L2k+PC9idXR0b24+PGltZyBjbGFzcz1cImltZ19yZXNwb25zaXZlXCIgdGl0bGU9XCInLCBlc2NhcGUodGhlRmlsZS5uYW1lKSwgJ1wiIHNyYz1cIicsIGUudGFyZ2V0LnJlc3VsdCwgJ1wiIC8+J10uam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXRNdWx0aScpLmluc2VydEJlZm9yZShzcGFuLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkoZik7XG4gICAgICAgICAgICAvLyBSZWFkIGluIHRoZSBpbWFnZSBmaWxlIGFzIGEgZGF0YSBVUkwuXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZU11bHRpJykgIT09IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGVNdWx0aScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUZpbGVTZWxlY3QsIGZhbHNlKTtcbiAgICB9XG59KTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09PSBSZW1vdmUgb2JqZWN0cyBpbWFnZSA9PT09PT09PT09PT1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQuYWpheFNldHVwKHtcblxuICAgICAgICBoZWFkZXJzOiB7XG5cbiAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXG5cbiAgICAgICAgfVxuXG4gICAgfSk7XG4gICAgJCgnI291dHB1dE11bHRpJykub24oJ2NsaWNrJywgJ2J1dHRvbi5yZW1vdmVfb2JqZWN0X2ltZycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBpbWFnZUlkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2VJZCk7XG4gICAgICAgIGlmIChpbWFnZUlkID09IDApIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmFkZU91dCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltYWdlSWQgIT09IDApIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmFkZU91dCgpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cmw6ICcvcmVtb3ZlSW1hZ2VzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7aW1hZ2VJZDogaW1hZ2VJZH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59KTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09IEFqYXggcGFnaW5hdGlvbiA9PT09PT09PT09PT09PT09PT09PT1cblxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuLy8gICAgICQuYWpheFNldHVwKHtcbi8vXG4vLyAgICAgICAgIGhlYWRlcnM6IHtcbi8vXG4vLyAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxuLy9cbi8vICAgICAgICAgfVxuLy9cbi8vICAgICB9KTtcbi8vICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm9iamVjdHMtcGFnaW5hdGlvbiBhJywgZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy9cbi8vICAgICAgICAgdmFyIHBhZ2VSYXcgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKS5zcGxpdCgnPycpO1xuLy8gICAgICAgICBwYWdlUmF3LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbi8vICAgICAgICAgICAgIGlmIChpdGVtLnNlYXJjaCgnLyhwYWdlPSkvJykpIHtcbi8vICAgICAgICAgICAgICAgICBwYWdlID0gaXRlbS5zcGxpdCgncGFnZT0nKVsxXTtcbi8vICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYWdlKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSk7XG4vL1xuLy8gICAgICAgICB2YXIgb2JqZWN0T3BlcmF0aW9uID0gJF9HRVQoKVsnb2JqZWN0X29wZXJhdGlvbl9pZCddLFxuLy8gICAgICAgICAgICAgb2JqZWN0VHlwZSA9ICRfR0VUKClbJ29iamVjdF90eXBlX2lkJ10sXG4vLyAgICAgICAgICAgICBvYmplY3RQbGFjZSA9ICRfR0VUKClbJ29iamVjdF9wbGFjZV9pZCddIDtcbi8vXG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvYmplY3RPcGVyYXRpb249JyArIG9iamVjdE9wZXJhdGlvbiwgJ29iamVjdFBsYWNlPScgKyBvYmplY3RQbGFjZSwgJ29iamVjdFR5cGU9JyArIG9iamVjdFR5cGUpO1xuLy9cbi8vICAgICAgICAgJC5hamF4KHtcbi8vICAgICAgICAgICAgIHR5cGU6ICdHRVQnLFxuLy8gICAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiAkKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykuYXR0cignY29udGVudCcpXG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgdXJsOiAnL29iamVjdHM/JysgKG9iamVjdE9wZXJhdGlvbiAhPT0gdW5kZWZpbmVkID8gJ29iamVjdF9vcGVyYXRpb25faWQ9JyArIG9iamVjdE9wZXJhdGlvbiA6ICcnKSArXG4vLyAgICAgICAgICAgICAob2JqZWN0VHlwZSAhPT0gdW5kZWZpbmVkID8gJyZvYmplY3RfdHlwZV9pZD0nICsgb2JqZWN0VHlwZSA6ICcnKSArXG4vLyAgICAgICAgICAgICAob2JqZWN0UGxhY2UgIT09IHVuZGVmaW5lZCA/ICcmb2JqZWN0X3BsYWNlX2lkPScgKyBvYmplY3RQbGFjZSA6ICcnKSArICcmcGFnZT0nICsgcGFnZVxuLy8gICAgICAgICAgICAgLy8gdXJsOicvb2JqZWN0cz9wYWdlPScrcGFnZVxuLy9cbi8vXG4vLyAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbi8vICAgICAgICAgICAgICQoJ2JvZHknKS5odG1sKGRhdGEpO1xuLy8gICAgICAgICAgICAgJCgnLm9iamVjdHMtcGFnaW5hdGlvbiBhJykub2ZmKCdjbGljaycpO1xuLy8gICAgICAgICB9KVxuLy9cbi8vXG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIC8vIEdldCBhbGwgZ2V0IHBhcmFtZXRlcnMgZnJvbSBVUkxcbi8vICAgICBmdW5jdGlvbiAkX0dFVChwYXJhbSkge1xuLy8gICAgICAgICB2YXIgdmFycyA9IHt9O1xuLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKGxvY2F0aW9uLmhhc2gsICcnKS5yZXBsYWNlKFxuLy8gICAgICAgICAgICAgL1s/Jl0rKFtePSZdKyk9PyhbXiZdKik/L2dpLCAvLyByZWdleHBcbi8vICAgICAgICAgICAgIGZ1bmN0aW9uIChtLCBrZXksIHZhbHVlKSB7IC8vIGNhbGxiYWNrXG4vLyAgICAgICAgICAgICAgICAgdmFyc1trZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogJyc7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICk7XG4vL1xuLy8gICAgICAgICBpZiAocGFyYW0pIHtcbi8vICAgICAgICAgICAgIHJldHVybiB2YXJzW3BhcmFtXSA/IHZhcnNbcGFyYW1dIDogbnVsbDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gdmFycztcbi8vICAgICB9XG4vLyB9KTtcblxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLz09PT09PT09PT09PT09PT09PT0gQWpheCBzdG9yZSB1c2VyIG1lc3NhZ2UgPT09PT09PT09PVxuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4vLyAgICAgJC5hamF4U2V0dXAoe1xuLy9cbi8vICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50Jylcbi8vICAgICAgICAgfVxuLy9cbi8vICAgICB9KTtcbi8vICAgICAkKCcjc3RvcmVNZXNzYWdlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICB2YXIgcGhvbmUgPSAkKCcjdXNlcnBob25lJykudmFsKCk7XG4vLyAgICAgICAgIHZhciBuYW1lID0gJCgnI25hbWUnKS52YWwoKTtcbi8vICAgICAgICAgdmFyIGV4dHJhdGV4dCA9ICQoJyNleHRyYXRleHQnKS52YWwoKTtcbi8vICAgICAgICAgdmFyIHR5cGVPYmplY3QgPSAkKCcjdHlwZU9iamVjdCcpLnZhbCgpO1xuLy8gICAgICAgICB2YXIgdHlwZU9wZXJhdGlvbiA9ICQoJyN0eXBlT3BlcmF0aW9uJykudmFsKCk7XG4vLyAgICAgICAgIHZhciBlbWFpbCA9ICQoJyNlbWFpbCcpLnZhbCgpO1xuLy9cbi8vICAgICAgICAgaWYgKHBob25lICE9PSAnJykge1xuLy8gICAgICAgICAgICAgJCgnLnJlcXVpcmVkX2ZpZWxkJykucmVtb3ZlKCk7XG4vL1xuLy8gICAgICAgICAgICAgJC5hamF4KHtcbi8vICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4vLyAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxuLy8gICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICAgdXJsOiAnL3N0b3JlTWVzc2FnZScsXG4vLyAgICAgICAgICAgICAgICAgZGF0YToge1xuLy8gICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuLy8gICAgICAgICAgICAgICAgICAgICBwaG9uZTogcGhvbmUsXG4vLyAgICAgICAgICAgICAgICAgICAgIHR5cGVPYmplY3Q6IHR5cGVPYmplY3QsXG4vLyAgICAgICAgICAgICAgICAgICAgIHR5cGVPcGVyYXRpb246IHR5cGVPcGVyYXRpb24sXG4vLyAgICAgICAgICAgICAgICAgICAgIGV4dHJhdGV4dDogZXh0cmF0ZXh0LFxuLy8gICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWxcbi8vICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICQoJy5hbGVydC1zdWNjZXNzIC5zdWNjZXNzX21lc3NhZ2UnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbi8vICAgICAgICAgICAgICAgICAgICAgJCgnLnN1Y2Nlc3NfbWVzc2FnZScpLmh0bWwoZGF0YSk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAkKCcucmVxdWlyZWRfZmllbGQnKS5odG1sKCfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjyEnKVxuLy8gICAgICAgICB9XG4vL1xuLy8gICAgIH0pXG4vLyB9KTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT0gQmx1ZUltcCBJbWFnZSBHYWxsZXJ5ID09PT09PT09PT09PT1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJy5yb3cnKS5vbignY2xpY2snLCAnI2xpbmtzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQsXG4gICAgICAgICAgICBsaW5rID0gdGFyZ2V0LnNyYyA/IHRhcmdldC5wYXJlbnROb2RlIDogdGFyZ2V0LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHtpbmRleDogbGluaywgZXZlbnQ6IGV2ZW50fSxcbiAgICAgICAgICAgIGxpbmtzID0gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xuICAgICAgICBibHVlaW1wLkdhbGxlcnkobGlua3MsIG9wdGlvbnMpO1xuICAgIH0pXG59KTtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21haW4uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9