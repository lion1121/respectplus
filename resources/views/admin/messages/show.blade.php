@extends('layouts.admin')

@section('content')
    <h3 class="main_title">Просмотр сообщения</h3>
    <p class="w-100">Телефон отправителя: {{$message->user_phone}}</p>
    <p class="w-100">E-mail отправителя: {{$message->email}}</p>

    <p class="w-100">
        {{$message->text}}
    </p>


    <div class="col-12">
        {!! Form::model($message,['method'=>'DELETE', 'action'=>['AdminMessageController@destroy', $message->id]]) !!}

        <div class="form-group row ">
            <div class="col-12 clearfix">
            {!! Form::submit('Удалить', ['class'=>'btn btn-danger pull-right']) !!}
            </div>
        </div>

        {!! Form::close() !!}
    </div>

@endsection