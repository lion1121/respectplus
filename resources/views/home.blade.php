@extends('layouts.app')

@section('content')
    <section class="container-fluid no_pd no-gutters main_index_img d-flex main_section first_section">
        <div class=" align-items-center short_description_box d-flex h-100">
            <div class="short_description_wrapper text-center h-75">
                <h2 class="">Агентство недвижимости Respect+</h2>
                <h2>Все виды операций с недвижимостью в Днепре и Каменском</h2>
                <div class="btn_opearation d-flex ">
                    <a href="{{route('objects')}}" class="btn">Поиск недвижимости <i class="fa fa-search"></i></a>
                    <button class="btn" type="button" data-toggle="modal" data-target="#myModal">Дать объявление <i
                                class="fa fa-list-alt"></i></button>
                </div>
            </div>
        </div>
    </section>
    <section class="container-fluid no-gutters no_pd main_section bg-white">
        <h3 class="text-center main_title">Быстрый поиск</h3>
        <div class="row quick_search_wrapper no_mg">

            {!! Form::open(['method'=>'POST', 'action'=>'AppController@find','class'=>'form-inline']) !!}
            <div class="form-group">
                <div class="col-sm-12 col-md-4">


                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-map-o"></i></div>
                        </div>
                        {!! Form::select('object_place_id',array(""=>'Месторасположение') + $objectPlaces ,null,['class'=>'custom-select mr-sm-2 quick_search_select']) !!}
                    </div>

                </div>
                <div class="col-sm-12 col-md-3">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-list"></i></div>
                        </div>
                        {!! Form::select('object_operation_id',array(""=>'Тип операции') + $objectOperations ,null,['class'=>'custom-select mr-sm-2 quick_search_select']) !!}

                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-building-o"></i></div>
                        </div>
                        {!! Form::select('object_type_id',array(""=>'Выберите тип объекта') + $objectTypes ,null,['class'=>'custom-select mr-sm-2 quick_search_select']) !!}

                    </div>
                </div>
                <div class="col-sm-12 col-md-1 clearfix">
                    {{--{!! Form::submit('Найти','', ['class'=>'btn btn-primary mb-2 quick_search_btn pull-right']) !!}--}}
                    <button type="submit" name="findObject" class="btn btn-primary mb-2 quick_search_btn pull-right">Найти</button>
                </div>
            </div>

            {!! Form::close() !!}


        </div>
    </section>
    <section class="container-fluid no_pd no-gutters main_section">
        <div class="container no_pd position-relative slider_wrapper clearfix">

            @if(isset($objects))
                <h3 class="main_title">Срочная продажа:</h3>

                <div class="arrows_box position-absolute {{$objects->where('is_urgent',1)->count() > 2 ? '' : 'd-none'}} clearfix">
                    <div class="prev urgent_arrow_prev"><i class="fa fa-angle-left"></i></div>
                    <div class="next urgent_arrow_next"><i class="fa fa-angle-right"></i></div>
                </div>
                <div class="urgent_sail slider_box">

                    @foreach($objects->where('is_urgent',1) as $object)
                        <div class="slide_wrapper estate_container d-flex">
                            <div class="slide_img_box position-relative estate_container_img"
                                 style="background-image: url(/img/objects/{{$object->objectphotos->first()?$object->objectphotos->first()->file:'estate.jpg'}})">
                                <a href="{{route('objectsDetail', $object->slug)}}" class="estate_link clearfix">
                                    <div class="operation_type position-absolute">Срочно</div>
                                </a>
                            </div>
                            <div class="slide_description position-relative">
                                <h4><a href="{{route('objectsDetail', $object->slug)}}">{{title_case($object->title)}}</a></h4>
                                <p>{{strip_tags(str_limit($object->body,60))}}</p>
                                <span class="position-absolute property_id"><i
                                            class="fa fa-hashtag"></i>:{{$object->id}}</span>
                            </div>
                        </div>
                    @endforeach
                    @endif

                </div>
        </div>
    </section>

    <section class="container-fluid no_pd no-gutters advantage_wrapper main_section">
        <div class="container no_pd">
            <div class="row no_mg justify-content-center">
                <h3 class="advantage_title mb-5 main_title">Мы предлагаем</h3>
                <div class="w-100"></div>
                <div class="col-sm-12 col-md-4 text-center test "><i class="fa fa-info-circle"></i>
                    <h4>Сопровождение сделки</h4>
                    <p>При работе с клиентами специалисты АН «РЕСПЕКТ ПЛЮС» проводят доскональную проверку истории
                        переходов
                        права собственности. Сделка осуществляется в сжатые сроки и с соблюдением всех правовых
                        норм.</p>
                </div>
                <div class="col-sm-12 col-md-4 text-center test"><i class="fa fa-home"></i>
                    <h4>Сопровождение документов</h4>
                    <p></p>
                </div>
                <div class="col-sm-12 col-md-4 text-center test"><i class="fa fa-handshake-o"></i>
                    <h4>Оценку рыночной стоимости объекта недвидимости</h4>
                    <p>Специалисты АН «РЕСПЕКТ ПЛЮС» досконально разбираются в конъюнктуре рынка, что позволяет точно
                        определить реальную стоимость объекта и дает возможность скорректировать цену покупки в
                        соответствии
                        с изменениями ситуации на рынке недвижимости. Эта услуга для наших клиентов - бесплатна.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="container-fluid no_pd no-gutters main_section bg-white">
        <div class="container no_pd">
            <div class="row no_mg">
                <div class=" ">
                    <div class="extra_index_wrapper d-flex">
                        @if(isset($news))
                            <div class="news_box ">
                                <h3 class="main_title d-block ">Новости</h3>
                                <div class="position-relative">
                                    <img src="img/dnipro.jpg" alt="" class="news_img img-fluid ">
                                    <span class="news_date position-absolute">Новости</span>
                                </div>
                                <a href="{{route('newsDetail', $news->slug)}}" class="mt-2">{{$news->title}}</a>
                                <p class="news_short_description mt-2">{{strip_tags(str_limit($news->body))}} </p>
                                <a href="{{route('newsDetail', $news->slug)}}" class="news_btn">Подробнее</a>
                            </div>
                        @endif
                        <div class="our_advantage_box">
                            <h3 class="main_title d-block ">Почему мы?</h3>
                            <div class="list_box position-relative">
                                <i class="fa list_switcher fa-minus position-absolute"></i>
                                <span class="list_title">Наши преимущества</span>
                                <ul class="list_advantage">
                                    <li class="advantage_element">Обеспечивается гарантия качественной,
                                        профессиональной,
                                        прозрачной и выгодной операции с недвижимостью;
                                    </li>
                                    <li class="advantage_element">Сделки (свыше 30%) осуществляются по рекомендации
                                        клиентов;
                                    </li>
                                    <li class="advantage_element">Юридическое квалифицированное сопровождение;</li>
                                    <li class="advantage_element">Финансовая безопасность.</li>
                                </ul>
                            </div>
                            <div class="list_box position-relative">
                                <i class="fa fa-plus list_switcher position-absolute"></i>
                                <span class="list_title">Выгодно для клиента:</span>
                                <ul class="list_advantage collapse">
                                    <li class="advantage_element">Бесплатная рыночная оценка объекта недвижимости;</li>
                                    <li class="advantage_element">Бесплатная реклама объекта недвижимости;</li>
                                    <li class="advantage_element">Экономия времени и средств клиента.</li>
                                </ul>
                            </div>
                            <div class="list_box position-relative">
                                <i class="fa list_switcher fa-plus position-absolute"></i>
                                <span class="list_title">Удобно для клиента:</span>
                                <ul class="list_advantage collapse">
                                    <li class="advantage_element">Сопровождение специалистами АН «РЕСПЕКТ+» на всех
                                        этапах
                                        сделки, операций с недвижимостью;
                                    </li>
                                    <li class="advantage_element">Формирование пакета необходимых документов для
                                        осуществлениясделки, операции с недвижимостью;
                                    </li>
                                    <li class="advantage_element">Услуга — срочный выкуп недвижимости.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="container-fluid no_pd no-gutters main_section">
        <div class="container no_pd position-relative slider_wrapper clearfix">
            @if(isset($objects))
                <h3 class="main_title">Последние добавленные:</h3>

                <div class="arrows_box {{$objects->count() > 2 ? '' : 'd-none'}} position-absolute clearfix">
                    <div class="prev  last_property_prev"><i class="fa fa-angle-left"></i></div>
                    <div class="next last_property_next"><i class="fa fa-angle-right"></i></div>
                </div>

                <div class="last_property_slider slider_box">

                    @foreach($objects as $object)
                        <div class="slide_wrapper estate_container  d-flex">
                            <div class="slide_img_box position-relative estate_container_img"
                                 style="background-image: url(/img/objects/{{$object->objectphotos->first() ? $object->objectphotos->first()->file : 'estate.jpg'}})">
                                <a href="{{route('objectsDetail', $object->slug)}}" class="estate_link clearfix">
                                    <div class="operation_type position-absolute">{{$object->objectoperation->operation}}</div>
                                </a>
                            </div>
                            <div class="slide_description position-relative">
                                <h4><a href="{{route('objectsDetail', $object->slug)}}">{{title_case($object->title)}}</a></h4>
                                <p>{{strip_tags(str_limit($object->body))}}</p>
                                <span class="position-absolute property_id"><i
                                            class="fa fa-hashtag"></i>:{{$object->id}}</span>
                            </div>
                        </div>
                    @endforeach
                    @endif


                </div>
        </div>
    </section>
@endsection
@section('user-message')
    @include('includes.user-message')
@endsection