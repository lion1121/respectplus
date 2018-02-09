@extends('layouts.app')

@section('content')
    <section class="container-fluid no-gutters no_pd main_section">
        <div class="container no_pd">
            <div class="row no_mg estate_wrapper">
                @if(isset($objects))
                    @foreach($objects as $object)
                        <div class="estate_container w-100 d-flex">
                            <div class="estate_container_img position-relative"
                                 style="background-image: url(img/objects/{{$object->objectphotos->first() ? $object->objectphotos->first()->file : 'estate.jpg'}})">
                                <a href="#" class="estate_link">
                                    <div class="operation_type position-absolute">срочно</div>
                                </a>
                                <div class="estate_img_inner"><i class="fa fa-eye" aria-hidden="true"></i></div>
                            </div>
                            <div class="estate_container_description bg-white position-relative">
                                <a href="#" class="estate_description_title">{{$object->title}}</a>
                                <div class="estate_description_text">{!!str_limit($object->body, 350)!!}</div>
                                <div class="estate_info position-relative d-flex position-absolute">
                                    <div class="estate-separator-line  w-100"></div>
                                    <span class="estate_icon"><strong>Площадь: </strong>{{$object->area}} m<sup>2</sup></span>
                                    <span class="estate_icon"><i class="fa fa-bed" aria-hidden="true"></i> {{$object->flat_count}}</span>
                                    <span class="estate_icon"><i class="fa fa-building" aria-hidden="true"></i>{{$object->floor}}</span>
                                    <span class=" property_id estate_icon"><i class="fa fa-hashtag"></i>:{{$object->id}}</span>
                                </div>
                            </div>
                        </div>

                    @endforeach
                @endif


            </div>
        </div>
    </section>

@endsection