<!doctype html>
{{--<html lang="{{ app()->getLocale() }}">--}}
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/libs.css')}}">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body>
<div class="container-fluid no-gutters ">
    <div class="row ">
        <aside class="col-2 admin_sidebar no_pd text-left">
            <div class="text-center mt-3">
                <p class="admin_username">{{ Auth::user()->surname }} {{ Auth::user()->name }}</p>
                <a class="admin_exit_link" href="{{ route('logout') }}"
                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                    Выход
                    <i class="fa fa-sign-out" aria-hidden="true"></i></a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
            </div>
            <div class="admin_user_box d-flex">
                <div class="user_photo_box">
                    @if(Auth::user())
                        <img src="{{\App\Photo::all()->where('user_id',Auth::id())->first() ? \App\Photo::all()->where('user_id',Auth::id())->first()->file : 'http://via.placeholder.com/350x150'}}" alt="" class="admin_user_photo">
                    @endif

                </div>
            </div>
            <ul class="admin_list list-unstyled">
                <li class="admin_list_element"><a href="#" class="admin_list_link"><i class="fa fa-users" aria-hidden="true"></i> Пользователи</a>
                    <ul class="admin_submenu list-unstyled ">
                        <li class="admin_submenu_element"><a href="{{route('users.index')}}" class="admin_submenu_link">Список пользователей</a></li>
                        <li class="admin_submenu_element"><a href="{{route('users.create')}}" class="admin_submenu_link">Добавить пользователя</a></li>

                    </ul>
                </li>
                <li class="admin_list_element"><a href="#" class="admin_list_link"><i class="fa fa-building-o" aria-hidden="true"></i> Объекты</a>
                    <ul class="admin_submenu list-unstyled">
                        <li class="admin_submenu_element"><a href="{{route('objects.index')}}" class="admin_submenu_link">Список объектов</a></li>
                        <li class="admin_submenu_element"><a href="{{route('objects.create')}}" class="admin_submenu_link">Добавить объект</a></li>

                    </ul>

                </li>
                <li class="admin_list_element"><a href="#" class="admin_list_link"><i class="fa fa-newspaper-o" aria-hidden="true"></i> Новости</a>
                    <ul class="admin_submenu list-unstyled">
                        <li class="admin_submenu_element"><a href="#" class="admin_submenu_link">Все новости</a></li>
                        <li class="admin_submenu_element"><a href="#" class="admin_submenu_link">Добавить новость</a></li>

                    </ul>
                </li>
                <li class="admin_list_element"><a href="#" class="admin_list_link"><i class="fa fa-line-chart" aria-hidden="true"></i> Отчеты</a>
                    <ul class="admin_submenu list-unstyled">
                        <li class="admin_submenu_element"><a href="#" class="admin_submenu_link">Lorem ipsum.SUB</a></li>
                        <li class="admin_submenu_element"><a href="#" class="admin_submenu_link">Lorem ipsum.SUB</a></li>
                        <li class="admin_submenu_element"><a href="#" class="admin_submenu_link">Lorem ipsum.SUB</a></li>
                        <li class="admin_submenu_element"><a href="#" class="admin_submenu_link">Lorem ipsum.SUB</a></li>
                    </ul>
                </li>
                <li class="admin_list_element"><a href="#" class="admin_list_link"><i class="fa fa-cog" aria-hidden="true"></i>
                        Настройки</a>
                    <ul class="admin_submenu list-unstyled">
                        <li class="admin_submenu_element"><a href="#" class="admin_submenu_link">Lorem ipsum.SUB</a></li>
                        <li class="admin_submenu_element"><a href="#" class="admin_submenu_link">Lorem ipsum.SUB</a></li>
                        <li class="admin_submenu_element"><a href="#" class="admin_submenu_link">Lorem ipsum.SUB</a></li>
                        <li class="admin_submenu_element"><a href="#" class="admin_submenu_link">Lorem ipsum.SUB</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
        <div class="col-10 admin_content_box">
            @yield('content')
        </div>

    </div>
</div>
<script src="{{asset('js/libs.js')}}"></script>
<script src="{{asset('js/main.js')}}"></script>
</body>
</html>