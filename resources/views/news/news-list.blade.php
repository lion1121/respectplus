@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-12">
                {{ Breadcrumbs::render('news') }}
            </div>
        </div>
    </div>
    <section class="container-fluid no_pd no-gutters main_section bg-white" style="height: 60vh;">
        <div class="container no_pd">
            <div class="row no_mg">
                @if(isset($news))
                    @foreach($news as $note)
                <article class="news_article_box clearfix d-block w-100">
                   <h3 class="main_title"><a href="{{route('newsDetail', $note->id)}}" class="news_title">{{$note->title}}</a></h3>
                    <span class="news_date">{{$note->created_at}}</span>
                    <p>{{strip_tags(str_limit($note->body))}}</p>
                    <a href="{{route('newsDetail', $note->id)}}" class="news_detail pull-right">подробнее...</a>
                </article>
                    @endforeach
                @endif
            </div>
        </div>

    </section>
<div class="container">
    <div class="row ">
        {{$news->links()}}
    </div>
</div>
@endsection
