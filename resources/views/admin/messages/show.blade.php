@extends('layouts.admin')

@section('content')
    <h3 class="main_title">Просмтор сообщения</h3>
    <p class="w-100">Телефон отправителя: {{$message->user_phone}}</p>
    <p class="w-100">
        {{$message->text}}
    </p>


    <div class="col-6">
        {!! Form::model($message,['method'=>'DELETE', 'action'=>['AdminMessageController@destroy', $message->id]]) !!}

        <div class="form-group">
            {!! Form::submit('Удалить', ['class'=>'btn btn-danger']) !!}
        </div>

        {!! Form::close() !!}
    </div>

@endsection