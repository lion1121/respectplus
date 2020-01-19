@section('title', 'Новини' . ' | ' . $news->title )

@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-12">
                {{ Breadcrumbs::render('new',$news) }}
            </div>
        </div>
    </div>
    <section class="container-fluid no_pd no-gutters main_section bg-white">
        <div class="container no_pd">
            <div class="row no_mg">
                @if(isset($news))
                    <h3 class="main_title">{{$news->title}}</h3>
                    <p class="news_date d-block w-100">{{$news->created_at}}</p>

                        {!! $news->body !!}

                @endif
            </div>
        </div>
    </section>
@endsection