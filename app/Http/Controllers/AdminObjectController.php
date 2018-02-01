<?php

namespace App\Http\Controllers;

use App\Object;
use App\ObjectOperation;
use App\ObjectPhoto;
use App\ObjectPlace;
use App\ObjectType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminObjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $s = str_replace('0', '', $request->s);
        $objects = Object::latest()->search($s)->paginate(5);
//        dd($request);
        return view('admin.objects.index', compact('objects', 's'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $objectType = ObjectType::orderBy('type')->pluck('type', 'id')->all();
        $objectOperation = ObjectOperation::pluck('operation', 'id')->all();
        $objectPlace = ObjectPlace::orderBy('place')->pluck('place', 'id')->all();;

        return view('admin.objects.create', compact('objectType', 'objectOperation', 'objectPlace'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        $input = $request->all();

        if ($request->is_urgent == 'on') {
            $input['is_urgent'] = 1;
        } else {
            $input['is_urgent'] = 0;
        }
        if ($request->is_active == 'on') {
            $input['is_active'] = 1;
        } else {
            $input['is_active'] = 0;
        }
        $object = Object::create($input);
        $objectId = $object->id;
        $files = $request->fileMulti;

        foreach ($files as $file) {
            $name = time() . $file->getClientOriginalName();
            move_uploaded_file($file, public_path() . '/img/objects' . $name);
            ObjectPhoto::insert(['file' => $name, 'object_id' => $objectId]);
        }
        return redirect('/admin/objects');

    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //

        return view('admin.objects.edit');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

}
