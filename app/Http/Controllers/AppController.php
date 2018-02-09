<?php

namespace App\Http\Controllers;

use App\News;
use App\Object;
use App\ObjectOperation;
use App\ObjectPlace;
use App\ObjectType;
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
        $objects = Object::all();
        $news = News::latest()->first();

        $objectTypes = ObjectType::orderBy('type')->pluck('type', 'id')->all();
        $objectOperations = ObjectOperation::pluck('operation', 'id')->all();
        $objectPlaces = ObjectPlace::orderBy('place')->pluck('place', 'id')->all();
        return view('home', compact('objects','news', 'objectTypes','objectOperations', 'objectPlaces'));
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

    public function find(Request $request)
    {
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

        $objects = Object::all()
            ->when($operationId, function ($query) use ($operationId) {
                return $query->where('object_operation_id', $operationId);
            })
            ->when($typeId, function ($query) use ($typeId) {
                return $query->where('object_type_id', $typeId);
            })
            ->when($placeId, function ($query) use ($placeId) {
                return $query->where('object_place_id', $placeId);
            })
            ;


         return view('objects.objects-list', compact('objects'));
    }

    public function objects()
    {
        return view('objects.objects-list');
    }
}
