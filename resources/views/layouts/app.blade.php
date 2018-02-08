<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/libs.css')}}">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
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
                        <li class="list-inline-item social_item"><a href="mailto:an.respectplus@gmail.com"><i
                                        class="fa fa-envelope-o"></i></a></li>
                        <li class="list-inline-item social_item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li class="list-inline-item social_item"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid menu_wrapper  no-gutters no_pd" id="sticky_box">
        <div class="container menu_box no_pd clearfix">
            <div class="col-lg-3 col-md-3 header_logo_box no_pd" id="logo_box">
                <img src="img/header-logo.png" alt="">
                <h1><a class="real_estate_name"
                       href="{{url('/')}}"><strong>Respect</strong><span>Plus</span></a></h1>
                <h2><a class="real_estate" href="{{url('/')}}">Агентство недвижимости</a></h2>
            </div>
            <div class="col-sm-12 col-md-9 offset-md-3 col-lg-9 clearfix offset-lg-3 no_pd menu_box position-relative">
                <div class="menu_btn pull-right">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <ul class="list-unstyled list-inline  main_nav">
                    <li class="menu_item"><a href="{{url('/')}}" class="menu_link">главная</a></li>
                    <li class="menu_item"><a href="#" class="menu_link">объекты</a></li>
                    <li class="menu_item dropdown_element position-relative">
                        <a href="#" class="menu_link ">услуги</a> <i class="fa fa-angle-down "></i>
                        <div class="submenu position-absolute">
                            <a class="dropdown-menu_item" href="#">Action</a>
                            <a class="dropdown-menu_item" href="#">Another action</a>
                            <a class="dropdown-menu_item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="menu_item"><a href="#" class="menu_link">новости</a></li>
                    <li class="menu_item"><a href="#" class="menu_link">контакты</a></li>
                    <li class="menu_item"><a href="#" class="menu_link ">о нас</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>

@yield('content')

<footer class="container-fluid no_pd no-gutters main_section ">
    <div class="container no_pd">
        <div class="row no_mg footer_wrapper">
            <div class="col-12 col-md-4">
                <h4 class="footer_title">Контакты</h4>
                <ul class="footer_phone_list position-relative list-unstyled">
                    <i class="fa fa-phone position-absolute"></i>
                    <li>Телефоны</li>
                    <li>098-557-92-92
                    </li>
                    <li>063-557-92-92
                    </li>
                    <li>050-557-92-92
                    </li>
                </ul>
                <ul class="footer_email_list position-relative list-unstyled">
                    <i class="fa fa-envelope position-absolute"></i>
                    <li>E-mail</li>
                    <li><a href="#">an.respectplus@gmail.com</a></li>
                </ul>
                <ul class="footer_skype_list position-relative list-unstyled">
                    <i class="fa fa-skype position-absolute"></i>
                    <li>Skype</li>
                    <li>an.respectplus@gmail.com</li>
                </ul>
                <ul class="footer_social_list position-relative list-unstyled">
                    <i class="fa fa-facebook-f position-absolute"></i>
                    <li>Мы в фейсбуке</li>
                    <li><a href="#">facebook.com/an.respectplus</a></li>
                </ul>
            </div>
            <div class="col-12 col-md-3">
                <h4 class="footer_title">Навигация</h4>
                <ul class="secondary_menu list-unstyled">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Объекты</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">О нас</a></li>
                </ul>
            </div>
            <div class="col-12 col-md-5 footer_search_box">
                <h4 class="footer_title">Поиск по сайту</h4>
                <form action="" class="form-inline">
                    <div class="input-group">
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Поиск ...">
                        <button type="submit" class="footer_btn_search">Искать</button>

                    </div>

                </form>
            </div>
        </div>
        <div class="row no_mg">
            <div class="w-100 footer_line mt-3"></div>
        </div>
        <div class="row no_mg mt-2 copyright_wrapper">
            <p class="copyright">Copyright <i class="fa fa-copyright"></i> 2018 RespectPlus. Designed by <a href="#">[Module.Dev]</a>
                All rights reserved.</p>
        </div>
    </div>

</footer>
<div class="modal fade" id="myModal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title text-center">Отправьте нам сообщение, Вам перезвонят</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form action="">
                    <div class="form-group row">
                        <label for="typeOperation" class="col-md-3 col-form-label">Я бы хотел(а):</label>
                        <div class="col-md-9">
                            <select type="text" class="form-control" id="typeOperation">
                                <option value="">Купить</option>
                                <option value="">Продать</option>
                                <option value="">Арендовать</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="typeObject" class="col-md-3 col-form-label">Недвижимость:</label>
                        <div class="col-md-9">
                            <select type="text" class="form-control" id="typeObject">
                                <option value="">Дом</option>
                                <option value="">Квартиру</option>
                                <option value="">Участок земли</option>
                                <option value="">Гараж</option>
                                <option value="">Коммерческое здание</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="feedbackPhone" class="col-md-3 col-form-label">Мой номер телефона:</label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="feedbackPhone"
                                   placeholder="Введите номер телефона">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="feedbackName" class="col-md-3 col-form-label">Меня зовут:</label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="feedbackName"
                                   placeholder="Ваше имя">
                        </div>
                    </div>
                </form>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary new_ad_sent">Отправить</button>
            </div>

        </div>
    </div>
</div>
<script src="{{asset('js/libs.js')}}"></script>
<script src="{{asset('js/main.js')}}"></script>
</body>
</html>