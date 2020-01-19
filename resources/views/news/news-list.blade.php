@section('title', 'Новини')
@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-12">
                {{ Breadcrumbs::render('news') }}
            </div>
        </div>
    </div>
    <section class="container-fluid no_pd no-gutters main_section bg-white pb-2" >
        <div class="container no_pd">
            <div class="row no_mg">
                @if(isset($news))
                    @foreach($news as $note)
                <article class="news_article_box clearfix d-block w-100">
                   <h3 class="main_title m-1"><a href="{{route('newsDetail', $note->slug)}}" class="news_title">{{$note->title}}</a></h3>
                    <span class="news_date">{{$note->created_at}}</span>
                    <p>{!! str_limit($note->body, 350) !!}</p>
                    <a href="{{route('newsDetail', $note->slug)}}" class="news_detail pull-right">далі...</a>
                </article>
                    @endforeach
                @endif
            </div>
        </div>

    </section>
<div class="container">
    <div class="row ">
        <div class="col-12 w-100 objects-pagination mt-3">
            {{$news->links()}}

        </div>
    </div>
</div>
@endsection
