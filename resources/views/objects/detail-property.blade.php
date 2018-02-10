@extends('layouts.app')

@section('content')
    <section class="container-fluid no-gutters no_pd main_section first_section">
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
                    @if(isset($object->objectphotos))
                        <div id="links" class="d-flex flex-wrap flex-row align-items-center justify-content-around">
                            @if(isset($object))
                                @foreach($object->objectphotos as $objectphoto)


                                    <a class="" href="/img/objects/{{$objectphoto->file}}" style="width: 200px;">
                                        <img class="img_responsive" src="/img/objects/{{$objectphoto->file}}"
                                             alt="Banana">
                                    </a>

                                @endforeach
                        </div>
                    @endif



                <!--<div class="w-100 mt-2 mb-2 estate-separator-line "></div>-->
                    <div class="detail_property_description d-flex">
                        <div class="detail_property_small">
                            <ul class="detail_property_list list-unstyled">
                                <li><strong>Тип объекта: </strong>{{$object->objecttype->type}}</li>
                                <li><strong>Площадь: </strong>{{$object->area}} m<sup>2</sup></li>
                                <li><i class="fa fa-map-marker" aria-hidden="true"></i> {{$object->objectplace->place}}
                                </li>
                                <li><i class="fa fa-bed" aria-hidden="true"></i> {{$object->flat_count}}</li>
                                <li><i class="fa fa-building" aria-hidden="true"></i> {{$object->floor}} эт.</li>
                                <li><i class="fa fa-hashtag" aria-hidden="true"></i><span>{{$object->id}}</span></li>
                            </ul>
                        </div>
                        <div class="detail_property_description_box">
                            <h3 class="detail_property_description_title ">{{$object->title}}</h3>
                            <p class="detail_property_description_text">{{strip_tags($object->body)}}</p>
                        </div>
                        <div class="  d-lg-none d-md-block col-md-12 text-center mb-2">
                            <a href="#" class="search_back_link">вернуться к поиску</a>
                        </div>
                    </div>
                    @endif
                </div>
                <aside class="d-none d-lg-block col-lg-3">
                    <div class="sidebar_search bg-white">
                        <span class="sidebar_search_title">Поиск недвижимости</span>
                        <form action="" class=" ">
                            <label class="sr-only" for="inlineFormCustomSelect">Username</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-map-o"></i></div>
                                </div>
                                <select class="custom-select mr-sm-2 sidebar_search_select" id="inlineFormCustomSelect">
                                    <option selected>Место расположение</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <label class="sr-only" for="inlineFormCustomSelect">Username</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-list"></i></div>
                                </div>
                                <select class="custom-select mr-sm-2 sidebar_search_select" id="inlineFormCustomSelect">
                                    <option selected>Тип операции</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <label class="sr-only" for="inlineFormCustomSelect">Username</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-building-o"></i></div>
                                </div>
                                <select class="custom-select mr-sm-2 sidebar_search_select" id="inlineFormCustomSelect">
                                    <option selected>Тип объекта</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <label class="container-checkbox">Срочная продажа
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <button type="submit" class="btn mb-2 sidebar_search_btn">Найти</button>
                        </form>
                    </div>
                </aside>
            </div>
        </div>
    </section>
    <script>
        document.getElementById('links').onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement,
                link = target.src ? target.parentNode : target,
                options = {index: link, event: event},
                links = this.getElementsByTagName('a');
            blueimp.Gallery(links, options);
        };
    </script>
@endsection