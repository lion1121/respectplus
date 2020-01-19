@section('title', 'Контакты' )

@extends('layouts.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-12">
                {{ Breadcrumbs::render('contacts')}}
            </div>
        </div>
    </div>

    <section class="container-fluid no-gutters p-0 no_pd main_section first_section bg-white">

        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-12 mt-4 mb-3">
                    <h3 class="">Контактна інформація:</h3>
                    <p>
                        Якщо Ви готові продати, купити, здати в оренду, орендувати,
                        обміняти свою нерухомість у м. Дніпрі і Дніпропетровській області або у Вас
                        є питання, зв&#39;яжіться з нами прямо зараз по телефону або <span class="send_message" style="color: #D84949; cursor: pointer"><strong> відправте заявку.</strong></span>.
                        <ul>
                        <li>тел.0985579292</li>
                        <li>тел.0505579292</li>
                        <li>тел.0635579292</li>
                        <li>e-mail: an.respectplus@gmail.com</li>
                    </ul>
                        <p>
                        Агентство недвижимости «РЕСПЕКТ ПЛЮС» - гарантия качественной, профессиональной, прозрачной и
                        выгодной сделки с недвижимостью.

                        Мы всегда рады помочь Вам.
                        З повагою, Тетяна Прошенкова.
                        тел.0985579292
                    </p>
                </div>
            </div>
        </div>
    </section>

@endsection