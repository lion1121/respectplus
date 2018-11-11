
@switch($object->objecttype->id)
    @case(1)
        @section('title', 'Продажа квартир в Днепре. Объявление: ' . $object->title  )
        @section('description', 'Хотите купить квартиру в городе '.$object->objectplace->place.'? Объявление: ' . $object->title . ' | Агентство недвижимости RespectPlus' )
    @break

    @case(2)
        @section('title', 'Продажа квартир в городе '.$object->objectplace->place.'. Объявление: ' . $object->title  )
        @section('description', 'Хотите купить квартиру в городе '.$object->objectplace->place.'? Объявление: ' . $object->title . ' | Агентство недвижимости RespectPlus' )
    @break

    @case(3)
        @section('title', 'Продажа квартир в городе '.$object->objectplace->place.' . Объявление: ' . $object->title  )
        @section('description', 'Хотите купить квартиру в городе '.$object->objectplace->place.'? Объявление: ' . $object->title . ' | Агентство недвижимости RespectPlus' )
    @break

    @case(4)?
        @section('title', 'Продажа квартир в городе '.$object->objectplace->place.' . Объявление: ' . $object->title  )
        @section('description', 'Хотите купить квартиру в городе '.$object->objectplace->place.'? Объявление: ' . $object->title . ' | Агентство недвижимости RespectPlus' )
    @break

    @case(5)
        @section('title', 'Продажа квартир в городе '.$object->objectplace->place.' . Объявление: ' . $object->title  )
        @section('description', 'Хотите купить квартиру в городе '.$object->objectplace->place.'? Объявление: ' . $object->title . ' | Агентство недвижимости RespectPlus' )
    @break

    @case(6)
        @section('title', 'Продажа квартир в городе '.$object->objectplace->place.' . Объявление: ' . $object->title  )
        @section('description', 'Хотите купить квартиру в городе '.$object->objectplace->place.'? Объявление: ' . $object->title . ' | Агентство недвижимости RespectPlus' )
    @break

    @case(7)
        @section('title', 'Продажа домов в городе ' . $object->objectplace->place . ' Объявление: ' . $object->title  )
        @section('description', 'Хотите купить дом в '. $object->objectplace->place .'? Объявление: ' . $object->title . ' | Агентство недвижимости RespectPlus' )
    @break

    @case(10)
        @section('title', 'Продажа коммерческой недвижимости в городе ' . $object->objectplace->place . ' Объявление: ' . $object->title  )
        @section('description', 'Хотите купить коммерческую недвижимость в городе '. $object->objectplace->place .'? Объявление: ' . $object->title . ' | Агентство недвижимости RespectPlus' )
    @break
    @default
@endswitch

@section('description', 'Хотите купить '  )

@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-12">
                {{ Breadcrumbs::render('object',$object) }}
            </div>
        </div>
    </div>

    <section class="container-fluid no-gutters p-0 no_pd main_section first_section">

        <div class="container no_pd">
            <div class="row no_mg">
                <div class="col-sm-12 col-md-12 col-lg-9 bg-white">
                    <!--For main-->
                    <div id="blueimp-gallery" class="blueimp-gallery">
                        <div class="slides"></div>
                        <h3 class="title"></h3>
                        <a class="prev">‹</a>
                        <a class="next">›</a>
                        <a class="close">×</a>
                        <a class="play-pause"></a>
                        <ol class="indicator"></ol>
                    </div>
                    @if($object->objectphotos->count() > 0)
                        <div id="links" class="d-flex flex-wrap flex-row align-items-center justify-content-center ">
                            @if($object->objectphotos->count() > 1)
                                @foreach($object->objectphotos as $objectphoto)


                                    <div class="col-3 mt-2 mb-2 detail_img_box">
                                        <a class="" href="/img/objects/{{$objectphoto->file}}">
                                            <img class="img_responsive" src="/img/objects/{{$objectphoto->file}}"
                                                 alt="Estate">
                                        </a>
                                    </div>
                                @endforeach
                            @endif
                            @if($object->objectphotos->count() == 1)
                                @foreach($object->objectphotos as $objectphoto)


                                    <div class="col-12 detail_single_img">
                                        <a class="" href="/img/objects/{{$objectphoto->file}}">
                                            <img class="img_responsive" src="/img/objects/{{$objectphoto->file}}"
                                                 alt="Estate">
                                        </a>
                                    </div>
                                @endforeach
                            @endif

                        </div>
                    @else
                        <img src="/img/objects/estate.jpg" alt="" class="img_responsive">
                @endif



                <!--<div class="w-100 mt-2 mb-2 estate-separator-line "></div>-->
                    <div itemscope itemtype="http://schema.org/Offer" class="detail_property_description d-flex">
                        <div itemscope itemtype="http://schema.org/Place" class="detail_property_small">
                            <ul itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"
                                class="detail_property_list list-unstyled">
                                <li>
                                    <strong>Тип объекта: </strong>{{$object->objecttype->type}}
                                </li>
                                <li>
                                    @if($object->area !== null)
                                        <strong>Площадь: </strong>{{$object->area}} м<sup>2</sup>
                                    @endif

                                </li>
                                <li itemprop="addressLocality" itemprop="areaServed">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i> {{$object->objectplace->place}}
                                </li>
                                <li>
                                    @if($object->flat_count !== null)
                                        <i class="fa fa-bed" aria-hidden="true"></i> {{$object->flat_count}}
                                    @endif
                                </li>
                                <li>
                                    @if($object->floor !== null)
                                        <i class="fa fa-building" aria-hidden="true"></i> {{$object->floor}} эт.
                                    @endif
                                </li>
                                <li><i class="fa fa-hashtag" aria-hidden="true"></i><span>{{$object->id}}</span></li>
                            </ul>
                        </div>
                        <div class="detail_property_description_box">
                            <h3 itemprop="name" class="detail_property_description_title ">{{$object->title}}</h3>
                            <div itemprop="description">
                                <p class="detail_property_description_text">{!! $object->body !!}</p>
                            </div>
                        </div>
                        <div class="  d-lg-none d-md-block col-md-12 text-center mb-2">
                            <a href="{{route('objects')}}" class="search_back_link">вернуться к поиску</a>
                        </div>
                    </div>
                
                </div>
                <aside class="d-none d-lg-block col-lg-3">
                    <div class="sidebar_search bg-white">
                        <span class="sidebar_search_title">Поиск недвижимости</span>

                        {!! Form::open(['method'=>'POST', 'action'=>'AppController@find','class'=>'']) !!}
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fa fa-map-o"></i></div>
                            </div>
                            {!! Form::select('object_place_id',array(""=>'Месторасположение') + $objectPlaces ,null,['class'=>'custom-select mr-sm-2 sidebar_search_select']) !!}

                        </div>

                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fa fa-list"></i></div>
                            </div>

                            {!! Form::select('object_operation_id',array(""=>'Тип операции') + $objectOperations ,null,['class'=>'custom-select mr-sm-2 sidebar_search_select']) !!}

                        </div>


                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fa fa-building-o"></i></div>
                            </div>
                            {!! Form::select('object_type_id',array(""=>'Выберите тип объекта') + $objectTypes ,null,['class'=>'custom-select mr-sm-2 sidebar_search_select']) !!}

                        </div>

                        <label class="container-checkbox">Срочная продажа
                            <input type="checkbox" name="is_urgent">
                            <span class="checkmark"></span>
                        </label>
                        <button type="submit" name="findObject" class="btn mb-2 sidebar_search_btn">Найти</button>


                        {!! Form::close() !!}
                    </div>
                </aside>
            </div>
        </div>
    </section>
    {{--<script>--}}
    {{--document.getElementById('links').onclick = function (event) {--}}
    {{--event = event || window.event;--}}
    {{--var target = event.target || event.srcElement,--}}
    {{--link = target.src ? target.parentNode : target,--}}
    {{--options = {index: link, event: event},--}}
    {{--links = this.getElementsByTagName('a');--}}
    {{--blueimp.Gallery(links, options);--}}
    {{--};--}}
    {{--</script>--}}
@endsection