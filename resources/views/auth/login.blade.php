@extends('layouts.app')

@section('content')
    <section class="container-fluid no_pd no-gutters main_section mt-5 mb-5">
        <div class="container no_pd">
            <div class="row no_mg">
                <div class="col-12">
                    <h3 class="main_title">Авторизация</h3>

                    <form method="POST" action="{{ route('login') }}">
                    {{ csrf_field() }}

                    <div class="form-group row {{ $errors->has('username') ? ' has-error' : '' }}">
                    <label for="login" class="col-sm-2 col-form-label">Логин</label>
                    <div class="col-sm-10">
                    <input id="username" type="text" class="form-control" name="email" value="{{ old('username') }}" required autofocus>
                    @if ($errors->has('username'))
                    <span class="help-block">
                    <strong>{{ $errors->first('username') }}</strong>
                    </span>
                    @endif
                    </div>
                    </div>
                    <div class="form-group row {{ $errors->has('password') ? ' has-error' : '' }}">
                    <label for="password" class="col-sm-2 col-form-label">Пароль</label>
                    <div class="col-sm-10">
                    <input id="password" type="password" class="form-control" name="password" required>

                    @if ($errors->has('password'))
                    <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                    </span>
                    @endif
                    </div>
                    </div>
                    <div class="form-group row">
                    <div class="offset-sm-2 col-sm-10 clearfix">
                    <button type="submit" class="btn btn-primary pull-right signin_btn ">Войти</button>
                    </div>
                    </div>
                    </form>



                    {{--{!! Form::open(['method'=>'POST', 'action'=>'Auth\LoginController@login']) !!}--}}

                    {{--<div class="form-group row {{ $errors->has('username') ? ' has-error' : '' }}">--}}
                        {{--{!! Form::label('login','Логин', ['class' => 'col-sm-2 col-form-label']) !!}--}}
                        {{--<div class="col-sm-10">--}}
                            {{--{!! Form::text('login', '', ['class'=>'form-control','id' => 'username','required','autofocus ']) !!}--}}
                            {{--@if ($errors->has('username'))--}}
                                {{--<span class="help-block">--}}
                                        {{--<strong>{{ $errors->first('username') }}</strong>--}}
                                    {{--</span>--}}
                            {{--@endif--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="form-group row {{ $errors->has('password') ? ' has-error' : '' }}">--}}
                        {{--{!! Form::label('password','Пароль', ['class' => 'col-sm-2 col-form-label']) !!}--}}
                        {{--<div class="col-sm-10">--}}
                            {{--{!! Form::password('password',  ['class'=>'form-control','id' => 'password','required']) !!}--}}
                            {{--@if ($errors->has('password'))--}}
                                {{--<span class="help-block">--}}
                                        {{--<strong>{{ $errors->first('password') }}</strong>--}}
                                    {{--</span>--}}
                            {{--@endif--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="form-group row">--}}
                        {{--<div class="offset-sm-2 col-sm-10 clearfix">--}}
                            {{--{!! Form::submit('Войти', ['class'=>'btn btn-primary pull-right signin_btn']) !!}--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--{!! Form::close() !!}--}}

                </div>
            </div>
        </div>
    </section>
@endsection
