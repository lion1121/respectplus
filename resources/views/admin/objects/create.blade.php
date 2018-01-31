@extends('layouts.admin')

@section('content')
    <h3 class="main_title">Добавить объект</h3>

    <div class="row d-flex align-items-lg-top">
        <div class=" col-12">
            {!! Form::open(['method'=>'POST', 'action'=>['AdminObjectController@store']]) !!}
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Тип операции', ['class' => 'col-sm-3 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-7 position-relative">
                    {!! Form::select('operation',array(""=>'Выберите операцию') + $objectOperation ,null,['class'=>'form-control form-control-lg d-inline-block']) !!}
                    <button class="btn btn-info position-absolute custom_field_add_btn" value="operation" type="button">
                        <i
                                class="fa fa-plus"></i></button>
                </div>
            </div>
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Тип объекта', ['class' => 'col-sm-3 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-7 position-relative">
                    {!! Form::select('type',array(""=>'Выберите тип объекта') + $objectType ,null,['class'=>'form-control form-control-lg d-inline-block']) !!}
                    <button class="btn btn-info position-absolute custom_field_add_btn" value="type" type="button"><i
                                class="fa fa-plus"></i></button>
                </div>
            </div>
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Месторасположение объекта', ['class' => 'col-sm-3 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-7 position-relative">
                    {!! Form::select('place',array(""=>'Месторасположение') + $objectPlace ,null,['class'=>'form-control form-control-lg d-inline-block']) !!}
                    <button class="btn btn-info position-absolute custom_field_add_btn" value="place" type="button"><i
                                class="fa fa-plus"></i></button>
                </div>
            </div>


            <div class="form-group row">
                <div class="form-group offset-3 col-4  d-flex align-items-center">
                    {!! Form::label('lgFormGroupInput','Кол-во комнат', ['class' => 'col-sm-4 col-form-label ']) !!}
                    {!! Form::text('title',null,['class'=>'form-control w-25   d-inline-block']) !!}
                </div>
                <div class="form-group col-4  d-flex align-items-center">
                    {!! Form::label('lgFormGroupInput','Площадь', ['class' => 'col-sm-4 col-form-label ']) !!}
                    {!! Form::text('title',null,['class'=>'form-control w-25   d-inline-block']) !!}

                </div>
            </div>
            <div class="form-group row">
                <div class="form-group offset-3 col-4  d-flex align-items-center">
                    {!! Form::label('lgFormGroupInput','Опубликовать', ['class' => 'col-sm-4 col-form-label ']) !!}
                    {{Form::checkbox('is_active', 'value',null,['class'=>''], true)}}
                </div>
                <div class="form-group col-4  d-flex align-items-center">
                    {!! Form::label('lgFormGroupInput','Срочное', ['class' => 'col-sm-4 col-form-label ']) !!}
                    {{Form::checkbox('is_urgent', 'value', false)}}
                </div>
            </div>


            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Заголовок', ['class' => 'col-sm-3 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-8 position-relative">
                    {!! Form::text('title',null,['class'=>'form-control form-control-lg d-inline-block']) !!}
                </div>
            </div>
            <div class="form-group row">
                {!! Form::label('lgFormGroupInput','Текс объяления', ['class' => 'col-sm-3 col-form-label col-form-label-lg']) !!}
                <div class="col-sm-8 position-relative">
                    {!! Form::textarea('title',null,['class'=>'', 'id' => 'ckview']) !!}
                </div>
            </div>
            <div class="col-12 clearfix">
                {!! Form::submit('Добавить', ['class'=>'btn btn-success pull-right']) !!}
            </div>
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
                        <div class=" add_type">{!! Form::open(['method'=>'POST', 'action'=>['AdminTypeController@store']]) !!}
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
    <script>tinymce.init({selector: '#ckview'});</script>
@endsection