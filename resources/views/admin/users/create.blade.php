@extends('layouts.admin')

@section('content')

    <h3 class="main_title">Добавить пользователя</h3>

    {{--<form action="{{ action('AdminUserController@store') }}" method="post" enctype="multipart/form-data">--}}
    {{--        {{ csrf_field() }}--}}

    {{--<div class="form-group row">--}}
    {{--<label for="newUserSurname" class="col-sm-2 col-form-label col-form-label-lg">Фамилия</label>--}}
    {{--<div class="col-sm-10">--}}
    {{--<input type="text" class="form-control form-control-lg" id="newUserSurname" name="surname"--}}
    {{--placeholder="Фамилия">--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="form-group row">--}}
    {{--<label for="newUserName" class="col-sm-2 col-form-label col-form-label-lg">Имя</label>--}}
    {{--<div class="col-sm-10">--}}
    {{--<input type="text" class="form-control form-control-lg" id="newUserName" name="name"--}}
    {{--placeholder="Имя">--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="form-group row">--}}
    {{--<label for="newUserPatronymic" class="col-sm-2 col-form-label col-form-label-lg">Отчество</label>--}}
    {{--<div class="col-sm-10">--}}
    {{--<input type="text" class="form-control form-control-lg" id="newUserPatronymic" name="patronymic"--}}
    {{--placeholder="Отчество">--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="form-group row">--}}
    {{--<label for="newUsername" class="col-sm-2 col-form-label col-form-label-lg">Username</label>--}}
    {{--<div class="col-sm-10">--}}
    {{--<input type="text" class="form-control form-control-lg" id="newUsername" name="username"--}}
    {{--placeholder="Username">--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="form-group row">--}}
    {{--<label for="newUserPassword" class="col-sm-2 col-form-label col-form-label-lg">Пароль</label>--}}
    {{--<div class="col-sm-10">--}}
    {{--<input type="password" class="form-control form-control-lg" id="newUserPassword" name="password"--}}
    {{--placeholder="Пароль">--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="form-group row">--}}
    {{--<label for="lgFormGroupInput" class="col-sm-2 col-form-label col-form-label-lg">Email</label>--}}
    {{--<div class="col-sm-10">--}}
    {{--<input type="email" class="form-control form-control-lg" name="email" id="lgFormGroupInput"--}}
    {{--placeholder="E-mail">--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="form-group row">--}}
    {{--<label for="smFormGroupInput" class=" col-sm-2 col-form-label col-form-label-lg">Телефон--}}
    {{--<button class="btn-success btn d-inline-block ml-4  add_new_phone_btn" id="add_new_phone"><i--}}
    {{--class="fa fa-plus"></i></button>--}}
    {{--</label>--}}

    {{--<div class="col-sm-10 users_phone_box clearfix">--}}
    {{--<div class="position-relative new_users_phone clearfix">--}}

    {{--<input type="text"--}}
    {{--class="form-control form-control-lg d-inline-block admin_phone_input  pull-right "--}}
    {{--name="phone" id="phone"--}}
    {{--placeholder="введите телефон"></div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="form-group row">--}}

    {{--<label class="col-sm-2 col-form-label col-form-label-lg" for="inlineFormCustomSelect">Роль</label>--}}
    {{--<div class="col-sm-10">--}}
    {{--<select class="custom-select mb-2 mr-sm-2 mb-sm-0 form-control-lg" name="role"--}}
    {{--id="inlineFormCustomSelect">--}}
    {{--<option selected>Выберите роль</option>--}}
    {{--@foreach($roles as $role)--}}
    {{--<option value="{{$role->id}}">{{$role->name}}</option>--}}
    {{--@endforeach--}}
    {{--</select>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--<div class="form-group row">--}}
    {{--<div class="col-sm-10">--}}

    {{--<label for="newUserPhoto " class="col-sm-2 col-form-label col-form-label-lg">Выберите фото</label>--}}
    {{--<input type="file" class="form-control-file" id="newUserPhoto" name="photo" aria-describedby="fileHelp">--}}
    {{--<small id="fileHelp" class="form-text text-muted">Выбранное фото будет использваться в качестве--}}
    {{--аватарки.--}}
    {{--</small>--}}
    {{--</div>--}}
    {{--</div>--}}

    {{--<div class="form-group row">--}}
    {{--<div class="offset-sm-2 col-sm-10 clearfix">--}}
    {{--<button type="submit" class="btn btn-success pull-right">Добавить</button>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</form>--}}



    {!! Form::open(['method'=>'POST', 'action'=>'AdminUserController@store','files'=>true]) !!}

    <div class="form-group row">
        {!! Form::label('surname','Фамилия', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::text('surname', '', ['class'=>'form-control form-control-lg','id' => 'newUserSurname','required','placeholder' => 'Фамилия']) !!}

        </div>
    </div>

    <div class="form-group row">
        {!! Form::label('newUserName','Имя', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::text('name', '', ['class'=>'form-control form-control-lg','id' => 'newUserName','required','placeholder' => 'Имя']) !!}

        </div>
    </div>

    <div class="form-group row">
        {!! Form::label('newUserPatronymic','Отчество', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::text('patronymic', '', ['class'=>'form-control form-control-lg','id' => 'newUserPatronymic','required','placeholder' => 'Отчество']) !!}

        </div>
    </div>

    <div class="form-group row">
        {!! Form::label('newUsername','Username', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::text('username', '', ['class'=>'form-control form-control-lg','id' => 'newUsername','required','placeholder' => 'Username']) !!}

        </div>
    </div>

    <div class="form-group row">
        {!! Form::label('newUserPassword','Пароль', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::password('password',  ['class'=>'form-control form-control-lg','id' => 'newUserPassword','required','placeholder' => 'Пароль']) !!}

        </div>
    </div>

    <div class="form-group row">
        {!! Form::label('lgFormGroupInput','Email', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::text('email', '', ['class'=>'form-control form-control-lg','id' => 'lgFormGroupInput','required','placeholder' => 'Email']) !!}
        </div>
    </div>

    <div class="form-group  row d-flex align-items-top">
        <div class="col-sm-2 col-form-label col-form-label-lg">
            {!! Form::label('lgFormGroupInput','Телефон', ['class' => '']) !!}
            <button class="btn-success btn d-inline-block add_new_phone_btn" id="add_new_phone"><i
                        class="fa fa-plus"></i></button>
        </div>
        <div class="col-sm-10 users_phone_box clearfix">
            <div class="position-relative new_users_phone clearfix">
                {!! Form::text('phone', '', ['class'=>'form-control form-control-lg d-inline-block admin_phone_input  pull-right','id' => 'lgFormGroupInput','required','placeholder' => 'введите телефон']) !!}
            </div>
        </div>
    </div>

    <div class="form-group row">
        {!! Form::label('lgFormGroupInput','Роль', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::select('role',array(''=>'Выберите роль') + $roles ,null,['class'=>'form-control form-control-lg d-inline-block']) !!}
        </div>
    </div>

    <div class="form-group row">
        <div class="col-sm-10">
            {!! Form::label('newUserPhoto','Выберите фото', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}

            {!! Form::file('photo', null, ['class'=>'form-control','id' => 'newUserPhoto']) !!}

            <small id="fileHelp" class="form-text text-muted">Выбранное фото будет использваться в качестве
                аватарки.
            </small>
        </div>
    </div>
    <div class="form-group row">
        <div class="offset-sm-2 col-sm-10 clearfix">
            {!! Form::submit('Добавить', ['class'=>'btn btn-success pull-right']) !!}
        </div>
    </div>

    {!! Form::close() !!}
    @include('includes.cropCreate')
    @include('includes.formerrors')

@endsection
