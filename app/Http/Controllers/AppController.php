<?php

namespace App\Http\Controllers;

use App\Helper\Sanitize;
use App\Message;
use App\News;
use App\EstateObject;
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
        $objects = EstateObject::where('is_active', 1)->latest()->get();
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
        $object = EstateObject::whereSlug($slug)->firstOrFail();
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
        $objectOperations = ObjectOperation::orderBy('operation')->pluck('operation', 'id')->all();
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
        $objectsCount = EstateObject::all()
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
        $objects = EstateObject::latest()
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
            })->paginate(8)->withPath('/objects');
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
        $objectsCount = EstateObject::all()->where('is_active', 1)
            ->when($operationId, function ($query) use ($operationId) {
                return $query->where('object_operation_id', $operationId);
            })
            ->when($typeId, function ($query) use ($typeId) {
                return $query->where('object_type_id', $typeId);
            })
            ->when($placeId, function ($query) use ($placeId) {
                return $query->where('object_place_id', $placeId);
            })->count();


        $objects = EstateObject::where('is_active', 1)->latest()
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
            })->paginate(8);
        return view('objects.objects-list', compact('objects', 'objectTypes', 'objectOperations', 'objectPlaces', 'objectsCount'));
    }


    public function search(Request $request)
    {
        return view('search.index');
    }


}
