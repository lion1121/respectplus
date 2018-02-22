@extends('layouts.admin')

@section('content')
    <div class="row ">
        <h3 class="main_title mr-5">Настройки атрибутов объекта</h3>
    </div>
    <div class="row d-flex flex-row">
        <div class="сщд-md-12  col-lg-12 col-xl-6  order-xl-first ">
            <table class="table  table-striped">
                @if(Session::has('remove_attr'))
                    <div class="alert alert-warning">
                        <p>{{session('remove_attr')}}
                            <br> Атрибут может быть удален, если за ним не будет закреплен ни один объект! </p>
                    </div>
                @endif
                <thead>
                <tr>
                    <th>Тип операции</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @if(isset($operationList))
                    @foreach($operationList as $operation)
                        <tr>
                            <td>
                                {!! Form::model($operation,['method'=>'PATCH', 'action'=>['AdminOperationController@update',$operation->id]]) !!}
                                <div class="form-group row">
                                    <div class="col-sm-6">
                                        {!! Form::text('operation', $operation->name,['class'=>'form-control form-control-lg d-inline-block']) !!}
                                    </div>
                                    <div class="col-sm-4">
                                        {!! Form::submit('Изменить', ['class'=>'btn btn-success ']) !!}
                                    </div>
                                </div>
                                {!! Form::close() !!}
                            </td>
                            <td>
                                {!! Form::model($operation,['method'=>'DELETE', 'action'=>['AdminOperationController@destroy',$operation->id]]) !!}
                                {!! Form::submit('Удалить', ['class'=>'btn btn-danger']) !!}
                                {!! Form::close() !!}
                            </td>
                        </tr>
                    @endforeach
                @endif
                </tbody>
            </table>
        </div>
        <div class="сщд-md-12 col-lg-12 col-xl-6  order-lg-first">
            {!! Form::open(['method'=>'POST', 'action'=>['AdminOperationController@store']]) !!}
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Добавить операцию', ['class' => 'col-sm-4 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-4">
                    {!! Form::text('operation',null,['class'=>'form-control form-control-lg d-inline-block']) !!}
                </div>
                <div class="col-sm-4">
                    {!! Form::submit('Добавить', ['class'=>'btn btn-success ']) !!}
                </div>
            </div>
            {!! Form::close() !!}
        </div>


    </div>
    <div class="row d-flex flex-row">
        <div class="col-lg-6 col-lg-12 col-xl-6  order-xl-first">
            <table class="table table-striped">
                @if(Session::has('remove_attr_type'))
                    <div class="alert alert-warning">
                        <p>{{session('remove_attr_type')}}
                            <br> Атрибут может быть удален, если за ним не будет закреплен ни один объект! </p>
                    </div>
                @endif
                <thead>
                <tr>
                    <th>Тип объекта</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @if(isset($typeList))
                    @foreach($typeList as $type)
                        <tr>
                            <td>
                                {!! Form::model($type,['method'=>'PATCH', 'action'=>['AdminTypeController@update',$type->id]]) !!}
                                <div class="form-group row">
                                    <div class="col-sm-6">
                                        {!! Form::text('type', $type->type,['class'=>'form-control form-control-lg d-inline-block']) !!}
                                    </div>
                                    <div class="col-sm-6">
                                        {!! Form::submit('Изменить', ['class'=>'btn btn-success ']) !!}
                                    </div>
                                </div>
                                {!! Form::close() !!}
                            </td>
                            <td>
                                {!! Form::model($type,['method'=>'DELETE', 'action'=>['AdminTypeController@destroy',$type->id]]) !!}
                                {!! Form::submit('Удалить', ['class'=>'btn btn-danger']) !!}
                                {!! Form::close() !!}
                            </td>
                        </tr>
                    @endforeach
                @endif
                </tbody>
            </table>
        </div>
        <div class="col-lg-6 col-lg-12 col-xl-6  order-lg-first">
            {!! Form::open(['method'=>'POST', 'action'=>['AdminTypeController@store']]) !!}
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Добавить тип объекта', ['class' => 'col-sm-4 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-4">
                    {!! Form::text('type',null,['class'=>'form-control form-control-lg d-inline-block']) !!}
                </div>
                <div class="col-sm-4">
                    {!! Form::submit('Добавить', ['class'=>'btn btn-success ']) !!}
                </div>
            </div>
            {!! Form::close() !!}
        </div>


    </div>
    <div class="row d-flex flex-row">
        <div class="col-lg-6 col-lg-12 col-xl-6  order-xl-first">
            <table class="table table-striped">
                @if(Session::has('remove_attr_place'))
                    <div class="alert alert-warning">
                        <p>{{session('remove_attr_place')}}
                            <br> Атрибут может быть удален, если за ним не будет закреплен ни один объект! </p>
                    </div>
                @endif
                <thead>
                <tr>
                    <th>Месторасположение</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @if(isset($placeList))
                    @foreach($placeList as $place)
                        <tr>
                            <td>
                                {!! Form::model($place,['method'=>'PATCH', 'action'=>['AdminPlaceController@update',$place->id]]) !!}
                                <div class="form-group row">
                                    <div class="col-sm-6">
                                        {!! Form::text('place', $place->place,['class'=>'form-control form-control-lg d-inline-block']) !!}
                                    </div>
                                    <div class="col-sm-6">
                                        {!! Form::submit('Изменить', ['class'=>'btn btn-success ']) !!}
                                    </div>
                                </div>
                                {!! Form::close() !!}
                            </td>
                            <td>
                                {!! Form::model($place,['method'=>'DELETE', 'action'=>['AdminPlaceController@destroy',$place->id]]) !!}
                                {!! Form::submit('Удалить', ['class'=>'btn btn-danger']) !!}
                                {!! Form::close() !!}
                            </td>
                        </tr>
                    @endforeach
                @endif
                </tbody>
            </table>
        </div>
        <div class="col-lg-6 col-lg-12 col-xl-6  order-lg-first">
            {!! Form::open(['method'=>'POST', 'action'=>['AdminPlaceController@store']]) !!}
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Добавить месторасположение', ['class' => 'col-sm-4 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-4">
                    {!! Form::text('place',null,['class'=>'form-control form-control-lg d-inline-block']) !!}
                </div>
                <div class="col-sm-4">
                    {!! Form::submit('Добавить', ['class'=>'btn btn-success ']) !!}
                </div>
            </div>
            {!! Form::close() !!}
        </div>


    </div>

@endsection