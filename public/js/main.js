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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);