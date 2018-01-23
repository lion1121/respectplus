@extends('layouts.admin')

@section('content')

    <h3 class="main_title">Список пользователей</h3>
    <table class="table table-hover">
        <thead>
        <tr>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Доступ</th>
        </tr>
        </thead>
        <tbody>
        @foreach($users as  $user)
            <tr>
                <td>{{$user->surname}}</td>
                <td>{{$user->name}}</td>
                <td>{{$user->patronymic}}</td>
                <td>{{$user->role->name}}</td>
                <td><a href="" class="btn btn-info">Изменить</a></td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection
