@extends('layouts.admin')

@section('content')

    <h3 class="main_title">Изменить данные пользователя</h3>

    <form action="{{ action('AdminUserController@update',['id' => $user->id]) }}" method="PATCH"
          enctype="multipart/form-data">
        {{ csrf_field() }}
        <input type="hidden" value="{{$user->id}}" class="userId">
        <div class="form-group row">
            <label for="newUserSurname" class="col-sm-2 col-form-label col-form-label-lg">Фамилия</label>
            <div class="col-sm-10">
                <input type="text" class="form-control form-control-lg" value="{{$user->surname}}" id="newUserSurname"
                       name="surname"
                       placeholder="Фамилия">
            </div>
        </div>
        <div class="form-group row">
            <label for="newUserName" class="col-sm-2 col-form-label col-form-label-lg">Имя</label>
            <div class="col-sm-10">
                <input type="text" class="form-control form-control-lg" value="{{$user->name}}" id="newUserName"
                       name="name"
                       placeholder="Имя">
            </div>
        </div>
        <div class="form-group row">
            <label for="newUserPatronymic" class="col-sm-2 col-form-label col-form-label-lg">Отчество</label>
            <div class="col-sm-10">
                <input type="text" value="{{$user->patronymic}}" class="form-control form-control-lg"
                       id="newUserPatronymic" name="patronymic"
                       placeholder="Отчество">
            </div>
        </div>
        <div class="form-group row">
            <label for="newUsername" class="col-sm-2 col-form-label col-form-label-lg">Username</label>
            <div class="col-sm-10">
                <input type="text" class="form-control form-control-lg" value="{{$user->username}}" id="newUsername"
                       name="username"
                       placeholder="Username">
            </div>
        </div>
        <div class="form-group row">
            <label for="newUserPassword" class="col-sm-2 col-form-label col-form-label-lg">Пароль</label>
            <div class="col-sm-10">
                <input type="password" class="form-control form-control-lg" id="newUserPassword" name="password"
                       placeholder="Пароль">
            </div>
        </div>
        <div class="form-group row">
            <label for="lgFormGroupInput" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control form-control-lg" value="{{$user->email}}" name="email"
                       id="lgFormGroupInput"
                       placeholder="E-mail">
            </div>
        </div>
        <div class="form-group row align-items-top">
            <label for="smFormGroupInput" class=" col-sm-2 col-form-label col-form-label-lg">Телефон
                <button class="btn-success btn d-inline-block ml-4  add_new_phone_btn" id="add_new_phone"><i
                            class="fa fa-plus"></i></button>
            </label>
            <div class="col-sm-10 users_phone_box clearfix">
                @if($phones->count() > 0)
                    <div class="position-relative new_users_phone clearfix">
                        <input type="text" value="{{$phones->first()->number}}"
                               class="form-control admin_phone_input form-control-lg d-inline-block  pull-right  w-100"
                               name="phone"
                               id="{{$phones->first()->id}}" placeholder="введите телефон">
                    </div>
                    @foreach($phones->slice(1) as $phone)
                        <div class="position-relative new_users_phone clearfix">
                            <button class="btn btn-danger d-inline-block admin_phone_input remove_phone_btn position-absolute"
                                    value="{{$phone->id}}" data-token="{{ csrf_token() }}"><i class="fa fa-minus"></i>
                            </button>
                            <input type="text" value="{{$phone->number}}"
                                   class="form-control form-control-lg d-inline-block  pull-right  w-100" name="phone"
                                   id="{{$phone->id}}" placeholder="введите телефон">
                        </div>
                    @endforeach
                @endif
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label col-form-label-lg" for="inlineFormCustomSelect">Роль</label>
            <div class="col-sm-10">
                <select class="custom-select mb-2 mr-sm-2 mb-sm-0 form-control-lg" name="role"
                        id="inlineFormCustomSelect">
                    <option selected>Выберите роль</option>
                    @foreach($roles as $role)
                        @if($user->role == $role))
                        <option value="{{$user->role->id}}" selected>{{$user->role->name}}</option>
                        @else
                            <option value="{{$role->id}}">{{$role->name}}</option>

                        @endif
                    @endforeach
                </select>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-10 offset-lg-2">

                <label for="newUserPhoto " class="col-sm-12 col-form-label col-form-label-lg">Выберите фото</label>
                <input type="file" class="form-control-file" id="newUserPhoto" name="photo" aria-describedby="fileHelp">
                <small id="fileHelp" class="form-text text-muted">Выбранное фото будет использваться в качестве
                    аватарки.
                </small>
            </div>
        </div>

        <div class="form-group row">

            <div class=" col-lg-5 clearfix">
                <button type="submit" class="btn btn-success pull-right">Изменить</button>
            </div>

        </div>
    </form>
    <form action="{{ action('AdminUserController@destroy',['id' => $user->id]) }}" method="post"
          class="offset-lg-2 col-lg-10 delete_form_box">
        {{ method_field('DELETE') }}
        {{ csrf_field() }}

        <div class=" col-lg-5 clearfix">
            <button type="submit" class="btn btn-danger pull-right">Удалить</button>
        </div>
    </form>
@endsection
