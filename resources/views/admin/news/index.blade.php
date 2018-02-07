@extends('layouts.admin')

@section('content')
    <h3 class="main_title">Список новостей</h3>
    <div class="col-12">
        <table class="table">
            <thead>
            <tr>
                <th>Заголовок</th>
                <th>Автор</th>
                <th>Статус</th>
                <th>Дата публикации</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            @if(isset($news))
                @foreach($news as $note)
                    <tr>
                        <td>{{$note->title}}</td>
                        <td>{{$note->newsauthor ? $note->newsauthor->name . ' '.$note->newsauthor->surname : '-'}}</td>
                        <td>{{$note->is_active == 1 ? 'Опубликовано' : 'В ожидании публикации' }}</td>
                        <td>{{$note->created_at}}</td>
                        <td><a href="{{route('news.edit', $note->id)}}" class="btn btn-info">Изменить</a></td>
                    </tr>
                @endforeach
            @endif
            </tbody>
        </table>
    </div>
    <div class="row ">
        {{$news->links()}}
    </div>
@endsection