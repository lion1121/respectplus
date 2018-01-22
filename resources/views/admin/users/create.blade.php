@extends('layouts.admin')

@section('content')

    <h3 class="main_title">Добавить пользователя</h3>

    <form action="{{ action('AdminUserController@store') }}" method="post" multiple="">
        {{ csrf_field() }}

        <div class="form-group row">
            <label for="newUserSurname" class="col-sm-2 col-form-label col-form-label-lg">Фамилия</label>
            <div class="col-sm-10">
                <input type="text" class="form-control form-control-lg" id="newUserSurname" name="newUserSurname"
                       placeholder="Фамилия">
            </div>
        </div>
        <div class="form-group row">
            <label for="newUserName" class="col-sm-2 col-form-label col-form-label-lg">Имя</label>
            <div class="col-sm-10">
                <input type="text" class="form-control form-control-lg" id="newUserName" name="newUserName"
                       placeholder="Имя">
            </div>
        </div>
        <div class="form-group row">
            <label for="newUserPatronymic" class="col-sm-2 col-form-label col-form-label-lg">Отчество</label>
            <div class="col-sm-10">
                <input type="text" class="form-control form-control-lg" id="newUserPatronymic" name="newUserPatronymic"
                       placeholder="Отчество">
            </div>
        </div>
        <div class="form-group row">
            <label for="newUsername" class="col-sm-2 col-form-label col-form-label-lg">Username</label>
            <div class="col-sm-10">
                <input type="text" class="form-control form-control-lg" id="newUsername" name="newUsername"
                       placeholder="Username">
            </div>
        </div>
        <div class="form-group row">
            <label for="newUserPassword" class="col-sm-2 col-form-label col-form-label-lg">Пароль</label>
            <div class="col-sm-10">
                <input type="text" class="form-control form-control-lg" id="newUserPassword" name="newUserPassword"
                       placeholder="Пароль">
            </div>
        </div>
        <div class="form-group row">
            <label for="lgFormGroupInput" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control form-control-lg" name="newUserEmail" id="lgFormGroupInput"
                       placeholder="E-mail">
            </div>
        </div>
        <div class="form-group row">
            <label for="smFormGroupInput" class=" col-sm-2 col-form-label col-form-label-lg">Телефон</label>

            <div class="col-sm-10 users_phone_box clearfix">
                <span class="btn-success btn d-inline-block   add_new_phone_btn" id="add_new_phone"> <i
                            class="fa fa-plus"></i> </span>
                <input type="text" class="form-control form-control-lg d-inline-block  pull-right admin_user_phone"
                       name="newUserPhone" id="smFormGroupInput"
                       placeholder="введите телефон">

            </div>
        </div>
        <div class="form-group row">

            <label class="col-sm-2 col-form-label col-form-label-lg" for="inlineFormCustomSelect">Роль</label>
            <div class="col-sm-10">
                <select class="custom-select mb-2 mr-sm-2 mb-sm-0 form-control-lg" id="inlineFormCustomSelect">
                    <option selected>Выберите роль</option>
                    @foreach($roles as $role)
                        <option value="{{$role->id}}">{{$role->name}}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-10">

                <label for="newUserPhoto " class="col-sm-2 col-form-label col-form-label-lg">File input</label>
                <input type="file" class="form-control-file" id="newUserPhoto" name="newUserPhoto" aria-describedby="fileHelp">
                <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the
                    above input. It's a bit lighter and easily wraps to a new line.
                </small>
            </div>
        </div>

        <div class="form-group row">
            <div class="offset-sm-2 col-sm-10 clearfix">
                <button type="submit" class="btn btn-success pull-right">Добавить</button>
            </div>
        </div>
    </form>
@endsection
