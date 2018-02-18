@extends('layouts.admin')

@section('content')
    <h3 class="main_title">Редактировать объект</h3>

    <div class="row d-flex align-items-lg-top">
        <div class=" col-12">
            {!! Form::model($object,['method'=>'PATCH', 'action'=>['AdminObjectController@update', $object->id],'files'=>true]) !!}
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Тип операции', ['class' => 'col-sm-3 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-7 position-relative">
                    {!! Form::select('object_operation_id',array(""=>'Выберите операцию') + $objectOperation ,null,['class'=>'form-control form-control-lg d-inline-block', 'required']) !!}
                    <button class="btn btn-info position-absolute custom_field_add_btn" value="operation" type="button">
                        <i
                                class="fa fa-plus"></i></button>
                </div>
            </div>
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Тип объекта', ['class' => 'col-sm-3 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-7 position-relative">
                    {!! Form::select('object_type_id',array(""=>'Выберите тип объекта') + $objectType ,null,['class'=>'form-control form-control-lg d-inline-block', 'required']) !!}
                    <button class="btn btn-info position-absolute custom_field_add_btn" value="type" type="button"><i
                                class="fa fa-plus"></i></button>
                </div>
            </div>
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Месторасположение объекта', ['class' => 'col-sm-3 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-7 position-relative">
                    {!! Form::select('object_place_id',array(""=>'Месторасположение') + $objectPlace ,null,['class'=>'form-control form-control-lg d-inline-block', 'required']) !!}
                    <button class="btn btn-info position-absolute custom_field_add_btn" value="place" type="button"><i
                                class="fa fa-plus"></i></button>
                </div>
            </div>


            <div class="form-group row ">
                <div class="form-group offset-3 col-3  d-flex align-items-center">
                    {!! Form::label('lgFormGroupInput','Кол-во комнат', ['class' => 'mr-2 fs_22 col-form-label ']) !!}
                    {!! Form::text('flat_count',null,['class'=>'form-control w_50   d-inline-block']) !!}
                </div>
                <div class="form-group col-3  d-flex align-items-center">
                    {!! Form::label('lgFormGroupInput','Площадь', ['class' => 'mr-2 fs_22 col-form-label ']) !!}
                    {!! Form::text('area',null,['class'=>'form-control  w_50  d-inline-block']) !!}
                </div>
                <div class="form-group col-43 d-flex align-items-center">
                    {!! Form::label('lgFormGroupInput','Этаж', ['class' => 'mr-2 fs_22 col-form-label ']) !!}
                    {!! Form::text('floor',null,['class'=>'form-control  w_50  d-inline-block']) !!}
                </div>
            </div>
            <div class="form-group row">
                <div class="form-group offset-3 col-4  d-flex align-items-center">

                    <label class="checkbox_container d-flex align-items-center">Опубликовать
                        <input type="checkbox"
                               name="is_active" {{($object->is_active == 1) ? "checked='checked'" :  ''}}>
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="form-group col-4  d-flex align-items-center">


                    <label class="checkbox_container d-flex align-items-center">Срочное
                        <input type="checkbox"
                               name="is_urgent" {{($object->is_urgent == 1) ? "checked='checked'" :  ''}}>
                        <span class="checkmark"></span>
                    </label>

                </div>
            </div>


            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Заголовок', ['class' => 'col-sm-3 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-8 position-relative">
                    {!! Form::text('title',null,['class'=>'form-control form-control-lg d-inline-block', 'required']) !!}
                </div>
            </div>
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Текс объяления', ['class' => 'col-sm-3 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-8 position-relative">
                    {!! Form::textarea('body',null,['class'=>'', 'id' => 'ckview']) !!}
                </div>
            </div>

            <div class="offset-3 col-8">
                @if(Session::has('tinypng_error'))
                    <div class="alert alert-warning">
                        <p>{{session('tinypng_error')}}</p>
                    </div>
                @endif
                <div class="row d-flex align-items-center">
                    <div class="d-inline-block">
                        <label style="margin-bottom: 0">Добавить фото: </label>
                        {!! Form::file('fileMulti[]', ['class'=>'ml-2 btn btn-info', 'id' => 'fileMulti' , 'multiple']) !!}

                    </div>

                    <div class="d-inline-block ml-3 mt-3">
                        <label class="checkbox_container d-inline-block align-items-center">Оптимизировать изображения
                            <input type="checkbox"
                                   name="optimize" >
                            <span class="checkmark"></span>
                        </label>

                    </div>


                </div>
                <div class="row mt-3">
                    <div class="d-flex align-items-top flex-wrap" id="outputMulti">
                        @if($object->objectphotos)
                            @foreach($object->objectphotos as $photo)
                                <span class="col-3 mb-3 position-relative">
                                    <button class="position-absolute btn btn-danger remove_object_img" type="button"
                                            value="{{$photo->id}}"><i class="fa fa-minus"></i></button>

                                    <img class="img_responsive" src="/img/objects/{{$photo->file}}" alt="">
                                </span>
                            @endforeach
                        @endif

                    </div>


                </div>
            </div>
            @include('includes.formerrors')

            <div class="col-12 clearfix">
                {!! Form::submit('Изменить', ['class'=>'btn btn-success pull-right']) !!}
            </div>

            {!! Form::close() !!}
        </div>
        <div class="offset-sm-2 col-sm-10 detele_tbn_box  pull-left">

        {!! Form::model($object,['method'=>'DELETE', 'action'=>['AdminObjectController@destroy',$object->id]]) !!}
            {!! Form::submit('Удалить объект', ['class'=>'btn btn-danger mt-3 pull-right']) !!}
        {!! Form::close() !!}
        </div>

        <div class="modal fade attr_modul" tabindex="-1" role="dialog" id="modalOperation" aria-labelledby="modalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="add_operation">{!! Form::open(['method'=>'POST', 'action'=>['AdminOperationController@store']]) !!}
                            <div class="form-group row">
                                {!! Form::label('lgFormGroupInput','Добавить операцию', ['class' => 'col-sm-4 col-form-label col-form-label-lg']) !!}
                                <div class="col-sm-4">
                                    {!! Form::text('operation',null,['class'=>'form-control form-control-lg d-inline-block']) !!}
                                </div>
                                <div class="col-sm-4">
                                    {!! Form::submit('Добавить', ['class'=>'btn btn-success ']) !!}
                                </div>
                            </div>
                            {!! Form::close() !!}
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade attr_modul" tabindex="-1" id="modalType" role="dialog" aria-labelledby="modalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" add_type">
                            {!! Form::open(['method'=>'POST', 'action'=>['AdminTypeController@store']]) !!}
                            <div class="form-group row">
                                {!! Form::label('lgFormGroupInput','Добавить тип объекта', ['class' => 'col-sm-4 col-form-label col-form-label-lg']) !!}
                                <div class="col-sm-4">
                                    {!! Form::text('type',null,['class'=>'form-control form-control-lg d-inline-block']) !!}
                                </div>
                                <div class="col-sm-4">
                                    {!! Form::submit('Добавить', ['class'=>'btn btn-success ']) !!}
                                </div>
                            </div>
                            {!! Form::close() !!}
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade attr_modul" tabindex="-1" id="modalPlace" role="dialog" aria-labelledby="modalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class=" add_place">{!! Form::open(['method'=>'POST', 'action'=>['AdminPlaceController@store']]) !!}
                            <div class="form-group row">
                                {!! Form::label('lgFormGroupInput','Добавить месторасположение', ['class' => 'col-sm-4 col-form-label col-form-label-lg']) !!}
                                <div class="col-sm-4">
                                    {!! Form::text('place',null,['class'=>'form-control form-control-lg d-inline-block']) !!}
                                </div>
                                <div class="col-sm-4">
                                    {!! Form::submit('Добавить', ['class'=>'btn btn-success ']) !!}
                                </div>
                            </div>
                            {!! Form::close() !!}
                        </div>
                    </div>


                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('extrajavascript')
    <script src="{{url('tinymce/js/tinymce/jquery.tinymce.min.js')}}"></script>
    <script src="{{url('tinymce/js/tinymce/tinymce.min.js')}}"></script>
    <script>tinymce.init({
            selector: '#ckview',
            plugins: 'advlist autolink link image lists charmap print preview',
            language: 'ru'
        });</script>
@endsection