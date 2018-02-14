<?php

namespace App\Http\Controllers;

use App\Message;
use App\News;
use App\Object;
use App\ObjectOperation;
use App\ObjectPlace;
use App\ObjectType;
use App\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/*
 * Main controller for customers
 * without login
 * */

class AppController extends Controller
{
    //
    /**Show last news, ojjects in sliders
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $objects = Object::latest()->limit(6)->get();
        $news = News::latest()->first();
        $settings = Setting::all();
        $objectTypes = ObjectType::orderBy('type')->pluck('type', 'id')->all();
        $objectOperations = ObjectOperation::pluck('operation', 'id')->all();
        $objectPlaces = ObjectPlace::orderBy('place')->pluck('place', 'id')->all();
        return view('home', compact('objects', 'news', 'objectTypes', 'objectOperations', 'objectPlaces','settings'));
    }

    /**
     * @param $id
     * Show detail property
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function property($id)
    {
        $object = Object::findOrFail($id);

        return view('objects.detail-property', compact('object'));

    }

    /** Show list of news
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function newsList()
    {
        $news = News::latest()->paginate(2);
        return view('news.news-list', compact('news'));
    }

    /**Show news post details
     * @param $id
     */
    public function newsDetail($id)
    {
        $news = News::findOrFail($id);
        return view('news.news-detail', compact('news'));
    }

    /**Get parameters from form
     * search object and output in objects page
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function find(Request $request)
    {

        $objectTypes = ObjectType::orderBy('type')->pluck('type', 'id')->all();
        $objectOperations = ObjectOperation::pluck('operation', 'id')->all();
        $objectPlaces = ObjectPlace::orderBy('place')->pluck('place', 'id')->all();

        if ($request->object_operation_id) {
            $operationId = $request->object_operation_id;
        } else {
            $operationId = null;
        }

        if ($request->object_type_id) {
            $typeId = $request->object_type_id;
        } else {
            $typeId = null;
        }

        if ($request->object_place_id) {
            $placeId = $request->object_place_id;
        } else {
            $placeId = null;
        }
        $objectsCount = Object::all()
            ->when($operationId, function ($query) use ($operationId) {
                return $query->where('object_operation_id', $operationId);
            })
            ->when($typeId, function ($query) use ($typeId) {
                return $query->where('object_type_id', $typeId);
            })
            ->when($placeId, function ($query) use ($placeId) {
                return $query->where('object_place_id', $placeId);
            })->count();
        $objects = Object::latest()
            ->when($operationId, function ($query) use ($operationId) {
                return $query->where('object_operation_id', $operationId);
            })
            ->when($typeId, function ($query) use ($typeId) {
                return $query->where('object_type_id', $typeId);
            })
            ->when($placeId, function ($query) use ($placeId) {
                return $query->where('object_place_id', $placeId);
            })->paginate(3)->withPath('/objects');

        return view('objects.objects-list', compact('objects', 'objectTypes', 'objectOperations', 'objectPlaces', 'objectsCount'));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function objects(Request $request)
    {
        $objectTypes = ObjectType::orderBy('type')->pluck('type', 'id')->all();
        $objectOperations = ObjectOperation::pluck('operation', 'id')->all();
        $objectPlaces = ObjectPlace::orderBy('place')->pluck('place', 'id')->all();

        if ($request->object_operation_id) {
            $operationId = $request->object_operation_id;
        } else {
            $operationId = null;
        }

        if ($request->object_type_id) {
            $typeId = $request->object_type_id;
        } else {
            $typeId = null;
        }

        if ($request->object_place_id) {
            $placeId = $request->object_place_id;
        } else {
            $placeId = null;
        }
        $objectsCount = Object::all()
            ->when($operationId, function ($query) use ($operationId) {
                return $query->where('object_operation_id', $operationId);
            })
            ->when($typeId, function ($query) use ($typeId) {
                return $query->where('object_type_id', $typeId);
            })
            ->when($placeId, function ($query) use ($placeId) {
                return $query->where('object_place_id', $placeId);
            })->count();


        $objects = Object::latest()
            ->when($operationId, function ($query) use ($operationId) {
                return $query->where('object_operation_id', $operationId);
            })
            ->when($typeId, function ($query) use ($typeId) {
                return $query->where('object_type_id', $typeId);
            })
            ->when($placeId, function ($query) use ($placeId) {
                return $query->where('object_place_id', $placeId);
            })->paginate(3);
        return view('objects.objects-list', compact('objects', 'objectTypes', 'objectOperations', 'objectPlaces', 'objectsCount'));
    }


    /**
     * Call from JS AJAX main.js
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function storeMessage(Request $request)
    {
        //
        if ($request->phone) {

            $input['user_phone'] = filter_var($request->phone, FILTER_SANITIZE_NUMBER_INT);

            if ($request->email) {

                $input['email'] = filter_var($request->email, FILTER_SANITIZE_EMAIL);
            }

            if($request->name) {
                $input['name'] = filter_var($request->name, FILTER_SANITIZE_SPECIAL_CHARS);
            }
            if($request->typeOperation) {
                $typeOpeartion = filter_var($request->typeOperation,FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            }
            if($request->typeObject) {
                $typeObject = filter_var($request->typeOperation,FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            }
            if($request->extratext) {
                $extratext = filter_var($request->extratext,FILTER_SANITIZE_FULL_SPECIAL_CHARS);
            }
            $input['text'] = 'Меня зовут ' . $input['name'] . ', телефон ' .  $input['user_phone'] . ' хочу ' . $typeOpeartion . ' ' . $typeObject .
                $extratext;


            $message = new Message();

            $message->create($input);
            echo 'Ваше сообщение успешно отправлено';
        }

    }


}
