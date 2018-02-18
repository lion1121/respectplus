@extends('layouts.admin')

@section('content')
    <h3 class="main_title">Список сообщений пользователей</h3>
    <table class="table">
        <thead>
        <tr>
            <th>Id</th>
            <th>Телефон</th>
            <th>Текст</th>
            <th>Состояние</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        @if($messages)
            @foreach($messages as $message)
                <tr>
                    <td>{{$message->id}}</td>
                    <td>{{$message->user_phone}}</td>
                    <td>{{str_limit($message->text)}}</td>
                    <td>
                        @if($message->is_active == 0)
                            <span>Прочитано</span>
                        @else
                            <span class="pulsar"><strong>Новое сообщение</strong></span>
                        @endif
                    </td>
                    <td><a href="{{route('messages.show', $message->id)}}" class="btn btn-info">Открыть</a></td>
                    <td>
                        {!! Form::model($message,['method'=>'DELETE', 'action'=>['AdminMessageController@destroy', $message->id]]) !!}

                        <div class="form-group">
                            {!! Form::submit('Удалить', ['class'=>'btn btn-danger']) !!}
                        </div>

                        {!! Form::close() !!}
                    </td>
                </tr>
            @endforeach
        @endif
        </tbody>
    </table>
@endsection