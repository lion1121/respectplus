<?php

namespace App\Http\Controllers;

use App\Helper\Sanitize;
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
        $objects = Object::where('is_active', 1)->latest()->limit(6)->get();
        $news = News::latest()->first();
        $settings = Setting::all();
        $objectTypes = ObjectType::orderBy('type')->pluck('type', 'id')->all();
        $objectOperations = ObjectOperation::pluck('operation', 'id')->all();
        $objectPlaces = ObjectPlace::orderBy('place')->pluck('place', 'id')->all();
        return view('home', compact('objects', 'news', 'objectTypes', 'objectOperations', 'objectPlaces', 'settings'));
    }

    /**
     * @param $id
     * Show detail property
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function property($slug)
    {
        $object = Object::whereSlug($slug)->firstOrFail();
        $objectTypes = ObjectType::orderBy('type')->pluck('type', 'id')->all();
        $objectOperations = ObjectOperation::pluck('operation', 'id')->all();
        $objectPlaces = ObjectPlace::orderBy('place')->pluck('place', 'id')->all();
        return view('objects.detail-property', compact('object', 'objectTypes', 'objectOperations', 'objectPlaces'));

    }

    /** Show list of news
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function newsList()
    {
        $news = News::latest()->paginate(8);
        return view('news.news-list', compact('news'));
    }

    /**Show news post details
     * @param $id
     */
    public function newsDetail($slug)
    {
        $news = News::whereSlug($slug)->firstOrFail();
        return view('news.news-detail', compact('news'));
    }

    /**Get parameters from form
     * search object and output in objects page
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function find(Request $request)
    {

        $objectTypes = ObjectType::orderBy('type','desc')->pluck('type', 'id')->all();
        $objectOperations = ObjectOperation::orderBy('type')->pluck('operation', 'id')->all();
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
        if ($request->is_urgent == 'on') {
            $isUrgent = 1;
        } else {
            $isUrgent = null;
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
            })->when($isUrgent, function ($query) use ($isUrgent) {
                return $query->where('is_urgent', $isUrgent);
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
            })
            ->when($isUrgent, function ($query) use ($isUrgent) {
                return $query->where('is_urgent', $isUrgent);
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
        if ($request->is_urgent == 'on') {
            $isUrgent = 1;
        } else {
            $isUrgent = null;
        }
        $objectsCount = Object::all()->where('is_active', 1)
            ->when($operationId, function ($query) use ($operationId) {
                return $query->where('object_operation_id', $operationId);
            })
            ->when($typeId, function ($query) use ($typeId) {
                return $query->where('object_type_id', $typeId);
            })
            ->when($placeId, function ($query) use ($placeId) {
                return $query->where('object_place_id', $placeId);
            })->count();


        $objects = Object::where('is_active', 1)->latest()
            ->when($operationId, function ($query) use ($operationId) {
                return $query->where('object_operation_id', $operationId);
            })
            ->when($typeId, function ($query) use ($typeId) {
                return $query->where('object_type_id', $typeId);
            })
            ->when($placeId, function ($query) use ($placeId) {
                return $query->where('object_place_id', $placeId);
            })->when($isUrgent, function ($query) use ($isUrgent) {
                return $query->where('is_urgent', $isUrgent);
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
        if ($request->ajax()) {

            $input['user_phone'] = Sanitize::CheckInt($request->phone);

            if ($request->email) {

                $input['email'] = Sanitize::CheckEmail($request->email);
            }

            if ($request->name) {
                $input['name'] = Sanitize::CheckStr($request->name);
            }
            if ($request->typeOperation) {
                $typeOpeartion = Sanitize::CheckStr($request->typeOperation);
            }
            if ($request->typeObject) {
                $typeObject = Sanitize::CheckStr($request->typeObject);
            }
            if ($request->extratext != '') {
                $extratext = Sanitize::CheckStr($request->extratext);
            }
            $input['text'] = 'Меня зовут ' . $input['name'] . ' хочу ' . $typeOpeartion . ' ' . $typeObject
                . ".  " . $extratext;


            $message = new Message();

            $message->create($input);
            echo 'Ваше сообщение успешно отправлено';
        }

    }

    public function search(Request $request)
    {
        return view('search.index');
    }


}
