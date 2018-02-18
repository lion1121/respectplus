@extends('layouts.admin')

@section('content')
    <div class="row d-flex align-items-top">
        <h3 class="main_title mr-5">Список объектов</h3>

        {{--        {!! Form::model(['method'=>'POST', 'action'=>['AdminObjectController@index']]) !!}--}}
        {!! Form::open(['method' => 'get','url' => 'admin/objects']) !!}
        <div class="d-inline-block">
            {!! Form::text('s', $s ? $s : '', ['class'=>'form-control','id' => 'phone0','placeholder' => 'поиск по id']) !!}
        </div>
        <div class="d-inline-block">
            {!! Form::submit('Поиск', ['class'=>'btn btn-info ']) !!}
        </div>

        {!! Form::close() !!}
    </div>

    <table class="table table-hover table-striped text-center">

        <thead>
        <tr>
            <th>id</th>
            <th>заголовок</th>
            <th>тип объекта</th>
            <th>тип операции</th>
            <th>месторасположение</th>
            <th>Статус</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        @if($objects->count() > 0)
            @foreach($objects as $object)
                <tr>
                    <td>{{$object->id}}</td>
                    <td>{{$object->title}}</td>
                    <td>{{$object->objecttype->type}}</td>
                    <td>{{$object->objectoperation->operation}}</td>
                    <td>{{$object->objectplace->place}}</td>
                    <td>
                        @if($object->is_active == 1)
                            Опубликовано
                        @else
                            Не опубликованно
                        @endif
                    </td>
                    <td>
                        <a href="{{route('objects.edit', str_replace('0','',$object->id))}}" class="btn btn-info">Изменить</a>
                    </td>
                </tr>
            @endforeach
        @endif
        </tbody>

    </table>

    <div class="row ">
        {{$objects->links()}}
    </div>
@endsection