@extends('layouts.app')

@section('content')
    <section class="container-fluid no-gutters no_pd main_section bg-white">
        <h3 class="text-center main_title">Поиск недвижимости</h3>
        <div class="row quick_search_wrapper no_mg">

            {!! Form::open(['method'=>'GET', 'action'=>'AppController@objects','class'=>'form-inline']) !!}
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
                    {!! Form::submit('Найти', ['class'=>'btn btn-primary mb-2 quick_search_btn pull-right']) !!}
                </div>
            </div>

            {!! Form::close() !!}


        </div>
    </section>

    <section class="container-fluid no-gutters no_pd main_section">
        <div class="container no_pd">
            <div class="row no_mg estate_wrapper">
                @if($objects->count() > 0)
                    <h3 class="main_title">Объекты</h3>
                    <p class="w-100">
                        {{$objectsCount == 1 ? 'Найден ' .$objectsCount . 'объект' : 'Найдено ' . $objectsCount . ' объектов'}}
                    </p>
                    @foreach($objects as $object)
                        <div class="estate_container w-100 d-flex">
                            <div class="estate_container_img position-relative"
                                 style="background-image: url(img/objects/{{$object->objectphotos->first() ? $object->objectphotos->first()->file : 'estate.jpg'}})">
                                <a href="{{route('property', $object->id)}}" class="estate_link">
                                    @if($object->is_urgent)
                                    <div class="operation_type position-absolute">срочно</div>
                                    @endif
                                </a>
                                <div class="estate_img_inner"><i class="fa fa-eye" aria-hidden="true"></i></div>
                            </div>
                            <div class="estate_container_description bg-white position-relative">
                                <a href="{{route('property',$object->id)}}" class="estate_description_title">{{$object->title}}</a>
                                <div class="estate_description_text">{!!str_limit($object->body, 350)!!}</div>
                                <div class="estate_info position-relative d-flex position-absolute">
                                    <div class="estate-separator-line  w-100"></div>
                                    <span class="estate_icon">
                                        @if($object->area !== null)
                                            <strong>Площадь: </strong>{{$object->area}} m<sup>2</sup>
                                        @endif
                                    </span>
                                    <span class="estate_icon">
                                        @if($object->flat_count !== null)
                                            <i class="fa fa-bed" aria-hidden="true"></i> {{$object->flat_count}}
                                        @endif
                                    </span>
                                    <span class="estate_icon">
                                         @if($object->floor !== null)
                                            <i class="fa fa-building" aria-hidden="true"></i> {{$object->floor}} эт.
                                        @endif
                                    </span>
                                    <span class=" property_id estate_icon"><i class="fa fa-hashtag"></i>:{{$object->id}}</span>
                                </div>
                            </div>
                        </div>

                    @endforeach
                @else
                    <div class="alert-info w-100">
                        <P class="text-center pt-5 pb-5">
                            По данному запросу не найдено совпадений
                        </P>
                    </div>

                @endif

                <div class="w-100 objects-pagination ">

                    {{$objects->appends(request()->input())->links()}}

                </div>
            </div>

        </div>
    </section>

@endsection