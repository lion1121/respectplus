@extends('layouts.admin')

@section('content')
    <h3 class="main_title">Добавить новость</h3>
    {!! Form::open(['method'=>'POST', 'action'=>'AdminNewsController@store']) !!}
    <div class="form-group row">
        {!! Form::label('title','Заголовок:',['class' => 'col-sm-12 col-md-12 col-lg-12 col-xl-3 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8 position-relative">
            {!! Form::text('title', null, ['class'=>'form-control']) !!}
        </div>
    </div>
    <div class="form-group row">
        {!! Form::label('lgFormGroupInput','Текс новости', ['class' => 'col-sm-12 col-md-12 col-lg-12 col-xl-3 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8 position-relative">
            {!! Form::textarea('body',null,['class'=>'', 'id' => 'news']) !!}
        </div>
    </div>

    <div class="form-group row clearfix">
        <div class="col-11">
            {!! Form::submit('Изменить', ['class'=>'btn btn-success pull-right']) !!}
        </div>
    </div>

    {!! Form::close() !!}
@endsection

@section('extrajavascript')
    <script src="{{url('tinymce/js/tinymce/jquery.tinymce.min.js')}}"></script>
    <script src="{{url('tinymce/js/tinymce/tinymce.min.js')}}"></script>
    <script>tinymce.init({
            selector: '#news',
            plugins: 'advlist autolink link image lists charmap print preview',
            language: 'ru'
        });</script>
@endsection