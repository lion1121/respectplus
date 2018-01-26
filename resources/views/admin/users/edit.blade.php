@extends('layouts.admin')

@section('content')

    <h3 class="main_title">Изменить данные пользователя</h3>

    {!! Form::model($user,['method'=>'PATCH', 'action'=>['AdminUserController@update',$user->id],'files'=>true]) !!}

    <div class="form-group row">
        {!! Form::label('surname','Фамилия', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::text('surname', $user->surname, ['class'=>'form-control form-control-lg','id' => 'newUserSurname','required','placeholder' => 'Фамилия']) !!}

        </div>
    </div>

    <div class="form-group row">
        {!! Form::label('newUserName','Имя', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::text('name', $user->name, ['class'=>'form-control form-control-lg','id' => 'newUserName','required','placeholder' => 'Имя']) !!}

        </div>
    </div>

    <div class="form-group row">
        {!! Form::label('newUserPatronymic','Отчество', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::text('patronymic', $user->patronymic, ['class'=>'form-control form-control-lg','id' => 'newUserPatronymic','required','placeholder' => 'Отчество']) !!}

        </div>
    </div>

    <div class="form-group row">
        {!! Form::label('newUsername','Username', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::text('username', $user->username, ['class'=>'form-control form-control-lg','id' => 'newUsername','required','placeholder' => 'Username']) !!}

        </div>
    </div>

    <div class="form-group row">
        {!! Form::label('newUserPassword','Пароль', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::password('password', ['class'=>'form-control form-control-lg','id' => 'newUserPassword','placeholder' => 'Пароль']) !!}

        </div>
    </div>

    <div class="form-group row">
        {!! Form::label('','Email', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::text('email', $user->email, ['class'=>'form-control form-control-lg','id' => '','required','placeholder' => 'Email']) !!}
        </div>
    </div>

    <div class="form-group  row d-flex align-items-top">
        <div class="col-sm-2 col-form-label col-form-label-lg">
            {!! Form::label('phone','Телефон', ['class' => '']) !!}
            <button class="btn-success btn d-inline-block ml-3 add_new_phone_btn" id="add_new_phone"><i
                        class="fa fa-plus"></i></button>
        </div>
        <div class="col-sm-10 users_phone_box clearfix">
            @if($phones->count() > 0)
                <div class="position-relative new_users_phone clearfix">
                    {!! Form::text('phone', $phones->first()->number, ['class'=>'form-control form-control-lg d-inline-block admin_phone_input  pull-right','id' => 'phone','required','placeholder' => 'введите телефон']) !!}
                </div>
            @endif

            @if($phones->get(1))
                <div class="position-relative new_users_phone users_phone_box clearfix">
                    <button class="btn btn-danger d-inline-block remove_phone_btn position-absolute"
                            value="{{$phones->get(1)->id}}" data-token="{{ csrf_token() }}"><i class="fa fa-minus"></i>
                    </button>
                    {!! Form::text('extraphone1', $phones->get(1)->number, ['class'=>'form-control form-control-lg d-inline-block admin_phone_input  pull-right','id' => 'phone0','required','placeholder' => 'введите телефон']) !!}
                </div>
            @endif

            @if($phones->get(2))
                <div class="position-relative new_users_phone users_phone_box clearfix">
                    <button class="btn btn-danger d-inline-block remove_phone_btn position-absolute"
                            value="{{$phones->get(2)->id}}" data-token="{{ csrf_token() }}"><i class="fa fa-minus"></i>
                    </button>

                    {!! Form::text('extraphone2', $phones->get(2)->number, ['class'=>'form-control form-control-lg d-inline-block admin_phone_input  pull-right','id' => 'phone1','required','placeholder' => 'введите телефон']) !!}
                </div>
            @endif

        </div>
    </div>

    <div class="form-group row">
        {!! Form::label('','Роль', ['class' => 'col-sm-2 col-form-label col-form-label-lg']) !!}
        <div class="col-sm-10">
            {!! Form::select('role',array(""=>$user->role->name) + $roles ,null,['class'=>'form-control form-control-lg d-inline-block']) !!}
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
        <div class="offset-sm-2 col-sm-10 clearfix edit_btn_box">
            {!! Form::submit('Изменить', ['class'=>'btn btn-success pull-right']) !!}
        </div>
    </div>

    {!! Form::close() !!}

    {!! Form::model($user,['method'=>'DELETE', 'action'=>['AdminUserController@destroy',$user->id]]) !!}
    <div class="offset-sm-2 col-sm-10 detele_tbn_box  pull-left">
        {!! Form::submit('Удалить', ['class'=>'btn btn-danger pull-right']) !!}
    </div>
    {!! Form::close() !!}

    @include('includes.formerrors')

@endsection
