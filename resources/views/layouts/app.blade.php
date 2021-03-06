<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-102782464-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-102782464-1');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

    <link rel="stylesheet" href="{{asset('css/libs.css')}}">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
    <title>@yield('title')</title>
    <meta name="description" content="@yield('description')">
</head>
<body>
<div id="app">
<header class="main_header_wrapper container-fluid sticky-top no-gutters no_pd">
    <div class="container-fluid no_pd top_menu_wrapper  no-gutters">
        <div class="container no_pd">
            <div class="row no_mg align-items-center">
                <div class="col-lg-5 offset-lg-3 col-md-5 offset-md-4  header_phone_block d-none d-md-block"><i
                            class="fa fa-phone"></i>
                    Дзвоніть нам: (098,063,050)-557-92-92
                </div>
                <div class="col-sm-12  col-lg-3 offset-lg-1 col-md-3 social_wrapper">

                    <ul class="list-unstyled list-inline pull-right social_item_list">
                        <li class="list-inline-item social_item"><a
                                    href="mailto:{{\App\Setting::all()->where('parameter','email')->first()->data}}"><i
                                        class="fa fa-envelope-o"></i></a></li>
                        <li class="list-inline-item social_item"><a target="_blank"
                                                                    href="https://www.facebook.com/%D0%90%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BE-%D0%BD%D0%B5%D1%80%D1%83%D1%85%D0%BE%D0%BC%D0%BE%D1%81%D1%82%D1%96-%D0%A0%D0%95%D0%A1%D0%9F%D0%95%D0%9A%D0%A2-%D0%9F%D0%9B%D0%AE%D0%A1-1010237809119412/"><i
                                        class="fa fa-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid menu_wrapper  no-gutters no_pd" id="sticky_box">
        <div class="container menu_box no_pd clearfix">
            <div class="col-lg-3 col-md-3 header_logo_box no_pd" id="logo_box">
                <img src="{{ asset('img/header-logo.png')}}" alt="">
                <h1><a class="real_estate_name"
                       href="{{url('/')}}"><strong>Respect</strong><span>Plus</span></a></h1>
                <h2><a class="real_estate" href="{{url('/')}}">Агентство нерухомості</a></h2>
            </div>
            <div class="col-sm-12 col-md-9 col-lg-9 clearfix offset-lg-3 no_pd menu_box position-relative">
                <div class="menu_btn pull-right">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <ul class="list-unstyled list-inline  main_nav">
                    <li class="menu_item"><a href="{{url('/')}}"
                                             class="menu_link {{active_menu(\Illuminate\Support\Facades\Route::currentRouteName(),'index',0,5 )}}">головна</a>
                    </li>
                    <li class="menu_item"><a href="{{route('objects')}}"
                                                                                class="menu_link {{active_menu(\Illuminate\Support\Facades\Route::currentRouteName(),'objects',0,7 )}}">нерухомість
                         </a>
                    </li>
                    <li class="menu_item dropdown_element position-relative">
                        <a href="{{route('service')}}"
                           class="menu_link {{active_menu(\Illuminate\Support\Facades\Route::currentRouteName(),'service',0,6 )}}">послуги</a>
                        <i class="fa fa-angle-down "></i>
                        <div class="submenu position-absolute">
{{--                            <a class="dropdown-menu_item" id="openUserMessage" href="#">Дати оголошення</a>--}}
                            <invoke-message-form class="dropdown-menu_item"></invoke-message-form>
                        </div>
                    </li>
                    <li class="menu_item"><a href="{{route('news')}}"
                                             class="menu_link {{active_menu(\Illuminate\Support\Facades\Route::currentRouteName(),'news',0,4 )}}">новини</a>
                    </li>
                    <li class="menu_item"><a href="{{route('contacts')}}"
                                             class="menu_link {{active_menu(\Illuminate\Support\Facades\Route::currentRouteName(),'contacts',0,8 )}}">контакти</a>
                    </li>
                    <li class="menu_item"><a href="{{route('about')}}"
                                             class="menu_link {{active_menu(\Illuminate\Support\Facades\Route::currentRouteName(),'about',0,5 )}} ">про
                            нас</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>





@yield('content')

<footer class="container-fluid no_pd no-gutters main_section ">
    <div itemscope itemtype="https://schema.org/Organization" class="container no_pd">
        <div class="row no_mg footer_wrapper">
            <div class="col-12 col-md-4">
                <h4 class="footer_title">Контакти</h4>
                <ul class="footer_phone_list position-relative list-unstyled">
                    <i class="fa fa-phone position-absolute"></i>
                    <li>Телефони</li>
                    <li itemprop="telephone">098-557-92-92
                    </li>
                    <li itemprop="telephone">063-557-92-92
                    </li>
                    <li itemprop="telephone">050-557-92-92
                    </li>
                </ul>
                <ul class="footer_email_list position-relative list-unstyled">
                    <i class="fa fa-envelope position-absolute"></i>
                    <li>E-mail</li>
                    <li><a itemprop="email"
                           href="mailto:{{\App\Setting::all()->where('parameter','email')->first()->data}}">an.respectplus@gmail.com</a>
                    </li>
                </ul>
                <ul class="footer_skype_list position-relative list-unstyled">
                    <i class="fa fa-skype position-absolute"></i>
                    <li>Skype</li>
                    <li>an.respectplus@gmail.com</li>
                </ul>
                <ul class="footer_social_list position-relative list-unstyled">
                    <i class="fa fa-facebook-f position-absolute"></i>
                    <li>Ми у фейсбуці</li>
                    <li><a target="_blank"
                           href="https://www.facebook.com/%D0%90%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BE-%D0%BD%D0%B5%D1%80%D1%83%D1%85%D0%BE%D0%BC%D0%BE%D1%81%D1%82%D1%96-%D0%A0%D0%95%D0%A1%D0%9F%D0%95%D0%9A%D0%A2-%D0%9F%D0%9B%D0%AE%D0%A1-1010237809119412/">facebook.com/an.respectplus</a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-3">
                <h4 class="footer_title">Навігація</h4>
                <ul class="secondary_menu list-unstyled">
                    <li><a href="{{url('/')}}">Головна</a></li>
                    <li><a href="{{route('objects')}}">Об'єкти</a></li>
                    <li><a href="{{route('service')}}">Послуги</a></li>
                    <li><a href="{{route('about')}}">Про нас</a></li>
                </ul>
            </div>
        </div>
        <div class="row no_mg mt-2 copyright_wrapper">
            <div class="copyright" style="margin-bottom: -7px"><span itemprop="name"
                                                                     class="mr-3">Респект Плюс</span><span
                        itemprop="description">Агентство нерухомості у Дніпрі та Дніпропетровській області</span></div>
        </div>
        <div class="row no_mg">
            <div class="w-100 footer_line mt-3"></div>
        </div>
        <div class="row no_mg mt-2 copyright_wrapper">
            <p class="copyright">Copyright <i class="fa fa-copyright"></i> 2020 RespectPlus. Designed by <a
                        href="http://moduledev.com.ua">[Module.Dev]</a>
                All rights reserved.</p>
        </div>
    </div>

</footer>
{{--@yield('user-message')--}}
    <user-message></user-message>

</div>
<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('js/libs.js')}}"></script>
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.19/vue.js"></script>--}}
<script src="{{asset('js/main.js')}}"></script>
</body>
</html>