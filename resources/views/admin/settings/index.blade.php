@extends('layouts.admin')
@section('content')
    <h3 class="main_title">Параметры сайта</h3>

    <table class="table ">
        <thead>
        <tr>
            <th>Параметр</th>
            <th>Данные</th>
        </tr>
        </thead>
        <tbody>
        @foreach($parameters as $parameter)

            <tr>
                <td>
                   {{$parameter->parameter}}
                </td>
                <td>
                    {!! Form::model($parameter,['method'=>'PATCH', 'action'=>['SettingController@update', $parameter->id], 'class' => 'form-inline']) !!}
                    <div class="form-group ">
                        {!! Form::text($parameter->parameter, $parameter->data, ['class'=>'form-control admin_setting_input']) !!}
                    </div>
                    <div class="form-group ">
                        {!! Form::submit('Изменить', ['class'=>'btn btn-primary']) !!}

                    </div>

                    {!! Form::close() !!}
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
        <h5 class="main_title">Счетчик tinyPNG</h5>
    <p>Использовано {{$compressionsThisMonth}} из 500</p>
@endsection