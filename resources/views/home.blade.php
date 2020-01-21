@section('title', 'Продажа и покупка недвижимости в Днепре и области' )
@section('description', 'Услуги агентства недвижимости Респект плюс в Днепре. Покупка и продажа недвижимости в Днепре. Квартиры, комнаты, дома, офисы, земля, коммерческая недвижимость. Огромная база объявлений' )

@extends('layouts.app')

@section('content')
    <section class="container-fluid no_pd no-gutters main_index_img d-flex main_section first_section">
        <div class=" align-items-center short_description_box d-flex h-100">
            <div itemscope itemtype="https://schema.org/Organization" class="short_description_wrapper text-center flex-column  h-75">
                <div class="">
                    <h2 itemprop="name" class="mr-3">Респект Плюс</h2>
                    <h2 itemprop="description" class="">Агентство нерухомості у Дніпрі та Дніпропетровській області</h2>
                </div>
                <h2>Всі види операцій з нерухомістю</h2>
                <div class="btn_opearation d-flex ">
                    <a href="{{route('objects')}}" class="btn">Пошук нерухомості <i class="fa fa-search"></i></a>
{{--                    <button class="btn" type="button" data-toggle="modal" data-target="#myModal">Дати оголошення <i--}}
{{--                                class="fa fa-list-alt"></i></button>--}}
                    <invoke-message-form class="btn">Дать объявление <i class="fa fa-list-alt"></i></invoke-message-form>

                </div>
            </div>
        </div>
    </section>
    <section class="container-fluid no-gutters no_pd main_section bg-white">
        <h3 class="text-center main_title">Швидкий пошук</h3>
        <div class="row quick_search_wrapper no_mg">

            {!! Form::open(['method'=>'POST', 'action'=>'AppController@find','class'=>'form-inline']) !!}
            <div class="col-sm-12 col-md-4">


                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fa fa-map-o"></i></div>
                    </div>
                    {!! Form::select('object_place_id',array(""=>'Місцерозташування') + $objectPlaces ,null,['class'=>'custom-select mr-sm-2 quick_search_select']) !!}
                </div>

            </div>
            <div class="col-sm-12 col-md-3">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fa fa-list"></i></div>
                    </div>
                    {!! Form::select('object_operation_id',array(""=>'Тип операції') + $objectOperations ,null,['class'=>'custom-select mr-sm-2 quick_search_select']) !!}

                </div>
            </div>
            <div class="col-sm-12 col-md-4">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fa fa-building-o"></i></div>
                    </div>
                    {!! Form::select('object_type_id',array(""=>'Виберіть тип об\'екту') + $objectTypes ,null,['class'=>'custom-select mr-sm-2 quick_search_select']) !!}

                </div>
            </div>
            <div class="col-sm-12 col-md-1 clearfix">
                {{--{!! Form::submit('Найти','', ['class'=>'btn btn-primary mb-2 quick_search_btn pull-right']) !!}--}}
                <button type="submit" name="findObject" class="btn btn-primary mb-2 quick_search_btn pull-right">Знайти
                </button>
            </div>

            {!! Form::close() !!}


        </div>
    </section>
    <section class="container-fluid no_pd no-gutters main_section">
        <div class="container no_pd position-relative slider_wrapper clearfix">

            @if(isset($objects))
                <h3 class="main_title">Терміновий продаж:</h3>

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
                                    <div class="operation_type position-absolute">Терміново</div>
                                </a>
                            </div>
                            <div class="slide_description position-relative">
                                <h4>
                                    <a href="{{route('objectsDetail', $object->slug)}}">{{$object->title}}</a>
                                </h4>
                                <p >{!! str_limit(strip_tags($object->body),50) !!}</p>
                                <span class="position-absolute property_id"><i
                                            class="fa fa-hashtag"></i> {{$object->id}}</span>
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
                <h3 class="advantage_title mb-5 main_title">Ми пропонуємо</h3>
                <div class="w-100"></div>
                <div class="col-sm-12 col-md-4 text-center test "><i class="fa fa-info-circle"></i>
                    <h4>Супровід угоди</h4>
                    <p>При роботі з клієнтами фахівці агентства нерухомості «РЕСПЕКТ ПЛЮС» проводять детальну перевірку історії переходів права власності.
                        Угода проводиться в стислі терміни і з дотриманням всіх правових норм.</p>
                </div>
                <div class="col-sm-12 col-md-4 text-center test"><i class="fa fa-home"></i>
                    <h4>Всі види операцій</h4>
                    <p><span><strong>Продати нерухомість</strong> у Дніпрі</span>, <span><strong> купити нерухомість у Дніпрі</strong></span>, <span><strong>оренда нерухомості у Дніпрі</strong></span>, обмін.</p>
                </div>
                <div class="col-sm-12 col-md-4 text-center test"><i class="fa fa-handshake-o"></i>
                    <h4>Оцінка ринкової вартості об'єкта нерухомості</h4>
                    <p>Спеціалісти агентства нерухомості «РЕСПЕКТ ПЛЮС» мають величезний досвід і досконально розбираються в кон'юнктурі ринку міста Дніпро і області, що дає можливість
                        точно визначити дійсну вартість об'єкта і дозволить визначити ціну об'єкта нерухомості відповідно до ситуації на ринку нерухомості. Послуга для
                        наших клієнтів надається безкоштовно.</p>
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
                                <h3 class="main_title d-block ">Новини</h3>
                                <div class="position-relative">
                                    <img src="img/objects/estate.jpg" alt="" class="news_img img-fluid ">
                                    <span class="news_date position-absolute">Новини</span>
                                </div>
                                <a href="{{route('newsDetail', $news->slug)}}" class="mt-2">{{$news->title}}</a>
                                <p class="news_short_description mt-2">{{strip_tags(str_limit($news->body))}} </p>
                                <a href="{{route('newsDetail', $news->slug)}}" class="news_btn">Детальніше</a>
                            </div>
                        @endif
                        <div class="our_advantage_box">
                            <h3 class="main_title d-block ">Чому ми?</h3>
                            <div class="list_box position-relative">
                                <i class="fa list_switcher fa-minus position-absolute"></i>
                                <span class="list_title">Наші переваги</span>
                                <ul class="list_advantage">
                                    <li class="advantage_element">Забезпечується гарантія якісної,
                                        професійної,
                                        прозорої і вигідної операції з нерухомістю;
                                    </li>
                                    <li class="advantage_element">Угоди (понад 30%) здійснюються за рекомендацією
                                        клієнтів;
                                    </li>
                                    <li class="advantage_element">Юридичний кваліфікований супровід;</li>
                                    <li class="advantage_element">Фінансова безпека.</li>
                                </ul>
                            </div>
                            <div class="list_box position-relative">
                                <i class="fa fa-plus list_switcher position-absolute"></i>
                                <span class="list_title">Вигідно для клієнта:</span>
                                <ul class="list_advantage collapse">
                                    <li class="advantage_element">Безкоштовна ринкова оцінка об'єкта нерухомості;</li>
                                    <li class="advantage_element">Безкоштовна реклама об'єкта нерухомості;</li>
                                    <li class="advantage_element">Економія часу та коштів клієнта.</li>
                                </ul>
                            </div>
                            <div class="list_box position-relative">
                                <i class="fa list_switcher fa-plus position-absolute"></i>
                                <span class="list_title">Зручно для клієнта:</span>
                                <ul class="list_advantage collapse">
                                    <li class="advantage_element">Супровід фахівцями АН «РЕСПЕКТ +» на всіх
                                        етапах
                                        угоди, операцій з нерухомістю;
                                    </li>
                                    <li class="advantage_element">Формування пакету необхідних документів для
                                        здійснення угоди, операції з нерухомістю;
                                    </li>
                                    <li class="advantage_element">Послуга - терміновий викуп нерухомості.</li>
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
                <h3 class="main_title">Останні добавлені:</h3>

                <div class="arrows_box {{$objects->count() > 2 ? '' : 'd-none'}} position-absolute clearfix">
                    <div class="prev  last_property_prev"><i class="fa fa-angle-left"></i></div>
                    <div class="next last_property_next"><i class="fa fa-angle-right"></i></div>
                </div>

                <div class="last_property_slider slider_box">

                    @foreach($objects as $key => $object)
                        @if($key < 6 )

                            <div class="slide_wrapper estate_container  d-flex">
                                <div class="slide_img_box position-relative estate_container_img"
                                     style="background-image: url(/img/objects/{{$object->objectphotos->first() ? $object->objectphotos->first()->file : 'estate.jpg'}})">
                                    <a href="{{route('objectsDetail', $object->slug)}}" class="estate_link clearfix">
                                        <div class="operation_type position-absolute">{{$object->objectoperation->operation}}</div>
                                    </a>
                                </div>
                                <div class="slide_description position-relative">
                                    <h4>
                                        <a href="{{route('objectsDetail', $object->slug)}}">{{$object->title}}</a>
                                    </h4>
                                    <p>{!! str_limit(strip_tags($object->body),50) !!}</p>
                                    <span class="position-absolute property_id"><i
                                                class="fa fa-hashtag"></i>{{$object->id}}</span>
                                </div>
                            </div>
                        @endif
                    @endforeach

                    @endif


                </div>
        </div>
    </section>
@endsection
{{--@section('user-message')--}}
{{--@include('includes.user-message')--}}
{{--@endsection--}}