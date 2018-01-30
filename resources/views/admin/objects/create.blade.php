@extends('layouts.admin')

@section('content')
    <h3 class="main_title">Добавить объект</h3>

    <div class="row d-flex align-items-lg-top">
        <div class=" col-6">
            {!! Form::open(['method'=>'POST', 'action'=>['AdminObjectController@store']]) !!}
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Тип операции', ['class' => 'col-sm-4 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-6 position-relative">
                    {!! Form::select('operation',array(""=>'Выберите операцию') + $objectOperation ,null,['class'=>'form-control form-control-lg d-inline-block']) !!}
                    <button class="btn btn-info position-absolute custom_field_add_btn" value="operation" type="button"><i
                                class="fa fa-plus"></i></button>
                </div>
            </div>
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Тип объекта', ['class' => 'col-sm-4 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-6 position-relative">
                    {!! Form::select('type',array(""=>'Выберите тип объекта') + $objectType ,null,['class'=>'form-control form-control-lg d-inline-block']) !!}
                    <button class="btn btn-info position-absolute custom_field_add_btn" value="type" type="button"><i
                                class="fa fa-plus" ></i></button>
                </div>
            </div>
            {!! Form::close() !!}
        </div>
        <div class="col-6 ">
            <div class="d-none add_operation">{!! Form::open(['method'=>'POST', 'action'=>['AdminOperationController@store']]) !!}
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
    </div>
@endsection