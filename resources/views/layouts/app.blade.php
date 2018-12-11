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

<header class="main_header_wrapper container-fluid sticky-top no-gutters no_pd">
    <div class="container-fluid no_pd top_menu_wrapper  no-gutters">
        <div class="container no_pd">
            <div class="row no_mg align-items-center">
                <div class="col-lg-5 offset-lg-3 col-md-5 offset-md-4  header_phone_block d-none d-md-block"><i
                            class="fa fa-phone"></i>
                    Звоните нам: (098,063,050)-557-92-92
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
                <h2><a class="real_estate" href="{{url('/')}}">Агентство недвижимости</a></h2>
            </div>
            <div class="col-sm-12 col-md-9 col-lg-9 clearfix offset-lg-3 no_pd menu_box position-relative">
                <div class="menu_btn pull-right">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <ul class="list-unstyled list-inline  main_nav">
                    <li class="menu_item"><a href="{{url('/')}}"
                                             class="menu_link {{active_menu(\Illuminate\Support\Facades\Route::currentRouteName(),'index',0,5 )}}">главная</a>
                    </li>
                    <li class="menu_item"><a href="{{route('objects')}}"
                                                                                class="menu_link {{active_menu(\Illuminate\Support\Facades\Route::currentRouteName(),'objects',0,7 )}}">недвижимость
                         </a>
                    </li>
                    <li class="menu_item dropdown_element position-relative">
                        <a href="{{route('service')}}"
                           class="menu_link {{active_menu(\Illuminate\Support\Facades\Route::currentRouteName(),'service',0,6 )}}">услуги</a>
                        <i class="fa fa-angle-down "></i>
                        <div class="submenu position-absolute">
                            <a class="dropdown-menu_item" id="openUserMessage" href="#">Дать объевление</a>
                        </div>
                    </li>
                    <li class="menu_item"><a href="{{route('news')}}"
                                             class="menu_link {{active_menu(\Illuminate\Support\Facades\Route::currentRouteName(),'news',0,4 )}}">новости</a>
                    </li>
                    <li class="menu_item"><a href="{{route('contacts')}}"
                                             class="menu_link {{active_menu(\Illuminate\Support\Facades\Route::currentRouteName(),'contacts',0,8 )}}">контакты</a>
                    </li>
                    <li class="menu_item"><a href="{{route('about')}}"
                                             class="menu_link {{active_menu(\Illuminate\Support\Facades\Route::currentRouteName(),'about',0,5 )}} ">о
                            нас</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>

<div id="app">
    <example-component></example-component>
</div>

@yield('content')

<footer class="container-fluid no_pd no-gutters main_section ">
    <div itemscope itemtype="https://schema.org/Organization" class="container no_pd">
        <div class="row no_mg footer_wrapper">
            <div class="col-12 col-md-4">
                <h4 class="footer_title">Контакты</h4>
                <ul class="footer_phone_list position-relative list-unstyled">
                    <i class="fa fa-phone position-absolute"></i>
                    <li>Телефоны</li>
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
                    <li>Мы в фейсбуке</li>
                    <li><a target="_blank"
                           href="https://www.facebook.com/%D0%90%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BE-%D0%BD%D0%B5%D1%80%D1%83%D1%85%D0%BE%D0%BC%D0%BE%D1%81%D1%82%D1%96-%D0%A0%D0%95%D0%A1%D0%9F%D0%95%D0%9A%D0%A2-%D0%9F%D0%9B%D0%AE%D0%A1-1010237809119412/">facebook.com/an.respectplus</a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-3">
                <h4 class="footer_title">Навигация</h4>
                <ul class="secondary_menu list-unstyled">
                    <li><a href="{{url('/')}}">Главная</a></li>
                    <li><a href="{{route('objects')}}">Объекты</a></li>
                    <li><a href="{{route('service')}}">Услуги</a></li>
                    <li><a href="{{route('about')}}">О нас</a></li>
                </ul>
            </div>
            {{--<div class="col-12 col-md-5 footer_search_box">--}}
            {{--<h4 class="footer_title">Поиск по сайту</h4>--}}

            {{--{!! Form::open(['method' => 'get','url' => '/search' , 'class'=>'form-inline']) !!}--}}
            {{--<div class="input-group">--}}
            {{--{!! Form::text('s',$s ? $s : '' ,['class'=>'form-control','id' => 'search','placeholder' => 'поиск ...']) !!}--}}
            {{--{!! Form::submit('Найти', ['class'=>'footer_btn_search ']) !!}--}}
            {{--</div>--}}

            {{--{!! Form::close() !!}--}}
            {{--</div>--}}
        </div>
        <div class="row no_mg mt-2 copyright_wrapper">
            <div class="copyright" style="margin-bottom: -7px"><span itemprop="name"
                                                                     class="mr-3">Респект Плюс</span><span
                        itemprop="description">Агентство недвижимости в Днепре и Днепропетровской области</span></div>
        </div>
        <div class="row no_mg">
            <div class="w-100 footer_line mt-3"></div>
        </div>
        <div class="row no_mg mt-2 copyright_wrapper">
            <p class="copyright">Copyright <i class="fa fa-copyright"></i> 2018 RespectPlus. Designed by <a
                        href="http://moduledev.com.ua">[Module.Dev]</a>
                All rights reserved.</p>
        </div>
    </div>

</footer>
{{--@yield('user-message')--}}
{{--<div class="modal fade" id="myModal">--}}
    {{--<div class="modal-dialog modal-lg">--}}
        {{--<div class="modal-content">--}}

            {{--<!-- Modal Header -->--}}
            {{--<div class="modal-header">--}}
                {{--<h4 class="modal-title text-center">Отправьте нам сообщение, Вам перезвонят</h4>--}}
                {{--<button type="button" class="close" data-dismiss="modal">&times;</button>--}}
            {{--</div>--}}

            {{--<!-- Modal body -->--}}
            {{--<div class="modal-body">--}}

                {{--<form>--}}
                    {{--{{ csrf_field() }}--}}

                    {{--<div class="form-group row">--}}
                        {{--<label for="typeOperation" class="col-md-3 col-form-label">Я бы хотел(а):</label>--}}
                        {{--<div class="col-md-9">--}}
                            {{--<select type="text" name="operation" class="form-control" id="typeOperation">--}}
                                {{--<option value="Купить">Купить</option>--}}
                                {{--<option value="Продать">Продать</option>--}}
                                {{--<option value="Арендовать">Арендовать</option>--}}
                            {{--</select>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="form-group row">--}}
                        {{--<label for="typeObject" class="col-md-3 col-form-label">Недвижимость:</label>--}}
                        {{--<div class="col-md-9">--}}
                            {{--<select type="text" name="type" class="form-control" id="typeObject">--}}
                                {{--<option value="Дом">Дом</option>--}}
                                {{--<option value="Квартиру">Квартиру</option>--}}
                                {{--<option value="Участок земли">Участок земли</option>--}}
                                {{--<option value="Гараж">Гараж</option>--}}
                                {{--<option value="Коммерческое здание">Коммерческое здание</option>--}}
                            {{--</select>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="form-group row">--}}
                        {{--<label for="userphone" class="col-md-3 col-form-label">Мой номер телефона:</label>--}}
                        {{--<div class="col-md-9">--}}
                            {{--<input type="text" name="phone" required class="form-control" id="userphone"--}}
                                   {{--placeholder="Введите номер телефона">--}}
                        {{--</div>--}}
                        {{--<p class="required_field text-center w-100"></p>--}}
                    {{--</div>--}}
                    {{--<div class="form-group row">--}}
                        {{--<label for="email" class="col-md-3 col-form-label">Мой email:</label>--}}
                        {{--<div class="col-md-9">--}}
                            {{--<input type="email" required name="email" class="form-control" id="email"--}}
                                   {{--placeholder="Введите e-mail">--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="form-group row">--}}
                        {{--<label for="name" class="col-md-3 col-form-label">Меня зовут:</label>--}}
                        {{--<div class="col-md-9">--}}
                            {{--<input type="text" required name="name" class="form-control" id="name"--}}
                                   {{--placeholder="Ваше имя">--}}
                        {{--</div>--}}
                    {{--</div>--}}

                    {{--<div class="form-group row">--}}
                        {{--<label for="extratext" class="col-md-3 col-form-label">Дополнительно:</label>--}}
                        {{--<div class="col-md-9">--}}
                            {{--<textarea required type="text" name="extratext" class="form-control custom_textarea"--}}
                                      {{--id="extratext"></textarea>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="modal-footer">--}}
                        {{--<button id="storeMessage" class="btn btn-secondary new_ad_sent">Отправить</button>--}}

                    {{--</div>--}}
                    {{--<div class="alert-success w-100">--}}
                        {{--<p class="success_message text-center pt-2 pb-2"></p>--}}
                    {{--</div>--}}
                {{--</form>--}}

            {{--</div>--}}

            {{--<!-- Modal footer -->--}}


        {{--</div>--}}
    {{--</div>--}}
{{--</div>--}}
<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('js/libs.js')}}"></script>
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.19/vue.js"></script>--}}
<script src="{{asset('js/main.js')}}"></script>
</body>
</html>