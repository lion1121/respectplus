@extends('layouts.admin')

@section('content')

    <h3 class="main_title">Список объектов</h3>

    <form action="">

    </form>

    <table class="table">

        <thead>
        <tr>
            <th>id</th>
            <th>заголовок</th>
            <th>тип объекта</th>
            <th>тип операции</th>
            <th>месторасположение</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        @if($objects->count() > 0)
            @foreach($objects as $object)
                <tr>
                    <td>{{$object->id}}</td>
                    <td>{{$object->title}}</td>
                    <td>{{$object->object_type_id}}</td>
                    <td>{{$object->objectoperation->operation}}</td>
                    <td>{{$object->object_place_id}}</td>
                    <td><button class="btn btn-info">Изменить</button></td>
                </tr>
            @endforeach
        @endif
        </tbody>

    </table>
@endsection