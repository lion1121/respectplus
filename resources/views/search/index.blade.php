@extends('layouts.app')
@section('content')
<section class="container-fluid no_pd no-gutters main_section bg-white pb-2">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="main_title">Результати пошуку</h3>

                @if(isset($answers))
                    @foreach($answers as $answer)
                        <p></p>
                    @endforeach
                @endif
            </div>
        </div>
    </div>

</section>



@endsection